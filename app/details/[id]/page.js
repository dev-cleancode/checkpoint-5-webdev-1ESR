"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import Header from "../../components/Header";

const AgentDetailPage = () => {
  const params = useParams(); // Pega o id que vem na URL (o uuid)
  const router = useRouter(); // Permite voltar para a página anterior

  // Guarda o agente buscado na API (começa vazio pois os dados ainda não chegaram)
  const [agent, setAgent] = useState(null);
  // Controla se a busca ainda está acontecendo
  const [loading, setLoading] = useState(true);

  // Roda quando a página abre
  useEffect(() => {
    // Função que busca o agente na API
    const loadAgent = async () => {
      try {
        const res = await axios.get(
          `https://valorant-api.com/v1/agents/${params.id}?language=pt-BR`
        );
        setAgent(res.data.data);
        setLoading(false);
      } catch (error) {
        // Controle caso a API dê erro
        console.log(error);
        setLoading(false);
      }
    };

    loadAgent();
  }, []);

  // Enquanto a API não da os dados, dica em "loading"
  if (loading) {
    return (
      <div className="min-h-screen bg-black p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <Header />
          <Loading />
        </div>
      </div>
    );
  }

  // Controle caso der erro na API, para não quebrar o código
  if (!agent) {
    return (
      <div className="min-h-screen bg-black p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <Header />
          <ErrorMessage />
          <button
            onClick={() => router.back()}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Header />
        <section className="bg-gray-900 border border-gray-700 rounded p-4 space-y-4">
          {/* Nome do agente */}
          <h1 className="text-2xl font-bold text-white">{agent.displayName}</h1>
          {/* Role do agente */}
          <p className="text-red-500">{agent.role?.displayName}</p>
          {/* Imagem do agente */}
          <img src={agent.fullPortrait} alt={agent.displayName} className="h-64 rounded"/>
          {/* Descrição do agente */}
          <div className="border border-gray-700 rounded p-4 text-gray-300">
            {agent.description}
          </div>

          <div className="flex gap-4">
            {/* Botão para voltar para a página anterior */}
            <button
              onClick={() => router.back()}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Voltar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AgentDetailPage;