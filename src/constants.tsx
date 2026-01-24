import { Snowflake, Shovel, ThermometerSnowflake, Truck, Sun, Scissors, Sprout, Flower2, AlertCircle } from 'lucide-react';
import { SeasonContent } from './types';

export const WINTER_CONTENT: SeasonContent = {
  mode: 'winter',
  primaryColor: 'bg-winter-primary',
  heroHeadline: "CLEARFAST PREMIUM SNOW REMOVAL",
  heroSubheadline: "Wake up to a clear driveway. We battle the storm so you don't have to.",
  ctaText: "CLEAR MY DRIVEWAY",
  howItWorksStep3: "Enjoy your clear driveway and safe walkways.",
  services: [
    {
      title: "Snow Plowing",
      description: "Residential and commercial driveway clearing with our fleet of heavy-duty trucks.",
      icon: Truck
    },
    {
      title: "Salting & Sanding",
      description: "Prevent slips and falls with our eco-friendly ice melt and grit mixtures.",
      icon: Snowflake
    },
    {
      title: "Sidewalk Clearing",
      description: "Precise manual and machine clearing for walkways, ensuring pedestrian safety.",
      icon: Shovel
    },
    {
      title: "Emergency Callouts",
      description: "24/7 Rapid response for heavy storms and blizzard conditions.",
      icon: AlertCircle
    }
  ]
};

export const SUMMER_CONTENT: SeasonContent = {
  mode: 'summer',
  primaryColor: 'bg-summer-primary',
  heroHeadline: "CLEARFAST LAWN CARE AND LANDSCAPING",
  heroSubheadline: "Reclaim your weekends. Enjoy a manicured lawn without lifting a finger.",
  ctaText: "MOW MY LAWN",
  howItWorksStep3: "Bask in the splendor of your lush, green lawn.",
  services: [
    {
      title: "Mowing & Edging",
      description: "Weekly or bi-weekly precision cuts with professional edging for a sharp look.",
      icon: Scissors
    },
    {
      title: "Fertilization",
      description: "Custom nutrient plans to keep your grass deep green and weed-free all season.",
      icon: Sprout
    },
    {
      title: "Spring/Fall Cleanup",
      description: "Seasonal debris removal, leaf cleanup, de-thatching, and bed prep to keep your property pristine year-round.",
      icon: Sun
    },
    {
      title: "Aeration",
      description: "Core aeration to allow air, water, and nutrients to penetrate deep roots.",
      icon: Flower2
    }
  ]
};