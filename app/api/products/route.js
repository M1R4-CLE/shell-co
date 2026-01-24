export async function POST(request) {
  // ... all this code
}

export async function GET() {
  const products = [
    // Chicken Meat Pieces
    {
      id: 'chicken-leg',
      name: 'Chicken Leg',
      category: 'Chicken Meat (Pieces)',
      description: 'Fresh chicken legs, perfect for grilling or frying.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Chicken_Leg.png']
    },
    {
      id: 'chicken-wing',
      name: 'Chicken Wing',
      category: 'Chicken Meat (Pieces)',
      description: 'Juicy chicken wings, ideal for parties and gatherings.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Chicken_wing.png']
    },
    {
      id: 'chicken-breast',
      name: 'Chicken Breast',
      category: 'Chicken Meat (Pieces)',
      description: 'Lean chicken breast, great for healthy meals.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Chickenbreast.png']
    },
    {
      id: 'chicken-thigh',
      name: 'Chicken Thigh',
      category: 'Chicken Meat (Pieces)',
      description: 'Tender chicken thighs, full of flavor.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Chickenthigh1.png']
    },
    {
      id: 'chicken-head',
      name: 'Chicken Head',
      category: 'Chicken Meat (Pieces)',
      description: 'Chicken heads, suitable for soup and special dishes.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Chickenhead1.png']
    },
    {
      id: 'chicken-neck',
      name: 'Chicken Neck',
      category: 'Chicken Meat (Pieces)',
      description: 'Chicken necks, flavorful and great for soups.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Chickenneck1.png']
    },
    {
      id: 'chicken-back',
      name: 'Chicken Back',
      category: 'Chicken Meat (Pieces)',
      description: 'Meaty bone section ideal for soups and stock making. Provides rich flavor when simmered slowly.',
      sizes: ['500g', '1kg', '2kg'],
      images: ['/images/Chicken/Chickenback1.png']
    },
    {
      id: 'chicken-feet',
      name: 'Chicken Feet',
      category: 'Chicken Meat (Pieces)',
      description: 'Chicken feet, ideal for stews.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Chickenfeet1.png']
    },
    {
      id: 'chicken-liver',
      name: 'Chicken Liver',
      category: 'Chicken Meat (Pieces)',
      description: 'Fresh chicken liver, rich in nutrients.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Chickenliver1.png']
    },
    {
      id: 'chicken-giblets',
      name: 'Chicken Giblets',
      category: 'Chicken Meat (Pieces)',
      description: 'Assorted chicken giblets, great for various dishes.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Giblets1.png']
    },
    {
      id: 'chicken-fillet',
      name: 'Chicken Fillet',
      category: 'Chicken Meat (Pieces)',
      description: 'Boneless chicken fillet, perfect for quick meals.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Fillet1.png']
    },
    {
      id: 'chicken-thighleg',
      name: 'Chicken Thighleg',
      category: 'Chicken Meat (Pieces)',
      description: 'Juicy chicken thighleg, great for grilling.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Chickenthighleg1.png']
    },
    {
      id: 'chicken-intestine',
      name: 'Chicken Intestine',
      category: 'Chicken Meat (Pieces)',
      description: 'Fresh chicken intestine, ideal for skewers and street food.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Chickenintestine1.png']
    },
    {
      id: 'chicken-butt',
      name: 'Chicken Butt',
      category: 'Chicken Meat (Pieces)',
      description: 'Chicken butt, a delicacy for grilling and roasting.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Chickenbutt1.png']
    },
    {
      id: 'half-slice-chicken',
      name: 'Half Slice Chicken',
      category: 'Chicken Meat (Pieces)',
      description: 'Half slice chicken, convenient for various recipes.',
      sizes: ['1kg', '2kg', '5kg'],
      images: ['/images/Chicken/Half_Slice_Chicken.png']
    },
    {
      id: 1,
      name: 'Eggs',
      type: 'Farm Fresh • Poultry',
      image: '/images/Chicken/White_Egg_Tray.png',
      category: 'eggs',
      variants: [
        {
          id: 'white-eggs',
          name: 'White Eggs',
          description: "Fresh white eggs available with or without trays.",
          sizes: ['Small', 'Medium', 'Large', 'XL']
        },
        {
          id: 'brown-eggs',
          name: 'Brown Eggs',
          description: "Farm-fresh brown eggs offered with or without trays.",
          sizes: ['Small', 'Medium', 'Large', 'XL']
        }
      ]
    },
    {
      id: 2,
      name: 'Whole Chicken',
      type: 'Fresh • Poultry',
      variants: [
        {
          id: 'whole-chicken-2kg',
          name: 'Whole Chicken (2kg)',
          type: 'Fresh • Poultry',
          sizes: ['1 head', '2 heads', '5 heads', '10 heads'],
          images: ['/images/Chicken/Whole_Chicken1.png']
        },
        {
          id: 'whole-chicken-3kg',
          name: 'Whole Chicken (3kg)',
          type: 'Fresh • Poultry',
          sizes: ['1 head', '2 heads', '5 heads', '10 heads'],
          images: ['/images/Chicken/Whole_Chicken1.png']
        },
        {
          id: 'whole-chicken-bulk',
          name: 'Whole Chicken (Bulk Orders)',
          type: 'Fresh • Poultry',
          sizes: ['25 heads', '50 heads', '100 heads', 'Custom'],
          images: ['/images/Chicken/Whole_Chicken1.png']
        }
      ]
    },
    {
      id: 4,
      name: 'Poultry Feed',
      type: 'Feed • Supplies',
      image: '/images/Chicken/Brown_EggTray.png',
      category: 'feed',
      variants: [
        {
          id: 'starter-feed',
          name: 'Starter Feed',
          description: "Formulated for young chicks to support early growth and development. Helps build strong bones, immunity, and healthy weight gain.",
          sizes: ['25 kg', '50 kg']
        },
        {
          id: 'grower-feed',
          name: 'Grower Feed',
          description: "Designed for growing chickens after the starter stage. Supports steady growth and prepares birds for maturity.",
          sizes: ['25 kg', '50 kg']
        },
        {
          id: 'layer-feed',
          name: 'Layer Feed',
          description: "Specially formulated for laying hens to support egg production and shell quality. Provides balanced nutrients for consistent performance.",
          sizes: ['25 kg', '50 kg']
        }
      ]
    }
  ];

  return Response.json(products);
}
