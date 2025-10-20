'use client'

import { useState } from 'react'

export default function DeviceCard({ device }) {
    const { name, id } = device
    return (
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-300 p-6 w-full mt-6 flex justify-between">
            <div className='w-1/2 flex flex-col justify-center items-center'>
                <label className="block font-semibold text-[#1581b4] text-sm mb-1">Dispositivo</label>
                <p className=" font-bold text-gray-700 py-2">{name}</p>
            </div>
            <div className='w-1/2 flex flex-col justify-center items-center'>
                <label className="block font-semibold text-[#1581b4] text-sm mb-1">ID GeoRescue</label>
                <p className=" font-bold text-gray-700 py-2"
                >{id}</p>
            </div>
        </div>
    )
}