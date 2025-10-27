// lib/influxdb.js
import { InfluxDB } from '@influxdata/influxdb-client'

const url = process.env.INFLUX_URL || 'https://us-east-1-1.aws.cloud2.influxdata.com'
const token = process.env.INFLUX_TOKEN
const org = process.env.INFLUX_ORG
const bucket = process.env.INFLUX_BUCKET

// Cliente InfluxDB
const influxDB = new InfluxDB({ url, token })

export { influxDB, org, bucket }