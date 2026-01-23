export async function GET() {
  const products = [
    {
      id: 1,
      name: 'Eggs',
      items: [
        {
          id: 'brown-eggs',
          name: 'Brown Eggs Tray',
          type: 'Farm Fresh • Poultry',
          image: '/images/Chicken/Brown_EggTray.png',
          options: ['Small', 'Medium', 'Large', 'XL'],
        },
        {
          id: 'white-eggs',
          name: 'White Eggs Tray',
          type: 'Farm Fresh • Poultry',
          image: '/images/Chicken/White_Egg_Tray.png',
          options: ['Small', 'Medium', 'Large', 'XL'],
        },
      ],
    },
    {
      id: 2,
      name: 'Chicken Meat (Pieces)',
      items: [
        {
          id: 'chicken-breast',
          name: 'Chicken Breast',
          sizes: ['500g', '1kg', '2kg'],
          images: ['/images/Chicken/Chicken-Breast.png'],
        },
      ],
    },
  ];

  return Response.json(products);
}
