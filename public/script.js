document.addEventListener('DOMContentLoaded', () => {
    loadSpaces();
    updateCounters();
    setupFAQ();
    setupSearch();
  });
  
  function validateForm(event) {
    event.preventDefault();
  
    const type = document.getElementById('type').value;
    const term = document.getElementById('term').value;
    const date = document.getElementById('date').value;
    const duration = document.getElementById('duration').value;
    const spaceType = document.getElementById('space-type').value;
    const city = document.getElementById('city').value;
  
    if (!type || !term || !date || !duration || !spaceType || !city) {
      alert('Please fill in all the fields');
      return;
    }
  
    // Perform search functionality or form submission
    // Implement according to your application logic
  }
  
  function submitSpace(event) {
    event.preventDefault();
  
    const spaceName = document.getElementById('space-name').value;
    const spaceType = document.getElementById('space-type').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;
    const price = document.getElementById('price').value;
  
    if (!spaceName || !spaceType || !description || !location || !price) {
      alert('Please fill in all the fields');
      return;
    }
  
    // Handle space submission (example: logging and alert)
    console.log('Space submitted:', {
      spaceName,
      spaceType,
      description,
      location,
      price,
    });
  
    alert('Space listed successfully!');
    document.getElementById('list-space-form').reset();
  }
  
  function loadSpaces() {
    // Example fetch to load spaces from API
    fetch('/api/spaces')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('workspace-categories');
        container.innerHTML = '';
        data.forEach(space => {
          const spaceElement = document.createElement('div');
          spaceElement.classList.add('workspace-category');
          spaceElement.innerHTML = `
            <img src="${space.image}" alt="${space.name}">
            <h3>${space.name}</h3>
            <p>${space.description}</p>
            <button>Book Now</button>
          `;
          container.appendChild(spaceElement);
        });
      })
      .catch(error => console.error('Error loading spaces:', error));
  }
  
  function updateCounters() {
    // Example fetch to update counters from API
    fetch('/api/counters')
      .then(response => response.json())
      .then(data => {
        document.getElementById('spaces-counter').textContent = data.spaces;
        document.getElementById('countries-counter').textContent = data.countries;
        document.getElementById('users-counter').textContent = data.users;
      })
      .catch(error => console.error('Error updating counters:', error));
  }
  
  function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        const answer = item.querySelector('.answer');
        answer.classList.toggle('visible');
      });
    });
  }
  
  function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.querySelector('.search-icon button');
  
    searchButton.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `/spaces.html?search=${encodeURIComponent(query)}`;
      }
    });
  }
    