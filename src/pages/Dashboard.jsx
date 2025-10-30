import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function loadData() {
    try {
      const { data } = await api.get("/sample/protected");
    setMessage(data.message);
    } catch {
      alert("Token expirado ou inválido");
      navigate("/");
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <p>{message}</p>
      <button onClick={logout} className="mt-6 bg-red-600 px-4 py-2 rounded hover:bg-red-700">
        Sair
      </button>
    </div>
  );
}
