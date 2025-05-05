
import React from 'react';

const categories = [
  { id: 'favoritos', name: 'Favoritos' },
  { id: 'todos', name: 'Todos' },
  { id: 'youtube', name: 'YouTube' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'copywriting', name: 'Copywriting' },
  { id: 'emails', name: 'E-mails' },
  { id: 'anuncios', name: 'Anúncios' },
  { id: 'conteudo', name: 'Conteúdo' },
  { id: 'cliente', name: 'Cliente' },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory,
  onSelectCategory 
}) => {
  return (
    <div className="flex overflow-x-auto pb-2 mt-4 mb-6 gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
            selectedCategory === category.id
              ? 'bg-secondary text-secondary-foreground'
              : 'bg-background text-muted-foreground hover:bg-secondary/50'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
