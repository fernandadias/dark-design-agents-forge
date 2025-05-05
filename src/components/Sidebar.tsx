
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Layers, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

type SidebarProps = {
  className?: string;
};

const SidebarContent = () => {
  return (
    <>
      <div className="p-4 flex items-center gap-2 border-b border-sidebar-border">
        <div className="bg-accent rounded-md p-1">
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
                `flex items-center gap-3 px-4 py-2 text-sm ${isActive ? 'bg-accent text-accent-foreground' : 'text-sidebar-foreground hover:bg-accent/10'}`
              }
            >
              <Home size={18} />
              <span>Home</span>
              <span className="ml-auto text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded-full">Beta</span>
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
                `flex items-center gap-3 px-4 py-2 text-sm ${isActive ? 'bg-accent text-accent-foreground' : 'text-sidebar-foreground hover:bg-accent/10'}`
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
                `flex items-center gap-3 px-4 py-2 text-sm ${isActive ? 'bg-accent text-accent-foreground' : 'text-sidebar-foreground hover:bg-accent/10'}`
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
          <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center">
            <span className="text-sm font-medium">MD</span>
          </div>
          <div className="text-sm">
            <div className="font-medium">Designer</div>
            <div className="text-xs text-muted-foreground">Pro Plan</div>
          </div>
        </div>
      </div>
    </>
  )
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <div className="fixed top-0 left-0 z-50 w-full bg-background/80 backdrop-blur-sm p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-accent rounded-md p-1">
            <span className="text-black font-bold text-xl">AI</span>
          </div>
          <h1 className="font-bold text-lg">DesignOS</h1>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72 bg-sidebar">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <div className={`w-56 bg-sidebar min-h-screen flex flex-col border-r border-sidebar-border ${className}`}>
      <SidebarContent />
    </div>
  );
};

export default Sidebar;
