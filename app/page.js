"use client";

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header"; // Header
import SearchBar from "./components/SearchBar"; // Barra de pesquisa
import AgentList from "./components/AgentList"; // Lista dos agentes
import Loading from "./components/Loading"; // Mensagem de carregamento
import ErrorMessage from "./components/ErrorMessage"; // Mensagem de erro

const HomePage = () => {
  // Guarda a lista de agentes que vieram da API
  const [agents, setAgents] = useState([]);
  // Guarda o texto digitado na busca
  const [filter, setFilter] = useState("");
  // Controla se a busca na API ainda está acontecendo
  const [loading, setLoading] = useState(true);
  // Guarda se deu erro na busca da API
  const [error, setError] = useState(false);

  // Recalcula apenas se os agentes ou a busca mudarem
  const filteredAgents = useMemo(() => {
    // Se não digitar nada mostra todos os agentes
    if (!filter.trim()) {
      return agents;
    }

    // Mantém só os agentes cujo nome contém o texto digitado, também tira o case sensitive
    return agents.filter((agent) =>
      agent.displayName.toLowerCase().includes(filter.toLowerCase())
    );
  }, [agents, filter]);

  // Roda uma vez quando a página abre
  useEffect(() => {
    // Função que busca os agentes
    const loadAgents = async () => {
      try {
        const res = await axios.get(
          "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR"
        );
        setAgents(res.data.data);
        setLoading(false);
      } catch (error) {
        // Se a API falhar, mostra o erro no console em vez de quebrar a página
        console.log(error);
        // Liga o estado de erro para avisar o usuário na tela
        setError(true);
        setLoading(false);
      }
    };

    loadAgents();
  }, []);

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Header />
        <section className="bg-gray-900 border border-gray-700 rounded p-4 space-y-4">
          <h2 className="text-white">Buscar Agentes</h2>
          <SearchBar value={filter} onChange={setFilter} />
        </section>
        {/* Enquanto a API não responde, mostra o "loading" */}
        {loading && <Loading />}
        {/* Se a API deu erro, mostra a mensagem o "ErrorMessage" */}
        {error && <ErrorMessage />}
        {/* Se terminou de carregar sem erro, mostra a lista filtrada */}
        {!loading && !error && <AgentList agents={filteredAgents} />}
      </div>
    </div>
  );
};

export default HomePage;