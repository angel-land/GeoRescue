import Image from "next/image";
import { ImageComponent } from "../imageComponent/imageComponent";


export function Login() {
    return (
        <div className="w-[50vw]  bg-white shadow-xl shadow-gray-300 rounded-lg  flex flex-row">
            <div className="w-1/2 relative" >

                <Image src={"/images/SALUD.jpg"} fill={true} className="rounded-lg"/>

            </div>
            <div className="gap-4 p-8 flex justify-center items-center flex-col">

                <div>
                    <Image src={"/Images/georescuee.png"} width={300} height={200} alt="georescue-logo"></Image>

                </div>
                <div className="w-full">
                    <h3 className="w-full text-center font-bold text-3xl text-[#1581b4]">
                        Iniciar Sesión
                    </h3>
                </div>
                <div className="w-full">
                    <input
                        type="email"
                        className="border rounded-sm p-1 w-full placeholder-gray-300"
                        placeholder="Ingrese Correo"
                    ></input>
                </div>
                <div className="w-full">
                    <input
                        type="password"
                        className="border rounded-sm p-1 w-full placeholder-gray-300"
                        placeholder="Ingrese Contraseña"
                    ></input>
                </div>
                <div className="w-full">
                    <button className="border rounded-sm p-2 bg-[#1581b4] text-white w-full cursor-pointer hover:opacity-50">
                        Iniciar Sesión
                    </button>

                </div>
                <div className="w-full">
                    <a href="#" className="w-full text-center block text-[#3869df]">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
                <div className="w-full">
                    <button className="w-full border rounded-sm p-2 cursor-pointer font-bold bg-[#5DB996] text-white hover:opacity-50">
                        Crear cuenta
                    </button>
                </div>
            </div>
        </div>
    )
}
