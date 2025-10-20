"use client";
import Login from "@/components/forms/Login";
export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-white">
      <div className="w-[100vw] h-[100vh] gap-0.5 flex justify-center items-center bg-[#F2F9FF] min-h-screen">
        <Login />
      </div>
    </div>
  );
}
