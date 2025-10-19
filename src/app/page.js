import { ImagenIzquierda, Login } from "@/components/login";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="w-[100vw] h-[100vh] gap-0.5 flex justify-center items-center bg-[#F2F9FF] min-h-screen">
          <Login/>
        </div>
      </main>
    </div>
  );
}
