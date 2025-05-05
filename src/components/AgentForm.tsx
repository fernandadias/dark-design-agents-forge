
import React, { useState } from 'react';
import { Info, Mic, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Agent } from '@/types/Agent';

interface AgentFormProps {
  agent: Agent;
  onSubmit: (formData: { content: string; general: string }) => void;
  isLoading: boolean;
}

const AgentForm: React.FC<AgentFormProps> = ({ agent, onSubmit, isLoading }) => {
  const [content, setContent] = useState('');
  const [general, setGeneral] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ content, general });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-border p-4">
        <h2 className="text-lg font-semibold mb-1">{agent.title}</h2>
        <p className="text-sm text-muted-foreground">{agent.description}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="content" className="text-sm font-medium flex items-center gap-1">
              Conteúdo
              <Info size={14} className="text-muted-foreground" />
            </label>
            <span className="text-xs text-muted-foreground">0 / 30.000</span>
          </div>
          
          <div className="relative">
            <Textarea 
              id="content" 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Descreva aqui o seu conteúdo... Ou cole a transcrição, texto, resumo ou o que você tiver para que o agente saiba do que o conteúdo se trata ou o que ele deve usar como base em suas instruções."
              className="min-h-[200px] resize-none"
            />
            <button 
              type="button" 
              className="absolute right-3 bottom-3 p-1 rounded-md hover:bg-secondary"
            >
              <Mic size={16} className="text-muted-foreground" />
            </button>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="general" className="text-sm font-medium flex items-center gap-1">
              Geral
              <Info size={14} className="text-muted-foreground" />
            </label>
            <span className="text-xs text-muted-foreground">0 / 10.000</span>
          </div>
          
          <div className="relative">
            <Textarea 
              id="general" 
              value={general}
              onChange={(e) => setGeneral(e.target.value)}
              placeholder="Digite aqui qualquer informação relevante para este agente. Ideias, notícias, conteúdo, hooks, mecanismos, depoimentos, etc."
              className="min-h-[120px] resize-none"
            />
            <button 
              type="button" 
              className="absolute right-3 bottom-3 p-1 rounded-md hover:bg-secondary"
            >
              <Mic size={16} className="text-muted-foreground" />
            </button>
          </div>
          
          <p className="text-xs text-muted-foreground">
            Use este campo para colocar qualquer outra informação relevante que você quer que o agente leve em consideração. Tudo o que você digitar aqui irá junto como parte do comando (prompt) final ao agente. Portanto, use para adicionar mais informações, referências, comandos, etc.
          </p>
        </div>
        
        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            {isLoading ? "Gerando..." : "Gerar"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AgentForm;
