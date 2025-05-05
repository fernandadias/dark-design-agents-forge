
import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AgentResultProps {
  result: string | null;
  isLoading: boolean;
}

const AgentResult: React.FC<AgentResultProps> = ({ result, isLoading }) => {
  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-border p-4">
        <h2 className="text-lg font-semibold">Resposta</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-muted-foreground">Gerando resultado...</p>
          </div>
        ) : result ? (
          <div className="relative">
            <Button 
              onClick={handleCopy} 
              size="sm" 
              variant="outline" 
              className="absolute top-0 right-0"
            >
              <Copy size={14} className="mr-1" />
              Copiar
            </Button>
            <div className="mt-10 whitespace-pre-wrap">{result}</div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-xl font-semibold mb-2">Nenhum resultado gerado</p>
            <p className="text-muted-foreground max-w-md">
              Lixo para dentro, lixo para fora. Ou seja: capriche nos inputs para obter as melhores respostas possíveis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentResult;
