'use client'

import Image from "next/image"

export default function ProfileCard({ user }) {

    const { avatar, name, lastName, age } = user;

    return (
        <div className="w-full bg-white rounded-2xl shadow-xl shadow-gray-300 p-6 flex justify-center items-center gap-6">
            <div className="relative text-[#1581b4]">
                <Image src={avatar} alt="profile-avatar" className="rounded-full" width={150} height={150} />
            </div>
            <div className="flex flex-col gap-3 w-full">
                <div>
                    <label className="block font-semibold text-gray-500 text-sm mb-1">Nombre</label>
                    <p className="w-full font-semibold text-gray-700 border-b border-b-gray-300 py-2">{`${name} ${lastName}`}</p>
                </div>
                <div>
                    <label className="block font-semibold text-gray-500 text-sm mb-1">Edad</label>
                    <p className="w-full font-bold text-gray-700 border-b border-b-gray-300 py-2"
                    >{age}</p>
                </div>
            </div>
        </div>
    )
}