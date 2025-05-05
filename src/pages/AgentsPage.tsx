
import React, { useState } from 'react';
import { YoutubeIcon, BarChart, MessagesSquare, Mail, Megaphone, FileText, Users } from 'lucide-react';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import AgentCard from '@/components/AgentCard';
import { Agent } from '@/types/Agent';

// Mock data para os agentes
const initialAgents: Agent[] = [
  {
    id: '1',
    title: 'Ângulos para YouTube',
    description: 'Transforme uma ideia sem graça em um vídeo impossível de ignorar.',
    category: 'youtube',
    categoryName: 'YouTube',
    icon: <YoutubeIcon size={16} />,
    locked: false,
    isNew: false,
    favorite: true
  },
  {
    id: '2',
    title: 'A Pergunta Instigante',
    description: 'Crie posts de perguntas instigantes e persuasivas para Facebook, focadas em identificar e qualificar clientes.',
    category: 'anuncios',
    categoryName: 'Anúncios',
    icon: <Megaphone size={16} />,
    locked: false,
    isNew: false,
    favorite: false
  },
  {
    id: '3',
    title: 'A Premissa Persuasiva',
    description: 'Crie uma Premissa Persuasiva ao descobrir quais são as Crenças do seu cliente para capturar sua atenção.',
    category: 'marketing',
    categoryName: 'Marketing',
    icon: <BarChart size={16} />,
    locked: false,
    isNew: true,
    favorite: false
  },
  {
    id: '4',
    title: 'A Solução Inesperada',
    description: 'Crie anúncios altamente persuasivos para capturar a atenção, resolver crenças limitantes e gerar conversões.',
    category: 'anuncios',
    categoryName: 'Anúncios',
    icon: <Megaphone size={16} />,
    locked: false,
    isNew: false,
    favorite: false
  },
  {
    id: '5',
    title: 'Bússola de Cliente de Alto Valor',
    description: 'Use a "bússola" para encontrar melhores clientes que pagam mais e que se encaixam com você e seu negócio.',
    category: 'marketing',
    categoryName: 'Marketing',
    icon: <BarChart size={16} />,
    locked: false,
    isNew: false,
    favorite: false
  },
  {
    id: '6',
    title: 'Descrição YouTube',
    description: 'Crie uma descrição otimizada para SEO com base na transcrição do seu vídeo.',
    category: 'youtube',
    categoryName: 'YouTube',
    icon: <YoutubeIcon size={16} />,
    locked: false,
    isNew: false,
    favorite: false
  },
  {
    id: '7',
    title: 'Editor de E-mails',
    description: 'Edite e revise e-mails para corrigir erros, ficar melhor, claro, vender mais.',
    category: 'emails',
    categoryName: 'E-mails',
    icon: <Mail size={16} />,
    locked: true,
    isNew: false,
    favorite: false
  },
  {
    id: '8',
    title: 'Funil de Anúncios',
    description: 'Crie um funil completo de anúncios que vão desde a descoberta até o retorno e a conversão final.',
    category: 'anuncios',
    categoryName: 'Anúncios',
    icon: <Megaphone size={16} />,
    locked: false,
    isNew: true,
    favorite: false
  },
  {
    id: '9',
    title: 'Hooks Virais',
    description: 'Como criar hooks curtos de até 8 segundos para garantir que você tenha a atenção do seu público.',
    category: 'copywriting',
    categoryName: 'Copywriting',
    icon: <MessagesSquare size={16} />,
    locked: false,
    isNew: false,
    favorite: false
  },
  {
    id: '10',
    title: 'Ideias para Conteúdos que Vendem',
    description: 'Como gerar ideias para conteúdos que atraem o tipo de cliente certo, que compra e paga bem pelo seu trabalho.',
    category: 'conteudo',
    categoryName: 'Conteúdo',
    icon: <FileText size={16} />,
    locked: false,
    isNew: false,
    favorite: false
  },
  {
    id: '11',
    title: 'Ideias Virais',
    description: 'Gere ideias com a maior chance de compartilhamento que podem ser usadas em várias plataformas.',
    category: 'conteudo',
    categoryName: 'Conteúdo',
    icon: <FileText size={16} />,
    locked: true,
    isNew: false,
    favorite: false
  },
  {
    id: '12',
    title: 'Metodologia',
    description: 'Como criar a metodologia ideal para ensinar melhor, se diferenciar e também vender mais.',
    category: 'cliente',
    categoryName: 'Cliente',
    icon: <Users size={16} />,
    locked: false,
    isNew: false,
    favorite: false
  }
];

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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
