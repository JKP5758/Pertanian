document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container6');
    const items = container.innerHTML; // Simpan konten asli
    container.innerHTML += items; // Duplikasikan konten
});




document.addEventListener('DOMContentLoaded', function() {
    // Pilih semua link yang mengarah ke elemen dengan id yang diawali dengan "#content" atau "#unit"
    document.querySelectorAll('a[href^="#content"], a[href^="#unit"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah aksi default dari anchor
            
            const targetId = this.getAttribute('href'); // Mendapatkan id target
            const targetElement = document.querySelector(targetId); // Mendapatkan elemen target
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Scroll ke elemen target dengan offset 100px ke atas
                    behavior: 'smooth' // Memastikan scroll tetap smooth
                });
            }
        });
    });
});

