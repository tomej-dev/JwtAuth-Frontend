import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/login", { username, password });
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch {
      alert("Usuário ou senha inválidos");
      navigate("/")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg w-80">
        <h1 className="text-2xl text-white mb-4">Login</h1>
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
          Entrar
        </button>
        <Link to={"/register"} className="text-slate-200">Registrar</Link>
      </form>
      
    </div>
  );
}
