// Hamburger Menu Toggle
document.getElementById('hamburgerBtn').addEventListener('click', function() {
    document.getElementById('primaryNav').classList.toggle('open');
    this.innerHTML = this.innerHTML === '☰' ? '✕' : '☰';
});

// Copyright Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Last Modified Date
document.getElementById('lastModified').textContent = document.lastModified;
