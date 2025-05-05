
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="DesignOS" showSearch={false} />
      
      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Agentes de IA para design de produtos
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Otimize seu fluxo de trabalho de design com agentes de IA especializados
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <Link to="/agents">Ver todos os agentes</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/playground">Testar no playground</Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4">Agentes especializados</h2>
              <p className="text-muted-foreground mb-4">
                Acesse dezenas de agentes de IA especialistas em marketing, copywriting, 
                YouTube, e-mails, anúncios e muito mais.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span>Otimize seu conteúdo para diversas plataformas</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span>Crie anúncios persuasivos que convertem</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span>Desenvolva e-mails que engajam os clientes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4">Por que usar nossos agentes?</h2>
              <p className="text-muted-foreground mb-4">
                Nossos agentes são treinados com foco específico em design de produtos e marketing digital.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span>Prompts otimizados para resultados superiores</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span>Economize tempo com fluxos de trabalho otimizados</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span>Acesse agentes premium com o plano Pro</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
