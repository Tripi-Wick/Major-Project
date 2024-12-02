const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [34.0259, -118.7798],
    },
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [40.7831, -73.9712],
    },
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Aspen",
    country: "United States",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [39.1911, -106.8175],
    },
  },
  {
    title: "Spacious Villa with Pool",
    description:
      "This luxurious villa offers ample space, a private pool, and a tropical garden. A great choice for a family getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Bali",
    country: "Indonesia",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [-8.3405, 115.0920],
    },
  },
  {
    title: "Rustic Farmhouse",
    description:
      "Experience the charm of a rustic farmhouse surrounded by nature. Perfect for those looking for a peaceful escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Upstate New York",
    country: "United States",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [42.0654, -73.8914],
    },
  },
  {
    title: "Luxury Penthouse with City View",
    description:
      "Live in luxury in this high-end penthouse with breathtaking views of the city skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [25.276987, 55.296249],
    },
  },
  {
    title: "Cozy Cabin in the Woods",
    description:
      "Get away from the hustle and bustle in this cozy cabin nestled in the woods. Ideal for a winter retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Vermont",
    country: "United States",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [44.5588, -72.5770],
    },
  },
  {
    title: "Beachside Villa",
    description:
      "This beautiful beachside villa offers stunning ocean views, an infinity pool, and luxurious amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Maldives",
    country: "Maldives",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [3.2028, 73.2207],
    },
  },
  {
    title: "Luxury Mansion",
    description:
      "This stunning luxury mansion offers expansive rooms, a grand pool, and sophisticated design. A once-in-a-lifetime stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Los Angeles",
    country: "United States",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [34.0522, -118.2437],
    },
  },
  {
    title: "Countryside Cottage",
    description:
      "Relax and enjoy a slow-paced lifestyle at this picturesque countryside cottage surrounded by beautiful landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "English Countryside",
    country: "United Kingdom",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [51.5074, -0.1278],
    },
  },
  {
    title: "Urban Chic Apartment",
    description:
      "A sleek and modern apartment in the city's most vibrant district. Perfect for a stylish stay with easy access to nightlife and dining.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=2534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1600,
    location: "Paris",
    country: "France",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [48.8566, 2.3522],
    },
  },
  {
    title: "Desert Oasis Villa",
    description:
      "A luxurious villa in the heart of the desert. With private pools and panoramic views, it’s the perfect place to escape the ordinary.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4800,
    location: "Dubai Desert",
    country: "United Arab Emirates",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [24.4539, 54.3773],
    },
  },
  {
    title: "Secluded Island Resort",
    description:
      "A private island getaway where you can enjoy total peace, crystal clear waters, and unparalleled luxury. The ultimate escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Tahiti",
    country: "French Polynesia",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [-17.6509, -149.4260],
    },
  },
  {
    title: "Lakefront Log Cabin",
    description:
      "This picturesque log cabin is located right on the lake, perfect for boating, fishing, and enjoying beautiful sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1300,
    location: "Lake Tahoe",
    country: "United States",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [38.9398, -119.9741],
    },
  },
  {
    title: "City Penthouse with Rooftop Garden",
    description:
      "A luxurious penthouse featuring a private rooftop garden with breathtaking views. Perfect for city lovers looking for an upscale experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 7000,
    location: "Los Angeles",
    country: "United States",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [34.0522, -118.2437],
    },
  },
  {
    title: "Tropical Eco-Lodge",
    description:
      "An eco-friendly tropical lodge located in a lush rainforest. Ideal for nature lovers and those seeking sustainability during their travels.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2200,
    location: "Costa Rica",
    country: "Costa Rica",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [9.7489, -83.7534],
    },
  },
  {
    title: "Victorian Mansion",
    description:
      "This elegant Victorian mansion offers grand architecture, antique furniture, and timeless charm. Experience history in style.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "San Francisco",
    country: "United States",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [37.7749, -122.4194],
    },
  },
  {
    title: "Modern Chalet in the Alps",
    description:
      "A stunning modern chalet located in the Swiss Alps. Ideal for skiing, hiking, or simply enjoying the majestic mountain views.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5600,
    location: "Zermatt",
    country: "Switzerland",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [46.0207, 7.7491],
    },
  },
  {
    title: "Exclusive Private Mansion",
    description:
      "Experience the luxury of a private mansion in the heart of the city with top-tier amenities, perfect for hosting events or simply relaxing in style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "London",
    country: "United Kingdom",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [51.5074, -0.1278],
    },
  },
  {
    title: "Mountain View Retreat",
    description:
      "A luxurious retreat nestled in the mountains, offering sweeping views, hiking trails, and serene surroundings. Ideal for nature lovers and adventurers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469401258206-4e0cc14e9358?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "Aspen",
    country: "United States",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [39.1911, -106.8175],
    },
  },
  {
    title: "Eco-Friendly Treehouse",
    description:
      "This unique treehouse combines eco-luxury and sustainability. Surrounded by forest, it offers a perfect escape from urban life while minimizing its environmental footprint.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501635238895-63f29cfc06b3?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2200,
    location: "Vancouver Island",
    country: "Canada",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [48.4284, -123.3656],
    },
  },
  {
    title: "Historical Mansion in the Countryside",
    description:
      "An elegant historical mansion with classic charm, set in the peaceful countryside. A perfect place to relax or host private events with an air of timeless luxury.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1459535653751-d571815e906b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 8500,
    location: "Bordeaux",
    country: "France",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [44.8404, -0.5805],
    },
  },
  {
    title: "Luxury Ski Lodge",
    description:
      "This luxury ski lodge offers ski-in/ski-out access, a cozy fireplace, and all the amenities needed for an unforgettable winter vacation in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 7200,
    location: "St. Moritz",
    country: "Switzerland",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [46.4984, 9.8380],
    },
  },
  {
    title: "Luxury Beachfront Villa",
    description:
      "A beachfront villa offering panoramic ocean views, private beach access, and spacious living areas. Perfect for an exclusive getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 15000,
    location: "Maldives",
    country: "Maldives",
    owner: "674ce8d1f784cc341b8faa6c",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [3.2028, 73.2207],
    },
  },
];
  module.exports = { data: sampleListings };