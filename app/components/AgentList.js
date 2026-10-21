import AgentCard from "./AgentCard"; // Componente que traz cada agente

// Componente que mostra a lista de agentes
const AgentList = ({ agents }) => {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {/* Percorre a lista e renderiza um "AgentCard" para cada agente */}
      {agents.map((agent) => (
        <AgentCard key={agent.uuid} agent={agent} />
      ))}
    </ul>
  );
};

export default AgentList;