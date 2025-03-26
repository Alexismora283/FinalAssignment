const jsonURL = 'https://alexismora283.github.io/json-data-books/data.json';
const contentDiv = document.getElementById('content');

fetch(jsonURL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json();
  })
  .then(data => {
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <h2>${item.title}</h2>
        <p><strong>Author:</strong> ${item.author}</p>
        <p><strong>Year:</strong> ${item.year}</p>
      `;

      contentDiv.appendChild(card);
    });
  })
  .catch(error => {
    contentDiv.innerHTML = `<p>Error loading data: ${error.message}</p>`;
  });
