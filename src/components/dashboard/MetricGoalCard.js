'use client'
import React, { useState, useEffect } from 'react'

export default function MetricGoalCard({
    title,
    value,
    color = '#1581b4',
    children,
    metricKey,
    className = '',
}) {
    const [isEditing, setIsEditing] = useState(false)
    const [goal, setGoal] = useState({ min: '', max: '' })
    const [currentValue, setCurrentValue] = useState(value)
    const [gaugeKey, setGaugeKey] = useState(0) // 👈 helps force gauge re-render

    // Load saved goal and value
    useEffect(() => {
        const storedGoals = JSON.parse(localStorage.getItem('metricGoals') || '{}')
        const storedValues = JSON.parse(localStorage.getItem('metricValues') || '{}')
        if (storedGoals[metricKey]) setGoal(storedGoals[metricKey])
        if (storedValues[metricKey]) setCurrentValue(storedValues[metricKey])
        else setCurrentValue(value)
    }, [metricKey, value])

    const handleSaveAll = () => {
        // Save goal
        const storedGoals = JSON.parse(localStorage.getItem('metricGoals') || '{}')
        storedGoals[metricKey] = goal
        localStorage.setItem('metricGoals', JSON.stringify(storedGoals))

        // Save value
        const storedValues = JSON.parse(localStorage.getItem('metricValues') || '{}')
        storedValues[metricKey] = currentValue
        localStorage.setItem('metricValues', JSON.stringify(storedValues))

        // Force gauge to re-render with new value
        setGaugeKey((prev) => prev + 1)

        setIsEditing(false)
    }

    // Numeric value for logic
    const numericValue = parseFloat(currentValue)

    // ✅ Dynamic color based on medic-set goal
    let currentColor = color
    if (goal.min && goal.max && !isNaN(numericValue)) {
        if (numericValue < goal.min) currentColor = '#fbbf24' // yellow low
        else if (numericValue > goal.max) currentColor = '#ef4444' // red high
        else currentColor = '#5db996' // green healthy
    }

    // Extract unit (e.g., bpm, °C, %) for display
    const extractUnit = (str) => {
        const match = str.match(/[a-zA-Z°%]+/)
        return match ? match[0] : ''
    }

    const unit = extractUnit(value)

    return (
        <div
            className={`bg-white rounded-2xl shadow-xl shadow-gray-300 p-5 flex flex-col justify-center items-center ${className}`}
            style={{ borderTop: `4px solid ${currentColor}` }}
        >
            {/* Header */}
            <div className="flex justify-between w-full items-center mb-3">
                <h3 className="text-gray-700 text-base font-semibold">{title}</h3>

                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-sm text-[#1581b4] hover:text-[#1a9cd8] transition"
                >
                    {isEditing ? 'Cancelar' : 'Editar'}
                </button>
            </div>

            {/* Gauge (forced to re-render on save via key) */}
            <div className="flex flex-col items-center w-full">
                {children &&
                    React.cloneElement(children, {
                        key: gaugeKey,
                        color: currentColor,
                        value: parseFloat(currentValue), // always use editable value
                    })}
            </div>

            {/* Unified colored label (value + unit) */}
            <p
                className="text-2xl font-semibold flex items-center justify-center gap-1"
                style={{ color: currentColor }}
            >
                {numericValue}
                <span className="text-lg font-semibold">{unit}</span>
            </p>

            {/* Edit form */}
            {isEditing && (
                <div className="flex flex-col w-full gap-2 mt-4">
                    {/* Editable value */}
                    <label className="text-xs text-gray-500 font-medium">
                        Valor actual
                    </label>
                    <input
                        type="text"
                        value={currentValue}
                        onChange={(e) => setCurrentValue(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 text-center focus:ring-2 focus:ring-[#1581b4]"
                    />

                    {/* Editable range */}
                    <label className="text-xs text-gray-500 font-medium mt-2">
                        Rango permitido
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="number"
                            placeholder="Mín"
                            value={goal.min}
                            onChange={(e) => setGoal({ ...goal, min: e.target.value })}
                            className="w-1/2 border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-[#1581b4] text-center"
                        />
                        <input
                            type="number"
                            placeholder="Máx"
                            value={goal.max}
                            onChange={(e) => setGoal({ ...goal, max: e.target.value })}
                            className="w-1/2 border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-[#1581b4] text-center"
                        />
                    </div>

                    {/* Save button */}
                    <button
                        onClick={handleSaveAll}
                        className="bg-[#5db996] hover:bg-[#73c6a7] text-white font-medium py-1.5 rounded-md mt-2 transition"
                    >
                        Guardar
                    </button>
                </div>
            )}

            {/* Range info (only visible in view mode) */}
            {!isEditing && (
                <p className="text-gray-500 text-xs mt-3">
                    🎯 Rango establecido:{' '}
                    {goal.min && goal.max ? `${goal.min}–${goal.max}` : 'sin establecer'}
                </p>
            )}
        </div>
    )
}
