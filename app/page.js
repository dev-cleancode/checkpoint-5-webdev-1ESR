"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import AgentCard from "./components/AgentCard"; // Componente que desenha cada agente

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
        <h1 className="text-2xl font-bold text-white text-center">Agentes</h1>
        <ul className="grid grid-cols-2 gap-4">
          {/* Percorre a lista e renderiza um AgentCard para cada agente; key ajuda o React a identificar cada item */}
          {agents.map((agent) => (
            <AgentCard key={agent.uuid} agent={agent} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;