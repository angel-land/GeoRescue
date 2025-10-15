import Image from "next/image";

export function Login() {
    return (
        <div className="w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg p-8 flex justify-center items-center flex-col gap-4 ">
            <div>
                <Image src={"/Images/georescuee.png"} width={300} height={200} alt="georescue-logo"></Image>
                
            </div>
            <div className="w-full">
                <h3 className="w-full text-center font-bold text-3xl">
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
                <button className="border rounded-sm p-2 bg-[#3869df] text-white w-full cursor-pointer">
                    Iniciar Sesión
                </button>

            </div>
            <div className="w-full">
                <a href="#" className="w-full text-center block text-[#3869df]">
                    ¿Olvidaste tu contraseña?
                </a>
            </div>
            <div className="w-full">
                <button className="w-full border rounded-sm p-2 cursor-pointer font-bold">
                    Crear cuenta
                </button>
            </div>
        </div>
    )
}