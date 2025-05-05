
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Layers } from 'lucide-react';

type SidebarProps = {
  className?: string;
};

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={`w-56 bg-sidebar min-h-screen flex flex-col border-r border-sidebar-border ${className}`}>
      <div className="p-4 flex items-center gap-2 border-b border-sidebar-border">
        <div className="bg-white rounded-md p-1">
          <span className="text-black font-bold text-xl">AI</span>
        </div>
        <h1 className="font-bold text-lg">DesignOS</h1>
      </div>
      
      <nav className="flex-1 py-4">
        <div className="px-4 mb-2 text-xs font-semibold text-muted-foreground">
          Principal
        </div>
        <ul className="space-y-1">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-2 text-sm ${isActive ? 'bg-accent text-accent-foreground' : 'text-sidebar-foreground hover:bg-accent/50'}`
              }
            >
              <Home size={18} />
              <span>Home</span>
              <span className="ml-auto text-xs bg-primary-foreground text-primary px-1.5 py-0.5 rounded-full">Beta</span>
            </NavLink>
          </li>
        </ul>
        
        <div className="px-4 mt-6 mb-2 text-xs font-semibold text-muted-foreground">
          Framework
        </div>
        <ul className="space-y-1">
          <li>
            <NavLink 
              to="/agents" 
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-2 text-sm ${isActive ? 'bg-accent text-accent-foreground' : 'text-sidebar-foreground hover:bg-accent/50'}`
              }
            >
              <Users size={18} />
              <span>Agentes</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/playground" 
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-2 text-sm ${isActive ? 'bg-accent text-accent-foreground' : 'text-sidebar-foreground hover:bg-accent/50'}`
              }
            >
              <Layers size={18} />
              <span>Playground</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-foreground text-primary flex items-center justify-center">
            <span className="text-sm font-medium">MD</span>
          </div>
          <div className="text-sm">
            <div className="font-medium">Designer</div>
            <div className="text-xs text-muted-foreground">Pro Plan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
