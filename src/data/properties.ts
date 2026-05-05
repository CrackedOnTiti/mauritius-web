// Structured to match future Sanity schema — swap fetchProperties() body when CMS is ready

export interface Property {
  slug: string;
  name: { en: string; fr: string };
  tagline: { en: string; fr: string };
  description: { en: string; fr: string };
  images: string[]; // filenames under /public/images/properties/[slug]/
  pricePerNight: number;
  currency: 'MUR' | 'EUR';
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  amenities: { en: string[]; fr: string[] };
  location: string;
  featured: boolean;
}

const properties: Property[] = [
  {
    slug: 'villa-bois-cheri',
    name: { en: 'Villa Bois Chéri', fr: 'Villa Bois Chéri' },
    tagline: {
      en: 'Luxury villa with ocean views',
      fr: 'Villa de luxe avec vue sur l\'océan',
    },
    description: {
      en: 'A stunning 3-bedroom villa nestled in the hills, offering breathtaking views of the Indian Ocean. The perfect retreat for families and couples seeking privacy and comfort in the heart of Mauritius.',
      fr: 'Une magnifique villa de 3 chambres nichée dans les collines, offrant une vue imprenable sur l\'océan Indien. La retraite idéale pour les familles et les couples en quête d\'intimité et de confort au cœur de l\'île Maurice.',
    },
    images: ['https://picsum.photos/seed/villa-bois-cheri/1200/700'],
    pricePerNight: 150,
    currency: 'EUR',
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    amenities: {
      en: ['Private pool', 'Air conditioning', 'Wi-Fi', 'Fully equipped kitchen', 'Garden', 'BBQ', 'Parking'],
      fr: ['Piscine privée', 'Climatisation', 'Wi-Fi', 'Cuisine équipée', 'Jardin', 'Barbecue', 'Parking'],
    },
    location: 'Bois Chéri, Savanne',
    featured: true,
  },
  {
    slug: 'appartement-la-gaulette',
    name: { en: 'Apartment La Gaulette', fr: 'Appartement La Gaulette' },
    tagline: {
      en: 'Beachside apartment steps from the lagoon',
      fr: 'Appartement en bord de mer à deux pas du lagon',
    },
    description: {
      en: 'A charming 2-bedroom apartment located steps from the famous La Gaulette lagoon on the west coast. Ideal for kitesurfers and beach lovers looking to make the most of Mauritius\'s natural beauty.',
      fr: 'Un charmant appartement de 2 chambres situé à deux pas du célèbre lagon de La Gaulette sur la côte ouest. Idéal pour les kitesurfeurs et les amoureux de la plage souhaitant profiter de la beauté naturelle de l\'île Maurice.',
    },
    images: ['https://picsum.photos/seed/la-gaulette/1200/700'],
    pricePerNight: 85,
    currency: 'EUR',
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    amenities: {
      en: ['Sea view', 'Air conditioning', 'Wi-Fi', 'Kitchen', 'Terrace', 'Parking'],
      fr: ['Vue mer', 'Climatisation', 'Wi-Fi', 'Cuisine', 'Terrasse', 'Parking'],
    },
    location: 'La Gaulette, Black River',
    featured: true,
  },
  {
    slug: 'bungalow-tamarin',
    name: { en: 'Bungalow Tamarin', fr: 'Bungalow Tamarin' },
    tagline: {
      en: 'Peaceful bungalow in a tropical garden',
      fr: 'Bungalow paisible dans un jardin tropical',
    },
    description: {
      en: 'A cozy 1-bedroom bungalow surrounded by lush tropical gardens in the charming village of Tamarin. A peaceful base to explore the west coast, local markets, and dolphin-watching spots.',
      fr: 'Un confortable bungalow d\'une chambre entouré de jardins tropicaux luxuriants dans le charmant village de Tamarin. Une base paisible pour explorer la côte ouest, les marchés locaux et les spots d\'observation des dauphins.',
    },
    images: ['https://picsum.photos/seed/bungalow-tamarin/1200/700'],
    pricePerNight: 60,
    currency: 'EUR',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: {
      en: ['Tropical garden', 'Air conditioning', 'Wi-Fi', 'Kitchen', 'Terrace'],
      fr: ['Jardin tropical', 'Climatisation', 'Wi-Fi', 'Cuisine', 'Terrasse'],
    },
    location: 'Tamarin, Black River',
    featured: true,
  },
];

export async function fetchProperties(): Promise<Property[]> {
  // Replace this body with a Sanity client query when CMS is ready
  return properties;
}

export async function fetchPropertyBySlug(slug: string): Promise<Property | undefined> {
  // Replace this body with a Sanity client query when CMS is ready
  return properties.find((p) => p.slug === slug);
}
