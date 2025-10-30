import { useState } from "react";
import {Link} from "react-router-dom"
import api from "../services/api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await api.post("/auth/register", { username, password });
      alert("Usuário cadastrado com sucesso!");
    } catch {
      alert("Erro ao registrar.");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form onSubmit={handleRegister} className="bg-gray-800 p-6 rounded-lg w-80">
        <h1 className="text-2xl text-white mb-4">Registrar</h1>
        <input
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded">
          Cadastrar
        </button>
        <Link to={"/"} className="text-slate-200">Login</Link>
      </form>
    </div>
  );
}
