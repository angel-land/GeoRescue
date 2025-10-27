'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Sidebar() {
    const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem('loggedUser')
        router.push('/login')
    }

    return (
        <aside className="w-64 bg-white shadow-xl shadow-gray-200 flex flex-col justify-between">
            <div>
                <div className="p-6 border-b border-gray-200 text-center">
                    <h1 className="text-[#1581b4] text-xl font-bold">Logo</h1>
                </div>
                <nav className="flex flex-col mt-4">
                    <Link
                        href="/feed"
                        className="px-6 py-3 text-gray-700 hover:bg-[#F2F9FF] hover:text-[#1581b4] transition"
                    >
                       Inicio
                    </Link>
                    <Link
                        href="/healthMetrics"
                        className="px-6 py-3 text-gray-700 hover:bg-[#F2F9FF] hover:text-[#1581b4] transition"
                    >
                        Metricas
                    </Link>
                    <Link
                        href="#"
                        className="px-6 py-3 text-gray-700 hover:bg-[#F2F9FF] hover:text-[#1581b4] transition"
                    >
                        Opción 3
                    </Link>
                </nav>
            </div>

            <div className="border-t border-gray-200">
                <Link
                    href="#"
                    className="block px-6 py-3 text-gray-700 hover:bg-[#F2F9FF] hover:text-[#1581b4] transition"
                >
                    Perfil
                </Link>
                <button
                    onClick={handleLogout}
                    className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-[#F2F9FF] hover:text-red-500 transition"
                >
                    Cerrar sesión
                </button>
            </div>
        </aside>
    )
}