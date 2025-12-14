export interface Brand {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  category?: string;
  bestFor?: string;
  carouselImages?: string[];
}

export const brands: Brand[] = [
  {
    name: 'Giorgio Armani',
    url: 'https://www.armanibeauty.com',
    logo: '/images/brands/giorgio-armani.svg',
    category: 'Base & Foundation',
    description: 'Luxury Italian skincare-infused makeup known for its flawless, natural finish. Giorgio Armani Beauty products are designed to enhance your natural beauty with sophisticated, long-lasting formulas.',
    bestFor: 'All skin types, HD photography, long-wear makeup, radiant skin-like finish',
    carouselImages: [
      '/images/brands/giorgio-armani/placeholder-1.jpg',
      '/images/brands/giorgio-armani/placeholder-2.jpg',
      '/images/brands/giorgio-armani/placeholder-3.jpg',
    ],
  },
  {
    name: 'DIOR',
    url: 'https://www.dior.com/beauty',
    logo: '/images/brands/dior.svg',
    category: 'Base & Foundation',
    description: 'French luxury makeup with innovative formulas and high-performance results. Dior combines skincare benefits with exquisite makeup for a flawless, couture finish that lasts all day.',
    bestFor: 'Luxury bridal makeup, long-lasting wear, professional photography, all occasions',
    carouselImages: [
      '/images/brands/dior/placeholder-1.jpg',
      '/images/brands/dior/placeholder-2.jpg',
      '/images/brands/dior/placeholder-3.jpg',
    ],
  },
  {
    name: 'PAT McGRATH LABS',
    url: 'https://www.patmcgrath.com',
    logo: '/images/brands/pat-mcgrath-labs.svg',
    category: 'Eyes & Lips',
    description: 'Legendary makeup artistry meets innovative formulas. Pat McGrath Labs delivers high-impact color, luxurious textures, and iconic looks used by top makeup artists worldwide.',
    bestFor: 'Dramatic eye looks, bold lips, editorial makeup, statement bridal makeup',
    carouselImages: [
      '/images/brands/pat-mcgrath-labs/placeholder-1.jpg',
      '/images/brands/pat-mcgrath-labs/placeholder-2.jpg',
      '/images/brands/pat-mcgrath-labs/placeholder-3.jpg',
    ],
  },
  {
    name: 'Charlotte Tilbury',
    url: 'https://www.charlottetilbury.com',
    logo: '/images/brands/charlotte-tilbury.svg',
    category: 'Eyes & Lips',
    description: 'Red carpet-worthy makeup with effortless glamour. Charlotte Tilbury\'s award-winning products create timeless, beautiful looks with easy-to-use formulas that deliver professional results.',
    bestFor: 'Bridal makeup, timeless elegance, glowing skin, romantic looks',
    carouselImages: [
      '/images/brands/charlotte-tilbury/placeholder-1.jpg',
      '/images/brands/charlotte-tilbury/placeholder-2.jpg',
      '/images/brands/charlotte-tilbury/placeholder-3.jpg',
    ],
  },
  {
    name: 'Hourglass',
    url: 'https://www.hourglasscosmetics.com',
    logo: '/images/brands/hourglass.svg',
    category: 'Setting & Finishing',
    description: 'Innovative, cruelty-free luxury makeup with cutting-edge technology. Hourglass products are designed to deliver a flawless, airbrushed finish that looks stunning in person and on camera.',
    bestFor: 'HD photography, video, airbrushed finish, vegan-friendly options',
    carouselImages: [
      '/images/brands/hourglass/placeholder-1.jpg',
      '/images/brands/hourglass/placeholder-2.jpg',
      '/images/brands/hourglass/placeholder-3.jpg',
    ],
  },
  {
    name: 'NARS',
    url: 'https://www.narscosmetics.com',
    logo: '/images/brands/nars.svg',
    category: 'Blush & Highlight',
    description: 'Iconic cult-favorite products with unparalleled color payoff. NARS creates bold, beautiful looks with highly pigmented formulas that blend seamlessly and last throughout your celebration.',
    bestFor: 'Vibrant blush, natural contour, glowing highlights, all skin tones',
    carouselImages: [
      '/images/brands/nars/placeholder-1.jpg',
      '/images/brands/nars/placeholder-2.jpg',
      '/images/brands/nars/placeholder-3.jpg',
    ],
  },
  {
    name: 'Makeup by Mario',
    url: 'https://makeupbymario.com',
    logo: '/images/brands/makeup-by-mario.svg',
    category: 'Base & Complexion',
    description: 'Professional-grade makeup created by celebrity makeup artist Mario Dedivanovic. These products deliver buildable, blendable coverage with a natural, skin-perfecting finish.',
    bestFor: 'Natural bridal looks, soft glam, buildable coverage, seamless blending',
    carouselImages: [
      '/images/brands/makeup-by-mario/placeholder-1.jpg',
      '/images/brands/makeup-by-mario/placeholder-2.jpg',
      '/images/brands/makeup-by-mario/placeholder-3.jpg',
    ],
  },
  {
    name: 'One Size',
    url: 'https://www.onesizebeauty.com',
    logo: '/images/brands/one-size.svg',
    category: 'Setting & Finishing',
    description: 'Inclusive beauty brand by Patrick Starrr with high-performance, transfer-proof formulas. One Size products are designed to work for all skin types and tones with exceptional staying power.',
    bestFor: 'Long-lasting wear, waterproof makeup, all skin types, transfer-proof finish',
    carouselImages: [
      '/images/brands/one-size/placeholder-1.jpg',
      '/images/brands/one-size/placeholder-2.jpg',
      '/images/brands/one-size/placeholder-3.jpg',
    ],
  },
  {
    name: 'Fenty Beauty',
    url: 'https://www.fentybeauty.com',
    logo: '/images/brands/fenty-beauty.svg',
    category: 'Base & Complexion',
    description: 'Game-changing inclusive beauty with an unprecedented shade range. Fenty Beauty creates high-quality products for all skin types and tones with innovative formulas that deliver flawless results.',
    bestFor: 'Diverse skin tones, medium to full coverage, long-wear, inclusive shade matching',
    carouselImages: [
      '/images/brands/fenty-beauty/placeholder-1.jpg',
      '/images/brands/fenty-beauty/placeholder-2.jpg',
      '/images/brands/fenty-beauty/placeholder-3.jpg',
    ],
  },
];
