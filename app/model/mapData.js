const Images = [
  { image: require("../../assets/banners/food-banner1.jpg") },
  { image: require("../../assets/banners/food-banner2.jpg") },
  { image: require("../../assets/banners/food-banner3.jpg") },
  { image: require("../../assets/banners/food-banner4.jpg") },
];

export const markers = [
  {
    coordinate: {
      latitude: 22.6293867,
      longitude: 88.4352056,
    },
    title: "Amazing Food Place",
    description: "this is the best foot place",
    image: Images[0].image,
    rating: 4,
    reviews: 99,
  },
  {
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    title: "Amazing Food Place",
    description: "this is the best foot place",
    image: Images[1].image,
    rating: 5,
    reviews: 69,
  },
  {
    coordinate: {
      latitude: 22.6281662,
      longitude: 88.4410113,
    },
    title: "Amazing Food Place",
    description: "this is the best foot place",
    image: Images[2].image,
    rating: 2,
    reviews: 129,
  },
  {
    coordinate: {
      latitude: 22.6341137,
      longitude: 88.4497463,
    },
    title: "Four Amazing Food Place",
    description: "this is the best foot place",
    image: Images[3].image,
    rating: 7,
    reviews: 190,
  },
  {
    coordinate: {
      latitude: 22.6292757,
      longitude: 88.444781,
    },
    title: "Fitn Amzing Foot Place",
    description: "this is the best foot place",
    image: Images[3].image,
    rating: 7,
    reviews: 190,
  },
];

export const mapDarkStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },

  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];

export const mapStandarStyle = [
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];
