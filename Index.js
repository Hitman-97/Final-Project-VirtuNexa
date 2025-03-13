document.getElementById('searchButton').addEventListener('click', function () {
  const query = document.getElementById('search').value.trim();
  if (query === "") {
    alert("Please enter a search term.");
    return;
  }

  fetchDeals(query);
});

function fetchDeals(query) {
  document.getElementById('dealResults').innerHTML = "<p>Loading...</p>";
  // Simulate API call with setTimeout (replace with real API call)
  setTimeout(() => {
    displayDeals(query); 
  }, 1000);
}

function displayDeals(query) {
  const deals = [
    { title: "50% Off at Store X", description: "50% off on all items.", location: "Local Store" },
    { title: "Free Coffee at Cafe Y", description: "Get a free coffee with any purchase.", location: "Cafe Y" }
  ];

  const resultsContainer = document.getElementById('dealResults');
  resultsContainer.innerHTML = ''; // Clear loading text
  
  deals.forEach(deal => {
    const dealCard = document.createElement('div');
    dealCard.className = 'bg-white p-4 rounded shadow';
    dealCard.innerHTML = `
      <h3 class="font-bold">${deal.title}</h3>
      <p>${deal.description}</p>
      <p><strong>Location:</strong> ${deal.location}</p>
    `;
    resultsContainer.appendChild(dealCard);
  });
}
