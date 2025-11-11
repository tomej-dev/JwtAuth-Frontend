import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      console.log(email)
      console.log(password)
      const { data } = await api.post("/auth/login", { Email: email, Password: password });
      console.log(data)
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch {
      alert("Usuário ou senha inválidos");
      navigate("/")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/loginBackground.png')] bg-cover bg-center p-4">
  <div
    id="container"
    className="flex flex-col md:flex-row shadow-lg shadow-slate-800 rounded-md w-full max-w-4xl overflow-hidden"
  >
    {/* Lado esquerdo */}
    <aside className="bg-[#584CD7] p-10 md:p-14 md:w-1/2 flex flex-col items-center justify-center text-center rounded-t-md md:rounded-t-none md:rounded-l-md">
      <h1 className="text-white mb-4 text-3xl md:text-4xl font-bold">Entre na sua conta!</h1>
      <p className="text-slate-300 mb-4">Primeira vez aqui?</p>
      <Link
        to={"/register"}
        className="text-white font-bold border-gray-300 border-2 border-solid px-6 py-2 rounded-lg hover:bg-white hover:text-[#584CD7] transition duration-300"
      >
        Registrar
      </Link>
    </aside>

    {/* Formulário */}
    <form
      onSubmit={handleLogin}
      className="bg-white p-8 md:p-18 flex flex-col justify-center md:w-1/2 rounded-b-md md:rounded-b-none md:rounded-r-md"
    >
      <h1 className="text-2xl md:text-3xl text-[#584CD7] text-center font-bold mb-6">
        Login
      </h1>

      <label className="font-medium text-gray-700">E-mail:</label>
      <input
        className="w-full p-2 mb-4 rounded border-gray-300 border-2 border-solid focus:outline-none focus:border-[#584CD7]"
        placeholder="Insira seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="font-medium text-gray-700">Senha:</label>
      <input
        className="w-full p-2 mb-4 rounded border-gray-300 border-2 border-solid focus:outline-none focus:border-[#584CD7]"
        type="password"
        placeholder="Insira sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded transition duration-300"
      >
        Entrar
      </button>
    </form>
  </div>
</div>

  );
}
