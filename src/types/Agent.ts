
import { LucideIcon } from 'lucide-react';

export interface Agent {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryName: string;
  icon: LucideIcon;
  locked: boolean;
  isNew: boolean;
  favorite: boolean;
}
