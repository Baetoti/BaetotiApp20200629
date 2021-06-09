export default {

  feature: [
    {
      distance: '1.5Km',
      restaurantName: 'Kimsa Restaurant',
      isOnline: true,
      restaurantIcon:
        'data:image/png;base64,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',
      price: 36,
      title: 'Women Makeup Pack',
      subTitle: 'Cosmetic shop',
      subTitleImg: require('../../assets/buyerHome/brewery.png'),
      subTitle: 'Cosmetic shop',
      stars: 5,
      category: 'Mockup',
      image:
        'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        logo:  require('../../assets/buyerHome/Layer625.png'),
      location: {
        cordinate: {
          latitude: 37.7796229,
          longitude: -122.4120326
        },
        marker: require('../../assets/buyerHome/map1.png')
      }
    },
    {
      distance: '1.5Km',
      restaurantName: 'Melebu Restaurant',
      isOnline: false,
      subTitle: 'brawkry',
      subTitleImg: require('../../assets/buyerHome/restaurant.png'),
      restaurantIcon:
        'data:image/png;base64,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',
      price: 36,
      logo:  require('../../assets/buyerHome/Layer626.png'),
      title: 'Strawbary Topped',
      stars: 5,
      category: 'Mockup',
      image:
        'https://images.unsplash.com/photo-1495085570317-992279e0c33d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      location: {
        cordinate: {
          latitude: 37.7750503,
          longitude: -122.4231423
        },
        marker: require('../../assets/buyerHome/map2.png')
      }
    },
    {
      distance: '1.5Km',
      restaurantName: 'Melebu Restaurant',
      isOnline: false,
      subTitle: 'brawkry',
      subTitleImg:  require('../../assets/buyerHome/Layer626.png'),
      restaurantIcon:
        'data:image/png;base64,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',
      price: 36,
      title: 'Red Cocktail with Ice',
      stars: 5,
      category: 'Mockup',
      logo:require('../../assets/buyerHome/brewery.png'),
      image:
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      location: {
        cordinate: {
          latitude: 37.7854638,
      longitude: -122.4019413
        },
        marker: require('../../assets/buyerHome/map1.png')
      }
    },
    {
      distance: '1.5Km',
      restaurantName: 'Melebu Restaurant',
      logo: require('../../assets/buyerHome/Layer626.png'),
      isOnline: true,
      subTitle: 'brawkry',
      subTitleImg: require('../../assets/buyerHome/restaurant.png'),
      restaurantIcon:
        'data:image/png;base64,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',
      price: 36,
      title: 'Black sugar free coffee',
      stars: 5,
      category: 'Mockup',
      image:
        'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      location: {
        cordinate: {
          latitude: 37.6516618,
          longitude:-122.4856233
        },
        marker: require('../../assets/buyerHome/map3.png')

      }
    },
  ],
};
