import Image from "next/image";
import Link from "next/link";
import { VscLoading } from "react-icons/vsc";

export default function Login() {
  return (
    <div className="flex justify-center mx-auto w-screen items-center max-[768px]:flex-col  h-screen">
      <div className="w-1/3 max-[425px]:w-[70%] max-[768px]:w-[80%] max-[1024px]:mx-8 flex flex-col justify-center items-center">
        <div className="mb-[90px] text-center">
          <h2 className="letra text-3xl max-[400px]:text-2xl font-bold mb-1 text-start">
            Bienvenido a IP TV
          </h2>
          <p className="letra font-light text-xs">Sign in to your account</p>
        </div>

        <form className="w-full max-w-sm">
          <div className="mb-10">
            <label
              className="inter font-semibold block text-gray-700 text-xs mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="letra text-xs border-b border-gray-500 pb-2 w-full placeholder:text-xs placeholder:font-light focus:outline-none"
              id="email"
              type="email"
              placeholder="Ingrese su correo electronico"
            />
          </div>
          <div className="mb-6">
            <label
              className="inter font-semibold block text-gray-700 text-xs mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="letra text-xs border-b border-gray-500 pb-2  w-full placeholder:text-xs placeholder:font-light focus:outline-none"
              id="password"
              type="password"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <div className="flex items-start text-start justify-between mb-10">
            <div className="flex space-x-3">
              <input type="checkbox" />
              <p className="letra text-xs max-[425px]:text-[10px] text-gray-500">
                Keep me signed in
              </p>
            </div>
            <div>
              <p className="letra cursor-pointer hover:opacity-50 transition-all duration-300 ease-in-out text-xs max-[425px]:text-[10px] text-[#0013af] underline">
                Forgot email or password?
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Link className="bg-[#041452] text-center mb-8 hover:bg-[#0013af] transition-all duration-300 ease-in-out w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" href="/dashboard">
            <button
              type="button"
            >
              Sign In
            </button>
            </Link>
          </div>
          <VscLoading className="animate-spin text-center justify-center items-center flex mx-auto" />
        </form>
      </div>
      <div className="w-2/3  max-[768px]:hidden h-full bg-emerald-300 bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-center"></div>
    </div>
  );
}
