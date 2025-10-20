'use client'

import { useState } from 'react'

export default function EmergencyCard({ number = '', onSave }) {
  const [isEditing, setIsEditing] = useState(false)
  const [currentNumber, setCurrentNumber] = useState(number)

  const handleSave = () => {
    if (!currentNumber.trim()) return
    onSave(currentNumber)
    setIsEditing(false)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-gray-300 p-6 w-full mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#1581b4] text-lg font-semibold">
          Número de Emergencia
        </h3>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-sm text-[#1581b4] hover:text-[#1a9cd8] font-medium cursor-pointer transition"
        >
          {isEditing ? 'Cancelar' : 'Editar'}
        </button>
      </div>

      {!isEditing ? (
        <p className="text-gray-700 font-bold text-lg">
          {currentNumber || 'No registrado'}
        </p>
      ) : (
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="tel"
            value={currentNumber}
            onChange={(e) => setCurrentNumber(e.target.value)}
            placeholder="Ej. +52 55 1234 5678"
            className="border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1581b4] flex-1"
          />
          <button
            onClick={handleSave}
            className="bg-[#5db996] hover:bg-[#73c6a7] text-white font-medium px-4 py-2 rounded-md transition"
          >
            Guardar
          </button>
        </div>
      )}
    </div>
  )
}