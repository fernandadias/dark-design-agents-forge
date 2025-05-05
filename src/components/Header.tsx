
import React from 'react';
import { Search, Moon, Sun, Bell } from 'lucide-react';

interface HeaderProps {
  title: string;
  showSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showSearch = true }) => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 border-b bg-background/80 backdrop-blur-sm border-border">
      <h1 className="text-xl font-semibold">{title}</h1>
      
      <div className="flex items-center gap-2">
        {showSearch && (
          <div className="relative mr-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
            <input 
              type="text" 
              placeholder="Buscar agentes..."
              className="h-9 px-10 rounded-md bg-secondary text-secondary-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
        )}
        
        <button className="h-9 w-9 rounded-md flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/80">
          <Bell size={16} />
        </button>
        
        <button className="h-9 w-9 rounded-md flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/80">
          <Sun size={16} />
        </button>
      </div>
    </header>
  );
};

export default Header;
