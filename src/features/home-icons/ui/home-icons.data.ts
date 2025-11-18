import { THomeIcon } from '@features/home-icons/ui/home-icons.types.ts';
import { BonusesIcon, DeliveryIcon, SupportIcon, TravelIcon } from '../assets/icons';

export const homeIconsData: THomeIcon[] = [
  { Icon: TravelIcon, title: 'Travel', id: 1 },
  { Icon: DeliveryIcon, title: 'Delivery', id: 2 },
  { Icon: BonusesIcon, title: 'Bonuses', id: 3 },
  { Icon: SupportIcon, title: 'Support', id: 4 },
];
