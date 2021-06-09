export default pendingOrders =
{
  key: 1,
  name: 'Avadh Restaurant',
  orderId: 'OR563PO7890',
  price: 45.0,
  timeLeft: '1 day,18 hours',
  deliveryDateTime: '09:30 PM 18 Apr,2020',
  image: require('../assets/BuyerOrderDetails/Layer700copy2.png'),
  isHidden: 'true',
  Address: 'C-404, Golden Street, East 25th Street, New york City, US',
  
  providerBy: {
    deliverBy: 'Driver',
    providerName: 'julia Doe',
    providerImage: require('../assets/HomeAssets/Layer861copy.png'),
    providerPrice: 15,
    userType: 'provider',
  },
  client: {
    clientName: 'Martin Goe',
    clientImage: require('../assets/HomeAssets/Layer755.png'),
    clientPrice: 45,
    userType: 'client',
  },
  itemList: [
    {
      key: 0,
      itemname: 'Honey Pancake',
      itemId: 5623146,
      itemPrice: 50,
      comment: 'Delivery with carefully',
      shortDescription: 'Extra chess and Extra with honey',
      quantity: 1,
      itemimage: [
        require('../assets/HomeAssets/Layer888copy2.png'),
        require('../assets/HomeAssets/Layer928.png'),
        require('../assets/HomeAssets/Layer935.png'),
      ],
      tags: ['Thaifood', 'Spicy'],
      description:
        'Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      key: 1,
      itemname: 'Fruit Pancake',
      itemPrice: 22.5,
      itemId: 5623120,
      quantity: 2,
      comment: 'Delivery with carefully',
      shortDescription: 'Extra chess and Extra Ketchup',
      itemimage: [
        require('../assets/HomeAssets/Layer889copy2.png'),
        require('../assets/HomeAssets/Layer889copy2.png'),
        require('../assets/HomeAssets/Layer889copy2.png'),
      ],
      tags: ['Thaifood', 'Spicy'],
      description:
        'Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ],
  serviceCharges: '10',
  DeliveryCharges: '15',
  paybleAmount: '120',
  trackingData: {
    statusId: 2,
    orderLocation: {
      latitude: 37.7853621,
      longitude: -122.4005841
    }
  }
}
