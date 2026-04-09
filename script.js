// Menunggu DOM (HTML) selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // Ambil elemen hamburger dan menu navigasi
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Tambahkan event listener 'click' pada hamburger
    hamburger.addEventListener('click', function() {
        // Toggle class 'active' pada navLinks
        // CSS akan menangani animasi buka/tutup
        navLinks.classList.toggle('active');
    });

});