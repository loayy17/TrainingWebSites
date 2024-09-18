document.addEventListener('DOMContentLoaded', function() {
    const icon = document.getElementById('icon');
    const aside = document.getElementById('aside');
    const mainContainer = document.querySelector('.main-container');
    const cards = document.querySelectorAll(".card");
    const searchInput = document.getElementById("search");
    
    icon.addEventListener('click', function() {
        if (aside.style.display === 'block') {
            aside.style.display = 'none';
            icon.style.backgroundColor = 'white';
            mainContainer.classList.remove('shifted'); 
        } else {
            aside.style.display = 'block';
            icon.style.backgroundColor = '#6f6f6f';
            mainContainer.classList.add('shifted'); 
            aside.style.transition("margin-left 0.5 ease")
        }
    });
    
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const cardTitle = card.querySelector("h1").textContent.toLowerCase();
            if (cardTitle.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
