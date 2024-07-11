document.querySelectorAll('.main-menu button').forEach(button => {
    button.addEventListener('click', (event) => {
        const targetPage = event.target.getAttribute('data-target');
        window.location.href = targetPage;
    });
});
