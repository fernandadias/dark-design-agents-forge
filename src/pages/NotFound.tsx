
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Oops! A página que você está procurando não foi encontrada.
      </p>
      <Button asChild>
        <Link to="/">Voltar para a Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
