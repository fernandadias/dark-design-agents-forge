
import React from 'react';
import Header from '@/components/Header';

const PlaygroundPage: React.FC = () => {
  return (
    <div>
      <Header title="Playground" />
      
      <div className="p-6">
        <div className="max-w-4xl mx-auto text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Playground</h1>
          <p className="text-muted-foreground mb-8">
            Experimente criar seus próprios prompts e veja os resultados em tempo real.
            Esta página está em desenvolvimento.
          </p>
          
          <div className="p-12 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground">
              Funcionalidade em construção. Em breve você poderá testar diferentes prompts
              e configurações para aprimorar seus resultados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundPage;
