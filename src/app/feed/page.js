'use client'

import Sidebar from '@/components/layout/Sidebar'
import ProfileCard from '@/components/dashboard/ProfileCard'
import MetricCard from '@/components/dashboard/MetricCard'
import EmergencyCard from '@/components/dashboard/EmergencyCard'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { users } from '../../../public/MockedData/users'
import DeviceCard from '@/components/dashboard/DeviceCard'
import HeartIcon from '../../../public/Icons/HeartIcon'
import TemperatureIcon from '../../../public/Icons/TemperatureIcon'
export default function FeedPage() {
    const router = useRouter()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedUser')
        if (!storedUser) {
            router.push('/login')
            return
        }

        // Parse stored user
        const parsedUser = JSON.parse(storedUser)

        // Find matching user by email from mockedData
        const matchedUser = users.find((u) => u.email === parsedUser.email)

        if (!matchedUser) {
            // If not found, logout
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

    const { bpm, temperature } = user.metrics

    return (
        <div className="flex min-h-screen w-[100vw] bg-[#F2F9FF]">
            <Sidebar />
            <main className="flex w-full justify-center items-center">
                <div className="flex w-1/2 flex-col justify-center items-center">
                    <ProfileCard user={user} className="w-full" />
                    <DeviceCard device={user.device} />
                    <div className="mt-4 w-full flex flex-row">
                        <MetricCard
                            className="w-1/2 h-70 mr-4 font-semibold"
                            title="Ritmo Cardíaco"
                            value={`${bpm} bpm`}
                            color="#5db996"
                        >
                            <div className='w-16 h-16'>
                                <HeartIcon className="max-w-full" />
                            </div>
                        </MetricCard>
                        <MetricCard
                            className="w-1/2 ml-4 font-semibold "
                            title="Temperatura (°C)"
                            value={`${temperature}°`}
                            color="#1581b4"
                        >
                            <div className='w-16 h-16'>
                                <TemperatureIcon className="max-w-full" />
                            </div>
                        </MetricCard>
                    </div>
                    <div className='w-full'>
                        <EmergencyCard
                            number={user.emergencyNumber}
                            onSave={(newNumber) => {
                                // Update local copy of the user
                                const updatedUser = { ...user, emergencyNumber: newNumber }
                                setUser(updatedUser)
                                // Optionally save to localStorage to persist
                                localStorage.setItem('loggedUser', JSON.stringify(updatedUser))
                            }}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}