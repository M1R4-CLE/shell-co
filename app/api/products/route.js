export async function POST(request) {
  // ... all this code
}

export async function GET() {
  const products = [
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
      id: 3,
      name: 'Chicken Meat (Pieces)',
      type: 'Fresh & Frozen • Meat',
      image: '/images/Chicken/Chicken_Leg.png',
      category: 'meatPieces',
      variants: [
        {
          id: 'chicken-breast',
          name: 'Chicken Breast',
          description: "Lean and meaty cut ideal for grilling, frying, and healthy meals. Known for its low fat content and versatility in many recipes.",
          sizes: ['500g', '1 kg', '2 kg'],
          images: ['/images/Chicken/Chicken-Breast.png']
        },
        {
          id: 'chicken-leg',
          name: 'Chicken Leg',
          description: "Includes the drumstick portion with rich flavor and tender meat. Commonly used for frying, roasting, and slow-cooked dishes.",
          sizes: ['500g', '1 kg', '2 kg'],
          images: ['/images/Chicken/Chicken_Leg.png']
        },
        {
          id: 'chicken-wing',
          name: 'Chicken Wings',
          description: "Popular cut for frying and grilling, perfect for snacks and appetizers. Well-known for absorbing marinades and sauces.",
          sizes: ['500g', '1 kg', '2 kg'],
          images: ['/images/Chicken/Chicken_wing.png']
        },
        {
          id: 'chicken-liver',
          name: 'Chicken Liver',
          description: "Tender organ meat with a rich taste, commonly used in sautés and traditional dishes. A good source of nutrients when properly prepared.",
          sizes: ['500g', '1 kg', '2 kg'],
          images: ['/images/Chicken/Chickenliver1.png']
        },
        {
          id: 'chicken-neck',
          name: 'Chicken Neck',
          description: "Flavorful cut ideal for soups and broths. Adds depth of taste when used for stock preparation.",
          sizes: ['500g', '1 kg', '2 kg'],
          images: ['/images/Chicken/Chickenneck1.png']
        },
        {
          id: 'chicken-head',
          name: 'Chicken Head',
          description: "Used in traditional and local dishes for added flavor. Commonly included in stock and soup preparations.",
          sizes: ['500g', '1 kg', '2 kg'],
          images: ['/images/Chicken/Chickenhead1.png']
        },
        {
          id: 'chicken-feet',
          name: 'Chicken Feet',
          description: "Rich in collagen, commonly used in soups and broths. Known for enhancing texture and flavor in slow-cooked dishes.",
          sizes: ['500g', '1 kg', '2 kg'],
          images: ['/images/Chicken/Chickenfeet1.png']
          
        },
        {
          id: 'chicken-thigh-leg',
          name: 'Chicken Thigh Leg',
          description: "Combination of thigh and leg portions with juicy meat. Ideal for roasting, grilling, and marinated dishes.",
          sizes: ['500g', '1 kg', '2 kg'],
          images: ['/images/Chicken/Chickenthighleg1.png']
        },
        {
          id: 'chicken-butt',
          name: 'Chicken Butt',
          description: "Small fatty portion that adds flavor when cooked. Often used in roasting or grilling for crisp texture.",
          sizes: ['500g', '1 kg', '2 kg'],
          images: ['/images/Chicken/Chickenbutt1.png']
        },
        {
          id: 'chicken-thigh',
          name: 'Chicken Thigh',
          description: "Tender and juicy cut suitable for frying, baking, and stews. Preferred for its rich flavor compared to breast meat.",
          sizes: ['500g', '1 kg', '2 kg'],
          images: ['/images/Chicken/Chickenthigh1.png']
        },
        {
          id: 'chicken-giblets',
          name: 'Chicken Giblets',
          description: "Includes liver, heart, and gizzard commonly used in traditional recipes. Often prepared for sauces, gravies, and soups.",
          sizes: ['500g', '1 kg', '2 kg'],
          images: ['/images/Chicken/Giblets1.png']
        },
        {
          id: 'chicken-back',
          name: 'Chicken Back',
          description: "Meaty bone section ideal for soups and stock making. Provides rich flavor when simmered slowly.",
          sizes: ['500g', '1 kg', '2 kg']
          images: ['/images/Chicken/Chickenback1.png']
        },
        {
          id: 'chicken-tenderloins',
          name: 'Chicken Tenderloins',
          description: "Soft and tender strips taken from the breast area. Perfect for quick cooking such as stir-fry and pan-frying.",
          sizes: ['500g', '1 kg', '2 kg'],
          images: [
            '/images/Chicken/tenderloins1.png',
            '/images/Chicken/tenderloins2.png',
            '/images/Chicken/tenderloins3.png',
            '/images/Chicken/tenderloins4.png',
            '/images/Chicken/tenderloins5.png'
          ]
        },
        {
          id: 'chicken-intestine',
          name: 'Chicken Intestine',
          description: "Carefully cleaned and prepared for cooking. Commonly used in local and specialty dishes.",
          sizes: ['500g', '1 kg', '2 kg']
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
