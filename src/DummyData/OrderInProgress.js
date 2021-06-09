export default OrderInProgress = 
{
  key: 1,
  name: 'Avadh Restaurant',
  orderId: 'OR563PO7890',
  restaurantName:'Sofia Retailer Store',
  restaurantAddress:'230, Golden Street, 23th East Street, New York.',
  restaurantImage:require('../assets/BuyerOrderDetails/Layer855.png'),
  price: 210.0,
  timeLeft: '1 day,18 hours',
  deliveryDateTime: '12:00 PM, Friday, 30 Mar, 2020',
  image: require('../assets/BuyerOrderDetails/Layer700copy2.png'),
  isHidden: 'true',
  Address: 'C-404, Golden Street, East 25th Street, New york City, US',
  providerBy: {
    deliverBy: 'Driver',
    providerName: 'Elen Wheeler',
    providerImage: require('../assets/HomeAssets/Layer861copy.png'),
    providerPrice: 15,
    userType: 'provider',
  },
  client: {
    clientName: 'Alex Joe',
    clientImage: require('../assets/HomeAssets/Layer755.png'),
    clientPrice: 45,
    userType: 'client',
    clientAddress:'C-404, Golden Street, East 25th Street, New york, US'
  },
  itemList: [
    {
      key: 0,
      itemname: 'Honey Pancake',
      itemId: 5623146,
      itemPrice: 140,
      comment: 'Delivery with carefully',
      shortDescription: 'Extra Honey and Extra Spicy',
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
      itemPrice: 140,
      itemId: 5623120,
      quantity: 2,
      comment: 'Delivery with carefully',
      shortDescription: 'Double Chess Butter',
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
  serviceCharges:'10',
  DeliveryCharges:'15',
  paybleAmount:'120'
}
