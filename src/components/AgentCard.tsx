
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Agent } from '@/types/Agent';

interface AgentCardProps {
  agent: Agent;
  onToggleFavorite: (id: string) => void;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, onToggleFavorite }) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(agent.id);
  };

  const Icon = agent.icon;

  return (
    <Link 
      to={agent.locked ? "#" : `/agent/${agent.id}`}
      className={cn(
        "relative group overflow-hidden rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md",
        agent.locked && "opacity-80 cursor-not-allowed"
      )}
    >
      <div className="absolute top-3 right-3 z-10 flex gap-2">
        <button
          onClick={handleFavoriteClick}
          className="h-7 w-7 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-yellow-400 transition-colors"
        >
          <Star size={16} className={agent.favorite ? "fill-yellow-400 text-yellow-400" : ""} />
        </button>
      </div>

      {agent.locked && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center z-20">
          <div className="flex flex-col items-center gap-2">
            <Lock className="h-8 w-8 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Disponível no plano Pro</span>
          </div>
        </div>
      )}

      {agent.isNew && (
        <Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700 text-white">
          Novo
        </Badge>
      )}

      <div className="flex flex-col h-full min-h-[200px]">
        <div className="mb-2 flex items-center gap-2">
          <div className={cn(
            "h-8 w-8 rounded-md flex items-center justify-center",
            `bg-category-${agent.category}/10 text-category-${agent.category}`
          )}>
            <Icon size={16} />
          </div>
          <div className={cn(
            "category-badge",
            `category-badge-${agent.category}`
          )}>
            {agent.categoryName}
          </div>
        </div>

        <h3 className="text-base font-semibold mb-2">{agent.title}</h3>
        <p className="text-sm text-muted-foreground flex-grow">{agent.description}</p>
      </div>
    </Link>
  );
};

export default AgentCard;
