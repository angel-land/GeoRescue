'use client'

import clsx from "clsx"

export default function MetricCard({ title, value, color = '#1581b4', className, children }) {
    return (
        <div
            className={clsx(className, "bg-white rounded-2xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center py-10")}
            style={{ borderTop: `2px solid ${color}` }}
        >
            {children && (
                <div className={"mb-3 flex justify-center items-center"}>
                    {children}
                </div>
            )}
            <h3 className="text-gray-600 text-lg font-bold mb-2">{title}</h3>
            <p className="text-3xl font-semibold" style={{ color }}>
                {value}
            </p>
        </div>
    )
}