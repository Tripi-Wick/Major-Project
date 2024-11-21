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
    owner: "673ced9a433bf28e32a2607d'",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [34.0259, -118.7798], // Latitude, Longitude for Malibu
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
    owner: "673ced9a433bf28e32a2607d'",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [40.7831, -73.9712], // Latitude, Longitude for New York City
    },
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519803505059-48b6b6e9a0c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Aspen",
    country: "United States",
    owner: "673ced9a433bf28e32a2607d'",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [39.1911, -106.8175], // Latitude, Longitude for Aspen
    },
  },
  {
    title: "Spacious Villa with Pool",
    description:
      "This luxurious villa offers ample space, a private pool, and a tropical garden. A great choice for a family getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1557152439-5518a7fe7be9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Bali",
    country: "Indonesia",
    owner: "673ced9a433bf28e32a2607d'",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [-8.3405, 115.0920], // Latitude, Longitude for Bali
    },
  },
  {
    title: "Rustic Farmhouse",
    description:
      "Experience the charm of a rustic farmhouse surrounded by nature. Perfect for those looking for a peaceful escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1557152440-d2439b6c2c1c?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Upstate New York",
    country: "United States",
    owner: "673ced9a433bf28e32a2607d'",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [42.0654, -73.8914], // Latitude, Longitude for Upstate New York
    },
  },
  {
    title: "Luxury Penthouse with City View",
    description:
      "Live in luxury in this high-end penthouse with breathtaking views of the city skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1557123741-0d167f2d32fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    owner: "673ced9a433bf28e32a2607d'",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [25.276987, 55.296249], // Latitude, Longitude for Dubai
    },
  },
  {
    title: "Cozy Cabin in the Woods",
    description:
      "Get away from the hustle and bustle in this cozy cabin nestled in the woods. Ideal for a winter retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519657043701-b5ff2e8b3858?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Vermont",
    country: "United States",
    owner: "673ced9a433bf28e32a2607d'",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [44.5588, -72.5770], // Latitude, Longitude for Vermont
    },
  },
  {
    title: "Beachside Villa",
    description:
      "This beautiful beachside villa offers stunning ocean views, an infinity pool, and luxurious amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1557152439-5518a7fe7be9?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Maldives",
    country: "Maldives",
    owner: "673ced9a433bf28e32a2607d'",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [3.2028, 73.2207], // Latitude, Longitude for Maldives
    },
  },
  {
    title: "Luxury Mansion",
    description:
      "This stunning luxury mansion offers expansive rooms, a grand pool, and sophisticated design. A once-in-a-lifetime stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512540732-b990bfa4fc00?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Los Angeles",
    country: "United States",
    owner: "673ced9a433bf28e32a2607d'",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [34.0522, -118.2437], // Latitude, Longitude for Los Angeles
    },
  },
  {
    title: "Countryside Cottage",
    description:
      "Relax and enjoy a slow-paced lifestyle at this picturesque countryside cottage surrounded by beautiful landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1508300782482-d229c52de3d1?ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Kent",
    country: "United Kingdom",
    owner: "673ced9a433bf28e32a2607d'",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [51.1791, 0.2113], // Latitude, Longitude for Kent, UK
    },
  },
  {
    title: "Urban Apartment with Skyline View",
    description:
      "This chic urban apartment is the perfect spot to enjoy city life with incredible skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584424111087-c9319e10d859?ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Toronto",
    country: "Canada",
    owner: "673ced9a433bf28e32a2607d'",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [43.6532, -79.3832], // Latitude, Longitude for Toronto
    },
  },
];

  module.exports = { data: sampleListings };