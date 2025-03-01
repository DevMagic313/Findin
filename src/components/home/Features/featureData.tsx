import { Navigation, Store, Users, Globe } from 'lucide-react';
import { Feature } from './types';

export const features: Feature[] = [
  {
    icon: <Navigation className="w-8 h-8 text-green-600" />,
    title: 'Findin Navigator',
    description: 'Real-time location tracking and path guiding system for secure navigation.',
    image: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Store className="w-8 h-8 text-green-600" />,
    title: 'Marketplace',
    description: 'Connect businesses with potential customers through our geo-location enabled platform.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: 'Findin Connect',
    description: 'Social networking platform with private communities and business catalogs.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Globe className="w-8 h-8 text-green-600" />,
    title: 'Findin Store',
    description: 'Complete business management with receipt generation and bookkeeping.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  }
];