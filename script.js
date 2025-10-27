document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    // 1. Fungsi untuk Toggle Mobile Navigation
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
        // Mengubah icon burger menjadi close (X)
        const icon = menuToggle.querySelector('i');
        if (mobileNav.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 2. Menutup Navigasi Mobile saat link diklik (untuk navigasi ke section)
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('open');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });

    // 3. Menambahkan fungsi sederhana untuk tombol Add to Cart (opsional)
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');
    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Dalam implementasi nyata, ini akan menambahkan item ke keranjang belanja
            alert('Item added to cart! (Functionality is simulated)');
        });
    });
    
});