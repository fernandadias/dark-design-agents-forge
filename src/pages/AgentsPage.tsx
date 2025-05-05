
import React, { useState } from 'react';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import AgentCard from '@/components/AgentCard';
import { Agent } from '@/types/Agent';
import { initialAgents } from '@/data/agents';

const AgentsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [agents, setAgents] = useState<Agent[]>(initialAgents);
  
  const filteredAgents = selectedCategory === 'todos' 
    ? agents
    : selectedCategory === 'favoritos'
      ? agents.filter(agent => agent.favorite)
      : agents.filter(agent => agent.category === selectedCategory);
      
  const handleToggleFavorite = (id: string) => {
    setAgents(prev => prev.map(agent => 
      agent.id === id ? { ...agent, favorite: !agent.favorite } : agent
    ));
  };

  return (
    <div>
      <Header title="Todos os Agentes" />
      
      <div className="p-6">
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
          {filteredAgents.map(agent => (
            <AgentCard 
              key={agent.id} 
              agent={agent} 
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
        
        {filteredAgents.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">
              Nenhum agente encontrado para esta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentsPage;
