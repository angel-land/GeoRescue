'use client'

import Gauge from '@/components/dashboard/Gauge'
import MetricGoalCard from '@/components/dashboard/MetricGoalCard'
import MetricEditableCard from '@/components/dashboard/MetricEditableCard'
import Sidebar from '@/components/layout/Sidebar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { users } from '../../../public/MockedData/users'

export default function HealthMetricsPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedUser')
    if (!storedUser) {
      router.push('/login')
      return
    }

    const parsedUser = JSON.parse(storedUser)
    const matchedUser = users.find((u) => u.email === parsedUser.email)

    if (!matchedUser) {
      localStorage.removeItem('loggedUser')
      router.push('/login')
      return
    }

    setUser(matchedUser)
  }, [router])

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F2F9FF] text-[#1581b4] text-xl font-medium">
        Cargando usuario...
      </div>
    )
  }

  const { bpm, weight, bloodOxygen, height, temperature } = user.metrics

  const getColor = (metric, value) => {
    if (metric === 'bpm') {
      if (value < 60) return '#fbbf24'
      if (value > 100) return '#ef4444'
      return '#5db996'
    }
    if (metric === 'oxygen') {
      if (value < 94) return '#ef4444'
      if (value < 97) return '#fbbf24'
      return '#5db996'
    }
    if (metric === 'temperature') {
      if (value < 36.1) return '#fbbf24'
      if (value > 37.5) return '#ef4444'
      return '#5db996'
    }
    return '#1581b4'
  }

  return (
    <div className="flex min-h-screen w-[100vw] bg-[#F2F9FF]">
      <Sidebar />

      <main className="flex w-full justify-center items-start py-10">
        <div className="flex w-1/2 lg:w-1/2 flex-col justify-start items-center gap-10">

          <h1 className="text-3xl font-bold text-[#1581b4]">
            Monitoreo de Salud
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
            <div className="flex flex-col gap-6">
              <MetricGoalCard
                className="w-full"
                title="Ritmo Cardíaco"
                value={`${bpm} bpm`}
                color={getColor('bpm', bpm)}
                metricKey="bpm"
              >
                <div className="flex flex-col items-center">
                  <Gauge
                    value={bpm}
                    min={40}
                    max={130}
                    label="bpm"
                    color={getColor('bpm', bpm)}
                  />
                </div>
              </MetricGoalCard>

              {/* Blood Oxygen */}
              <MetricGoalCard
                className="w-full"
                title="Oxígeno en Sangre"
                value={`${bloodOxygen}%`}
                color={getColor('oxygen', bloodOxygen)}
                metricKey="oxygen"
              >
                <div className="flex flex-col items-center">
                  <Gauge
                    value={bloodOxygen}
                    min={85}
                    max={100}
                    label="%"
                    color={getColor('oxygen', bloodOxygen)}
                  />
                </div>
              </MetricGoalCard>

              {/* Weight */}
              <MetricGoalCard
                className="w-full"
                title="Peso Corporal"
                value={`${weight} kg`}
                color="#1581b4"
                metricKey="weight"
              >
                <div className="flex flex-col items-center">
                  <Gauge
                    value={weight}
                    min={50}
                    max={120}
                    label="kg"
                    color="#1581b4"
                  />
                </div>
              </MetricGoalCard>
            </div>

            {/* RIGHT COLUMN – Editable metrics */}
            <div className="flex flex-col gap-6">
              <MetricEditableCard
                title="Estatura"
                value={`${height} cm`}
                metricKey="height"
                color="#1581b4"
              />
              <MetricEditableCard
                title="Temperatura Corporal"
                value={`${temperature} °C`}
                metricKey="temperature"
                color={getColor('temperature', temperature)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
