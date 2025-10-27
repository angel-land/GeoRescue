// app/api/data.js
import { influxDB, org, bucket } from '../../lib/influxdb'

export default async function handler(req, res) {
  try {
    const queryApi = influxDB.getQueryApi(org)

    // Consulta a InfluxDB: ajusta "temperatura" por el nombre de tu measurement
    const query = `
      from(bucket: "${bucket}")
        |> range(start: -10m)     // últimos 10 minutos
        |> filter(fn: (r) => r._measurement == "temperatura")
        |> last()
    `

    const data = []

    await queryApi.collectRows(query, {
      next: (row, tableMeta) => {
        const o = tableMeta.toObject(row)
        data.push(o)
      },
      error: (error) => {
        console.error(error)
        res.status(500).json({ error: 'Error al consultar InfluxDB' })
      },
      complete: () => {
        res.status(200).json(data)
      },
    })
  } catch (err) {
    console.error('Error general:', err)
    res.status(500).json({ error: 'Error al obtener datos de InfluxDB' })
  }
}