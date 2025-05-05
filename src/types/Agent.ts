
import { ReactNode } from 'react';

export interface Agent {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryName: string;
  icon: ReactNode;
  locked: boolean;
  isNew: boolean;
  favorite: boolean;
}
