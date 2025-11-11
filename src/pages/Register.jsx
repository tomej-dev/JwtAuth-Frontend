import { useState } from "react";
import {Link, Navigate} from "react-router-dom"
import api from "../services/api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await api.post("/auth/register", { username, email, password });
      alert("Usuário cadastrado com sucesso!");
    } catch {
      alert("Erro ao registrar.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/loginBackground.png')] bg-cover bg-center p-4">
  <div
    id="container"
    className="flex flex-col md:flex-row shadow-lg shadow-slate-800 rounded-md w-full max-w-4xl overflow-hidden"
  >
    {/* Lado esquerdo */}
    <aside className="bg-[#584CD7] p-10 md:p-14 flex flex-col items-center justify-center text-center md:w-1/2 rounded-t-md md:rounded-t-none md:rounded-l-md">
      <div className="flex flex-col justify-center items-center h-full gap-3">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">Comece agora!</h1>
        <p className="text-slate-300 mb-4 text-sm md:text-base">Já possui uma conta?</p>
        <Link
          to={"/"}
          className="text-white font-bold border-gray-300 border-2 border-solid px-6 py-2 rounded-lg hover:bg-white hover:text-[#584CD7] transition duration-300"
        >
          Login
        </Link>
      </div>
    </aside>

    {/* Formulário de registro */}
    <form
      onSubmit={handleRegister}
      className="bg-white p-8 md:p-18 flex flex-col justify-center md:w-1/2 rounded-b-md md:rounded-b-none md:rounded-r-md"
    >
      <h1 className="text-2xl md:text-3xl text-[#584CD7] mb-6 text-center font-bold">
        Registrar
      </h1>
      <label className="font-medium text-gray-700">Usuário</label>
      <input
        className="w-full p-2 mb-4 rounded border-gray-300 border-2 border-solid focus:outline-none focus:border-[#584CD7]"
        placeholder="Insira um nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="font-medium text-gray-700">E-mail</label>
      <input
        className="w-full p-2 mb-4 rounded border-gray-300 border-2 border-solid focus:outline-none focus:border-[#584CD7]"
        placeholder="Insira um E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="font-medium text-gray-700">Senha</label>
      <input
        className="w-full p-2 mb-6 rounded border-gray-300 border-2 border-solid focus:outline-none focus:border-[#584CD7]"
        type="password"
        placeholder="Insira uma senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-[#584CD7] hover:bg-indigo-700 text-white p-2 rounded transition duration-300"
      >
        Cadastrar
      </button>
    </form>
  </div>
</div>

  );
}
