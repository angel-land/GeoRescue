'use client'

import { useEffect, useState } from 'react'

export default function Gauge({
    value = 0,
    min = 0,
    max = 100,
    label = '',
    color = '#1581b4',
}) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1)
        setProgress(percentage)
    }, [value, min, max])

    const radius = 60
    const circumference = Math.PI * radius
    const strokeDashoffset = circumference * (1 - progress)

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <svg
                width="160"
                height="100"
                viewBox="0 0 160 100"
                className="transform rotate-180"
            >
                {/* Background arc */}
                <path
                    d="M10,90 A70,70 0 0,1 150,90"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="12"
                />
                {/* Foreground arc (progress) */}
                <path
                    d="M10,90 A70,70 0 0,1 150,90"
                    fill="none"
                    stroke={color}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                />
            </svg>
        </div>
    )
}