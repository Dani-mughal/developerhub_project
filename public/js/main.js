document.addEventListener('DOMContentLoaded', () => {
    console.log('Luxe Store loaded');

    // Add subtle hover animations to cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});
