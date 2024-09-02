// script.js

// Ejemplo: Mostrar una alerta al enviar el formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
            form.reset();
        });
    }
});
