export const brand = {
  name: 'KraveBeauty',
  logoSrc: '/krave-logo.svg',
  logoSrcLight: '/krave-logo-white.svg',
  freeShippingThreshold: 50,
  tagline: '#PressReset on the Skincare Norm',
};

const gbrImages = [
  { src: '/images/krave/gbr-1.png', alt: 'Great Barrier Relief bottle', showBadge: true },
  { src: '/images/krave/gbr-jumbo.png', alt: 'Jumbo Great Barrier Relief bottle' },
  { src: '/images/krave/gbr-2.jpg', alt: 'Great Barrier Relief packaging' },
  { src: '/images/krave/gbr-3.png', alt: 'Great Barrier Relief product detail' },
  { src: '/images/krave/gbr-4.png', alt: 'Great Barrier Relief lifestyle' },
  { src: '/images/krave/gbr-5.png', alt: 'Great Barrier Relief texture' },
];

export const product = {
  title: 'Great Barrier Relief',
  subtitle: 'Reparative, Skin-Soothing Serum',
  badge: 'Best Seller',
  rating: 5,
  reviewCount: 4820,
  description:
    'A reparative serum that calms sensitivity from a compromised skin barrier. Formulated with skin-healing Tamanu Oil to soothe, Niacinamide to even skin tone and texture, and Ceramides to strengthen the barrier.',
  serving: 'Apply a few pumps after cleansing, morning and night. Follow with moisturizer.',
  images: gbrImages,
  colors: [
    {
      id: 'barrier-green',
      label: 'Barrier Green',
      hex: '#9bb8a8',
      images: gbrImages,
    },
  ],
  sizes: [
    { id: 'standard-45', label: '45 mL', price: 28 },
    { id: 'jumbo-100', label: '100 mL', price: 50 },
  ],
  frequencies: [],
  benefits: [
    '10% Tamanu Oil to soothe and repair',
    'Niacinamide to even tone and texture',
    'Ceramides to strengthen the barrier',
    'For over-exfoliated or irritated skin',
    'Barrier-first, intentional skincare',
  ],
  ingredients:
    'Tamanu Oil, Niacinamide, Ceramides, Centella Asiatica. Vegan. Cruelty-free. Fragrance-free.',
  howToUse:
    'After cleansing, apply a few pumps to face and neck morning and night. Pair with Oat So Simple Water Cream to lock in moisture.',
};

export const shippingOptions = [
  { value: 'Ground - $8.00', title: 'Ground', subtitle: '5-7 business days', price: '$8.00' },
  { value: 'Express - $15.00', title: 'Express', subtitle: '2-3 business days', price: '$15.00' },
  { value: 'Overnight - $28.00', title: 'Overnight', subtitle: 'Next business day', price: '$28.00' },
];

export const pickupLocations = [
  { name: 'NYC Pickup', address: '200 Broadway, New York, NY 10007', dist: '0.3 mi' },
  { name: 'LA Studio', address: '8600 Melrose Ave, West Hollywood, CA 90069', dist: '0.5 mi' },
  { name: 'SF Locker', address: '500 Pine St, San Francisco, CA 94108', dist: '0.6 mi' },
];

export const timeSlots = ['9am-10am', '10am-11am', '11am-12pm', '1pm-2pm', '2pm-3pm'];

export const usStates = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
  { code: 'DC', name: 'District of Columbia' },
];
