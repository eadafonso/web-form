import { FcGoogle } from "react-icons/fc";
import { FiPhone } from "react-icons/fi";

import { HeaderLogin } from "./components/Header";
import { DividerLogin } from "./components/Divider";
import { UserData } from "../types/userType";
import { authWithEmailUser } from "../repositories/userRepository";

export default function LoginPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const obj: UserData = {
      email: formData.get("email") as string,
      password:
        typeof formData.get("password") === "string"
          ? (formData.get("password") as string)
          : "",
    };

    authWithEmailUser(obj);
  }

  return (
    <main className="flex justify-center items-center h-screen">
      <form
        className="bg-white w-[350px] rounded-lg p-7"
        onSubmit={handleSubmit}
      >
        <HeaderLogin
          title="Login"
          subTitle="
          Faça login na sua conta, desfrute de recursos exclusivos e muito mais."
        />

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="border my-4 rounded-md h-[38px] pl-4"
          />

          <label htmlFor="email" className="text-sm">
            Senha
          </label>
          <input
            type="password"
            name="password"
            className="border my-4 rounded-md h-[38px] pl-4"
          />

          <a href="#" className="flex justify-end text-xs text-zinc-600">
            Esqueceu a senha?
          </a>

          <button className="bg-[#DD0000] my-4 py-2 rounded-lg text-white font-medium">
            Entrar
          </button>

          <DividerLogin />

          <button className="flex flex-row items-center border border-[#ddd] rounded-lg mt-4 py-2 justify-center text-sm">
            <FcGoogle />
            <span className="ml-2">Entrar com o Google</span>
          </button>

          <button className="flex flex-row items-center border border-[#ddd] rounded-lg my-4 py-2 justify-center text-sm">
            <FiPhone />
            <span className="ml-2">Entrar com o Telefone</span>
          </button>
        </div>

        <footer className="mt-3 flex items-center justify-center">
          <span className="text-xs">
            Não tens uma conta?{" "}
            <a href="#" className="text-blue-700">
              Crie uma!
            </a>
          </span>
        </footer>
      </form>
    </main>
  );
}
