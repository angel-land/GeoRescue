'use client'

import { useState } from 'react'

export default function CreateAccount() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        deviceId: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', form)
        // TODO: send form data to backend or mock API
    }

    return (
        <div className="w-[90vw] max-w-md bg-white rounded-2xl shadow-xl shadow-gray-300 p-8 flex flex-col gap-6">

            <div className="text-center">
                <h2 className="text-2xl font-semibold text-[#1581b4]">Crear Cuenta</h2>
                <p className="text-gray-500 text-sm mt-1">
                    Crea una nueva cuenta para tu dispositivo Raspberry Pi
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-gray-700 text-sm font-medium">
                        Nombre completo
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ej. Juan Pérez"
                        required
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1581b4] transition"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-gray-700 text-sm font-medium">
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tucorreo@ejemplo.com"
                        required
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1581b4] transition"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="text-gray-700 text-sm font-medium">
                        Contraseña
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        required
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1581b4] transition"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="deviceId" className="text-gray-700 text-sm font-medium">
                        ID GeoRescue
                    </label>
                    <input
                        id="deviceId"
                        name="deviceId"
                        type="text"
                        value={form.deviceId}
                        onChange={handleChange}
                        placeholder="Ej. RPI-1234ABCD"
                        required
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1581b4] transition"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Ingresa el ID de tu Dispositivo GeoRescue (lo encontrarás en la configuración del dispositivo).
                    </p>
                </div>

                <button
                    type="submit"
                    className="bg-[#1581b4] hover:bg-[#1a9cd8] text-white font-medium py-2.5 rounded-md transition"
                >
                    Crear Cuenta
                </button>
            </form>
            <p className="text-center text-gray-500 text-sm">
                ¿Ya tienes cuenta?{' '}
                <a href="/login" className="text-[#1581b4] font-medium hover:underline">
                    Inicia sesión
                </a>
            </p>
        </div>
    )
}