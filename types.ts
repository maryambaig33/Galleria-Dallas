export enum StoreCategory {
  FASHION = "Fashion & Apparel",
  DINING = "Dining",
  JEWELRY = "Jewelry & Watches",
  BEAUTY = "Beauty & Health",
  LIFESTYLE = "Lifestyle & Home",
  SERVICES = "Services"
}

export interface Store {
  id: string;
  name: string;
  category: StoreCategory;
  level: 1 | 2 | 3;
  description: string;
  image: string;
  isOpen: boolean;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}
