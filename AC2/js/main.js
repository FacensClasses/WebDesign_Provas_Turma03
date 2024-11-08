function updateDeleteAllButtonVisibility() {
    const deleteAllButton = document.getElementById('deleteAll');
    const cardContainer = document.getElementById('cardContainer');
    if (cardContainer.children.length > 0) {
        deleteAllButton.style.display = 'block';
    } else {
        deleteAllButton.style.display = 'none';
    }
}

document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const cardContainer = document.getElementById('cardContainer');
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');
    const randomImageUrl = `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`;
    card.innerHTML = `
        <div class="card">
            <img src="${randomImageUrl}" class="card-img-top" alt="Imagem aleatória">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <button class="btn btn-danger delete-btn">Apagar</button>
            </div>
        </div>
    `;
    cardContainer.appendChild(card);
    document.getElementById('title').value = '';
    updateDeleteAllButtonVisibility();
    card.querySelector('.delete-btn').addEventListener('click', function() {
        card.remove();
        updateDeleteAllButtonVisibility();
    });
});

document.getElementById('deleteAll').addEventListener('click', function() {
    
    document.getElementById('cardContainer').innerHTML = '';
    updateDeleteAllButtonVisibility();
});

updateDeleteAllButtonVisibility();