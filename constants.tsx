
import { Sport, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Register', href: '#register' },
  { label: 'Society', href: '#society' },
  { label: 'Media', href: '#media' },
];

export const SPORTS: Sport[] = [
  {
    id: 'futsal',
    name: 'Futsal',
    description: 'Fast-paced indoor football focusing on skill and technique.',
    icon: '⚽',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
    category: 'Team'
  },
  {
    id: 'cricket',
    name: 'Cricket',
    description: 'The gentleman\'s game. 11-a-side competitive tournament.',
    icon: '🏏',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
    category: 'Team'
  },
  {
    id: 'basketball',
    name: 'Basketball',
    description: 'High-energy hoops with championship brackets.',
    icon: '🏀',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800',
    category: 'Team'
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    description: 'Team coordination and power spikes on the court.',
    icon: '🏐',
    imageUrl: 'https://images.unsplash.com/photo-1592656670411-2918d7db4b47?auto=format&fit=crop&q=80&w=800',
    category: 'Team'
  },
  {
    id: 'table-tennis',
    name: 'Table Tennis',
    description: 'Precision, speed, and lightning-fast reflexes.',
    icon: '🏓',
    imageUrl: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&q=80&w=800',
    category: 'Individual'
  },
  {
    id: 'badminton',
    name: 'Badminton',
    description: 'Smash your way to victory in singles and doubles.',
    icon: '🏸',
    imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=800',
    category: 'Individual'
  },
  {
    id: 'track-n-field',
    name: 'Track n Field',
    description: '100m, 400m, relay races and long jump events.',
    icon: '🏃',
    imageUrl: 'https://images.unsplash.com/photo-1530549387631-6c12946b998a?auto=format&fit=crop&q=80&w=800',
    category: 'Individual'
  },
  {
    id: 'fun-games',
    name: 'Fun Games',
    description: 'Tug of war, sack race, and recreational activities.',
    icon: '🎯',
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800',
    category: 'Fun'
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1461896756993-7f733b67bb55?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1526676037777-05a23fe55866?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=600',
];
