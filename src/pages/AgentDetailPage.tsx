
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AgentForm from '@/components/AgentForm';
import AgentResult from '@/components/AgentResult';
import { Agent } from '@/types/Agent';
import { initialAgents } from '@/data/agents';

const AgentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [agent, setAgent] = useState<Agent | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const foundAgent = initialAgents.find(a => a.id === id);
    if (foundAgent) {
      setAgent(foundAgent);
    } else {
      navigate('/agents');
    }
  }, [id, navigate]);
  
  const handleSubmit = (formData: { content: string; general: string }) => {
    setIsLoading(true);
    setResult(null);
    
    // Simulando uma chamada de API
    setTimeout(() => {
      const generatedResult = `# ${agent?.title} - Resultado

${formData.content ? `Baseado no conteúdo fornecido:
"${formData.content.substring(0, 100)}${formData.content.length > 100 ? '...' : ''}"

` : ''}${formData.general ? `Considerando as informações adicionais:
"${formData.general.substring(0, 100)}${formData.general.length > 100 ? '...' : ''}"

` : ''}Aqui está o resultado gerado pelo agente ${agent?.title}:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.

Magna enim exercitation aliqua eiusmod ad amet excepteur exercitation ipsum deserunt. Do duis nisi reprehenderit ipsum commodo sint adipisicing. Commodo voluptate irure incididunt consequat. Commodo voluptate laboris esse ea mollit.

## Pontos principais:

- Ponto 1: Lorem ipsum dolor sit amet
- Ponto 2: Consectetur adipiscing elit
- Ponto 3: Nullam pulvinar risus non

## Como aplicar:

1. Primeiro passo: Lorem ipsum dolor sit amet
2. Segundo passo: Consectetur adipiscing elit
3. Terceiro passo: Nullam pulvinar risus non

Espero que este resultado seja útil para o seu projeto!`;
      
      setResult(generatedResult);
      setIsLoading(false);
    }, 2000);
  };

  if (!agent) {
    return <div className="p-8 text-center">Carregando...</div>;
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center p-4 border-b border-border">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/agents')}
          className="mr-4"
        >
          <ArrowLeft size={16} className="mr-1" />
          Voltar
        </Button>
        
        <div>
          <span className={`category-badge category-badge-${agent.category} mr-2`}>
            {agent.categoryName}
          </span>
          <h1 className="text-lg font-semibold">{agent.title}</h1>
        </div>
      </div>
      
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="border-r border-border overflow-hidden">
          <AgentForm 
            agent={agent} 
            onSubmit={handleSubmit} 
            isLoading={isLoading}
          />
        </div>
        <div className="overflow-hidden">
          <AgentResult 
            result={result} 
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default AgentDetailPage;
