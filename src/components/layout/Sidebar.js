'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
export default function Sidebar() {
    const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem('loggedUser')
        router.push('/login')
    }

    return (
        <aside className="w-64 bg-white shadow-xl shadow-gray-200 flex flex-col justify-between">
            <div>
                <div className="p-6 border-b border-gray-200 text-center w-62 h-30">
                    <Image
                        src="/images/georescuee.png"
                        width={300}
                        height={200}
                        alt="georescue-logo"
                    />
                </div>
                <nav className="flex flex-col mt-4">
                    <Link
                        href="/feed"
                        className="px-6 py-3 text-gray-700 hover:bg-[#F2F9FF] hover:text-[#1581b4] transition"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="#"
                        className="px-6 py-3 text-gray-700 hover:bg-[#F2F9FF] hover:text-[#1581b4] transition"
                    >
                        Opcion 2
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