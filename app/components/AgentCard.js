import Link from "next/link"; // Transição suave entre as páginas sem recarregar a aba

// Componente que mostra um único agente
const AgentCard = ({ agent }) => {
  return (
    <li className="p-4 flex items-center gap-4 bg-gray-900 border border-gray-700 rounded">
      {/* Ícone do agente que vem da API */}
      <img
        src={agent.displayIcon}
        alt={agent.displayName}
        className="w-12 h-12 rounded"
      />
      <div>
        {/* Clicar no nome leva para a página de detalhes, usando o uuid do agente como id */}
        <Link
          href={`/details/${agent.uuid}`}
          className="font-medium text-white hover:text-red-500 transition-colors"
        >
          {agent.displayName}
        </Link>
        {/* O ?. evita erro caso algum agente venha sem role */}
        <p className="text-sm text-gray-400">{agent.role?.displayName}</p>
      </div>
    </li>
  );
};

export default AgentCard;