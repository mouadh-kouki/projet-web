// Search toggle logic
const searchIcon = document.querySelector('#search-icon');
const searchBox = document.querySelector('.search-box');

if (searchIcon && searchBox) {
  searchIcon.onclick = () => {
    searchBox.classList.toggle('active');
  };
}

// Vehicle data
const vehicles = [
  {
    id: "1",
    name: "Aston Martin Valkyrie",
    price: "$3,000,000",
    image: "hyper cars/Aston-Martin-Valkyrie-1-1200x800.webp",
    category: "Hyper Cars",
    description: "A powerful hypercar designed by Red Bull Racing and Aston Martin.",
    horsepower: "1,160 HP",
    engine: "6.5L V12 Hybrid",
    year: 2022
  },
  {
    id: "2",
    name: "Koenigsegg Jesko Attack",
    price: "$3,500,000",
    image: "hyper cars/koenigsegg jesko attack.jpg",
    category: "Hyper Cars",
    description: "A high-performance machine capable of breaking records.",
    horsepower: "1,600 HP",
    engine: "5.0L V8 Twin-Turbo",
    year: 2023
  },
  {
    id: "3",
    name: "Rolls-Royce Cullinan by Mansory",
    price: "$500,000",
    image: "luxury cars/rolls-royce_cullinan_by_mansory_my2025_01.webp",
    category: "Luxury Cars",
    description: "Luxury redefined with custom Mansory styling and unmatched comfort.",
    horsepower: "600 HP",
    engine: "6.75L V12",
    year: 2025
  },
  {
    id: "4",
    name: "Mercedes G63 Brabus Rocket 900",
    price: "$600,000",
    image: "luxury cars/G63 brabus rocket 900.webp",
    category: "Luxury Cars",
    description: "A luxurious monster SUV tuned by Brabus.",
    horsepower: "900 HP",
    engine: "4.5L V8 Twin-Turbo",
    year: 2023
  },
  {
    id: "5",
    name: "McLaren Senna",
    price: "$1,200,000",
    image: "hyper cars/mclaren-senna-002.webp",
    category: "Hyper Cars",
    description: "An extreme track-focused hypercar paying tribute to Ayrton Senna.",
    horsepower: "800 HP",
    engine: "4.0L V8 Twin-Turbo",
    year: 2019
  },
  {
    id: "6",
    name: "Porsche 718 Spyder",
    price: "$100,000",
    image: "hyper cars/porsche 718 spyder.jpg",
    category: "Sports Cars",
    description: "An agile and precise roadster with a pure driving experience.",
    horsepower: "420 HP",
    engine: "4.0L Flat-6",
    year: 2023
  },
  {
    id: "7",
    name: "Volkswagen Touareg R",
    price: "$90,000",
    image: "luxury cars/volkswagen-touareg-r-blue-my25-tw-1001x565-(1).webp",
    category: "SUVs",
    description: "A sporty and luxurious plug-in hybrid SUV from VW.",
    horsepower: "462 HP",
    engine: "3.0L V6 Plug-in Hybrid",
    year: 2025
  },
  {
    id: "8",
    name: "GLE 63S Brabus Rocket",
    price: "$450,000",
    image: "luxury cars/GLE 63S BrabusRocket_07.webp",
    category: "Luxury Cars",
    description: "A performance-enhanced SUV from Mercedes-AMG by Brabus.",
    horsepower: "900 HP",
    engine: "4.0L V8 Biturbo",
    year: 2022
  },
  {
    id: "9",
    name: "Alpina XB7",
    price: "$150,000",
    image: "luxury cars/alpina xb7.jpeg",
    category: "Luxury Cars",
    description: "A refined, high-performance SUV based on the BMW X7.",
    horsepower: "612 HP",
    engine: "4.4L V8 Twin-Turbo",
    year: 2023
  },
  {
    id: "10",
    name: "Jaguar Classic E-Type",
    price: "$220,000",
    image: "classic/Jaguar-Classic-E-Type.jpg.webp",
    category: "Classic Cars",
    description: "A timeless British sports car with elegance and performance.",
    horsepower: "265 HP",
    engine: "4.2L Inline-6",
    year: 1966
  }
];

// Inject vehicles into vehicle list page
if (document.getElementById("vehicle-list")) {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const filtered = vehicles.filter(v => v.category === category);
window.filteredVehicles = filtered; // <-- Ajouté pour permettre les filtres dynamiques

  const container = document.getElementById("vehicle-list");

  container.innerHTML = filtered.map(v => `
    <div class="box">
      <img src="${v.image}" alt="${v.name}">
      <h3>${v.name}</h3>
      <span>${v.price}</span>
      <a href="description_page.html?id=${v.id}" class="details">View Details</a>
    </div>
  `).join('');
}

// Inject details into description page
if (document.getElementById("vehicle-detail")) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const vehicle = vehicles.find(v => v.id === id);

  if (vehicle) {
    document.getElementById("vehicle-image").src = vehicle.image;
    document.getElementById("vehicle-image").alt = vehicle.name;
    document.getElementById("vehicle-name").textContent = vehicle.name;
    document.getElementById("vehicle-description").textContent = vehicle.description;
    document.getElementById("vehicle-price").textContent = vehicle.price;
    document.getElementById("vehicle-features").innerHTML = `
      <li><strong>Catégorie :</strong> ${vehicle.category}</li>
      <li><strong>Chevaux :</strong> ${vehicle.horsepower || 'Non spécifié'}</li>
      <li><strong>Moteur :</strong> ${vehicle.engine || 'Non spécifié'}</li>
      <li><strong>Année :</strong> ${vehicle.year || 'Non spécifié'}</li>
      <li><strong>Disponibilité :</strong> En stock</li>
      <li><strong>Transmission :</strong> Automatique</li>
    `;
  }
}