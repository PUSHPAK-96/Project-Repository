document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');
    const links = dropdown.querySelectorAll('a');
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');

    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && !dropbtn.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

    dropbtn.addEventListener('click', function() {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            dropbtn.textContent = this.textContent;
            searchInput.placeholder = Search in ${this.textContent}...;
            searchInput.value = this.textContent;  
            dropdown.style.display = 'none';
        });
    });

    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', function() {
        const query = document.querySelector('.search-input').value;
        const category = dropbtn.textContent.toLowerCase().replace(' ', '-');
        alert(Search query: ${query} | Category: ${category});
       
    });

    searchInput.addEventListener('focus', function() {
        searchContainer.classList.remove('collapsed');
    });

    searchInput.addEventListener('blur', function() {
        if (searchInput.value.trim() === '') {
            searchContainer.classList.add('collapsed');
        }
    });

    
    searchContainer.classList.add('collapsed');
});