'use client'

import { useState } from 'react'

export default function EmergencyCard({ username = '', onSave }) {
  const [isEditing, setIsEditing] = useState(false)
  const [currentUsername, setCurrentUsername] = useState(username)

  const handleSave = () => {
    if (!currentUsername.trim()) return
    onSave(currentUsername)
    setIsEditing(false)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-gray-300 p-6 w-full mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#1581b4] text-lg font-semibold">
          Contacto de Emergencia — Telegram
        </h3>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-sm text-[#1581b4] hover:text-[#1a9cd8] font-medium cursor-pointer transition"
        >
          {isEditing ? 'Cancelar' : 'Editar'}
        </button>
      </div>
      {/* Content */}
      {!isEditing ? (
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-bold text-lg">
            {currentUsername ? (
              <a
                href={`https://t.me/${currentUsername.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1581b4] transition"
              >
                @{currentUsername.replace('@', '')}
              </a>
            ) : (
              'No registrado'
            )}
          </span>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={currentUsername}
            onChange={(e) => setCurrentUsername(e.target.value)}
            placeholder="Ej. @Usuario"
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