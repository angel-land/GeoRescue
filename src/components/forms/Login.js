'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { accounts } from '../../../public/MockedData/accounts'

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()

        // Find user in mocked data
        const user = accounts.find(
            (acc) => acc.email === email.trim() && acc.password === password
        )

        if (user) {
            // Optional: Save user info to localStorage (mock "session")
            localStorage.setItem('loggedUser', JSON.stringify(user))
            router.push('/feed')
        } else {
            setError('Correo o contraseña incorrectos.')
        }
    }
    return (
        <div className="w-1/2 lg:w-[45%] h-[60%] bg-white shadow-xl shadow-gray-300 rounded-lg flex flex-row">

            <div className="w-1/2 relative">
                <Image
                    alt="geo-rescue-logo"
                    src="/images/SALUD.jpg"
                    fill
                    className="rounded-lg object-cover"
                />
            </div>

            <div className="w-1/2 gap-4 p-8 flex justify-center items-center flex-col">
                <div>
                    <Image
                        src="/images/georescuee.png"
                        width={300}
                        height={200}
                        alt="georescue-logo"
                    />
                </div>

                <h3 className="w-full text-center font-bold text-3xl text-[#1581b4]">
                    Iniciar Sesión
                </h3>

                <form onSubmit={handleLogin} className="w-full flex flex-col gap-3">
                    <input
                        type="email"
                        className="border rounded-sm p-2 w-full text-black placeholder-gray-400"
                        placeholder="Ingrese Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        className="border rounded-sm p-2 w-full text-black placeholder-gray-400"
                        placeholder="Ingrese Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && (
                        <p className="text-red-500 text-sm text-center font-medium">
                            {error}
                        </p>
                    )}
                    <button
                        type="submit"
                        className="border rounded-sm p-2 bg-[#1581b4] text-white w-full cursor-pointer hover:bg-[#1a9cd8] transition duration-200"
                    >
                        Iniciar Sesión
                    </button>
                </form>

                <a href="#" className="w-full text-center block text-[#3869df] text-sm">
                    ¿Olvidaste tu contraseña?
                </a>

                <Link href="/account/create" className="w-full">
                    <button className="w-full border rounded-sm p-2 cursor-pointer font-bold bg-[#5DB996] text-white hover:bg-[#73c6a7] transition duration-200">
                        Crear cuenta
                    </button>
                </Link>
            </div>
        </div>
    )
}