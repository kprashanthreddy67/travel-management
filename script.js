function searchRestaurants() {
  const searchInput = document.getElementById('searchInput').value;
  const results = document.getElementById('results');
  results.innerHTML = '';

  // Dummy restaurant data for demonstration
  const restaurants = [
      { name: 'Italian Bistro', location: 'New York' },
      { name: 'Sushi Place', location: 'San Francisco' },
      { name: 'Taco Stand', location: 'Los Angeles' },
      { name: 'Curry House', location: 'Chicago' }
  ];

  const filteredRestaurants = restaurants.filter(restaurant =>
      restaurant.location.toLowerCase().includes(searchInput.toLowerCase()) ||
      restaurant.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  filteredRestaurants.forEach(restaurant => {
      const li = document.createElement('li');
      li.textContent = `${restaurant.name} - ${restaurant.location}`;
      results.appendChild(li);
  });
}
