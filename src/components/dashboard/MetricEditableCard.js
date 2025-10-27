'use client'

import { useState, useEffect } from 'react'
import clsx from 'clsx'

export default function MetricEditableCard({
  title,
  value,
  color = '#1581b4',
  metricKey,
  className,
  children,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [currentValue, setCurrentValue] = useState(value)

  // Load saved value
  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem('editableMetrics') || '{}')
    if (storedValues[metricKey]) {
      setCurrentValue(storedValues[metricKey])
    }
  }, [metricKey])

  // Save to localStorage
  const handleSave = () => {
    const storedValues = JSON.parse(localStorage.getItem('editableMetrics') || '{}')
    storedValues[metricKey] = currentValue
    localStorage.setItem('editableMetrics', JSON.stringify(storedValues))
    setIsEditing(false)
  }
return (
    <div
      className={clsx(
        className,
        'bg-white rounded-2xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-5'
      )}
      style={{ borderTop:`4px solid ${color}`}}
    >
      <div className="flex justify-between w-full items-center mb-4">
        <h3 className="text-gray-700 text-lg font-semibold">{title}</h3>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-sm text-[#1581b4] hover:text-[#1a9cd8] transition"
        >
          {isEditing ? 'Cancelar' : 'Editar'}
        </button>
      </div>

      {children && <div className="mb-3 flex justify-center items-center">{children}</div>}

      {!isEditing ? (
        <p className="text-3xl font-semibold" style={{ color }}>
          {currentValue}
        </p>
      ) : (
        <div className="flex flex-col gap-2 items-center">
          <input
            type="text"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-center focus:ring-2 focus:ring-[#1581b4] w-full"
          />
          <button
            onClick={handleSave}
            className="bg-[#5db996] hover:bg-[#73c6a7] text-white font-medium py-1.5 px-4 rounded-md transition"
          >
            Guardar
          </button>
        </div>
      )}
    </div>
  )
}