import { Store, StoreCategory, Event } from './types';

export const STORES: Store[] = [
  {
    id: '1',
    name: 'Gucci',
    category: StoreCategory.FASHION,
    level: 1,
    description: 'Luxury Italian fashion house.',
    image: 'https://picsum.photos/800/600?random=1',
    isOpen: true
  },
  {
    id: '2',
    name: 'Louis Vuitton',
    category: StoreCategory.FASHION,
    level: 1,
    description: 'French luxury fashion and leather goods.',
    image: 'https://picsum.photos/800/600?random=2',
    isOpen: true
  },
  {
    id: '3',
    name: 'Tiffany & Co.',
    category: StoreCategory.JEWELRY,
    level: 1,
    description: 'Luxury jewelry and specialty retailer.',
    image: 'https://picsum.photos/800/600?random=3',
    isOpen: true
  },
  {
    id: '4',
    name: 'Nordstrom',
    category: StoreCategory.FASHION,
    level: 1,
    description: 'Luxury department store chain.',
    image: 'https://picsum.photos/800/600?random=4',
    isOpen: true
  },
  {
    id: '5',
    name: 'Mi Cocina',
    category: StoreCategory.DINING,
    level: 2,
    description: 'Modern Tex-Mex dining.',
    image: 'https://picsum.photos/800/600?random=5',
    isOpen: true
  },
  {
    id: '6',
    name: 'The Oceanaire',
    category: StoreCategory.DINING,
    level: 2,
    description: 'Ultra-fresh seafood room.',
    image: 'https://picsum.photos/800/600?random=6',
    isOpen: false
  },
  {
    id: '7',
    name: 'Ice Skating Center',
    category: StoreCategory.LIFESTYLE,
    level: 1,
    description: 'World-class ice skating rink in the heart of the mall.',
    image: 'https://picsum.photos/800/600?random=7',
    isOpen: true
  },
  {
    id: '8',
    name: 'Sephora',
    category: StoreCategory.BEAUTY,
    level: 2,
    description: 'Personal care and beauty products.',
    image: 'https://picsum.photos/800/600?random=8',
    isOpen: true
  },
  {
    id: '9',
    name: 'Apple',
    category: StoreCategory.LIFESTYLE,
    level: 1,
    description: 'Consumer electronics and software.',
    image: 'https://picsum.photos/800/600?random=9',
    isOpen: true
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Fashion Week Preview',
    date: 'Oct 25 - Oct 27',
    description: 'Exclusive runway shows featuring Fall collections.',
    image: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: 'e2',
    title: 'Holiday Tree Lighting',
    date: 'Nov 15',
    description: 'Join us for the grand lighting of the nation\'s tallest indoor tree.',
    image: 'https://picsum.photos/600/400?random=11'
  },
  {
    id: 'e3',
    title: 'Ice Skating Spectacular',
    date: 'Every Saturday',
    description: 'Professional figure skating performances.',
    image: 'https://picsum.photos/600/400?random=12'
  }
];
