import { Login } from "@/components/login";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-gradient-to-br from-[#032237] via-[#0f3a55] to-[#000000] min-h-screen">
          <Login/>
        </div>
      </main>
    </div>
  );
}
