"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header"; // Topo da página
import AgentList from "./components/AgentList"; // Componente que desenha a lista de agentes

const HomePage = () => {
  // Guarda a lista de agentes que vieram da API
  const [agents, setAgents] = useState([]);

  // Roda uma vez quando a página abre
  useEffect(() => {
    // Função que busca os agentes
    const loadAgents = async () => {
      try {
        const res = await axios.get(
          "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR"
        );
        setAgents(res.data.data);
      } catch (error) {
        // Se a API falhar, mostra o erro no console em vez de quebrar a página
        console.log(error);
      }
    };

    loadAgents();
  }, []);

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Header />
        <AgentList agents={agents} />
      </div>
    </div>
  );
};

export default HomePage;