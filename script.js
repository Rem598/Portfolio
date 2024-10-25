document.addEventListener("DOMContentLoaded", function() {
    const circleContainer = document.createElement('div');
    circleContainer.classList.add('circle-container');
    document.body.appendChild(circleContainer);

    // Function to create and animate circles
    function createCircle() {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        // Random size, position, and delay
        const size = Math.random() * 50 + 30; // Random size between 30px and 80px
        const posX = Math.random() * 100; // Random horizontal position
        const posY = Math.random() * 100; // Random vertical position
        const delay = Math.random() * 5; // Random delay to stagger animations

        // Apply styles
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${posX}%`;
        circle.style.top = `${posY}%`;
        circle.style.animationDelay = `${delay}s`;

        // Append to container
        circleContainer.appendChild(circle);

        // Remove circle after animation ends to avoid buildup
        circle.addEventListener("animationend", () => {
            circle.remove();
        });
    }

    // Continuously create circles
    setInterval(createCircle, 500); // Adjust interval as needed
});
