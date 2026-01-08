document.addEventListener('DOMContentLoaded', () => {
    console.log('Galería cargada exitosamente');

    // Efecto simple al hacer click en imagenes
    const images = document.querySelectorAll('.photo-card img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            if (img.requestFullscreen) {
                img.requestFullscreen();
            } else if (img.webkitRequestFullscreen) { /* Safari */
                img.webkitRequestFullscreen();
            } else if (img.msRequestFullscreen) { /* IE11 */
                img.msRequestFullscreen();
            }
        });
    });
});
