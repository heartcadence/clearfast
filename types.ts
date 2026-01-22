import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SeasonContent {
  mode: 'winter' | 'summer';
  primaryColor: string;
  heroHeadline: string;
  heroSubheadline: string;
  ctaText: string;
  howItWorksStep3: string;
  services: ServiceItem[];
}