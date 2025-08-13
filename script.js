document.addEventListener('DOMContentLoaded', () => {
    const entrancePuzzle = document.getElementById('entrance-puzzle');
    const speakeasyLounge = document.getElementById('speakeasy-lounge');

    // Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A
    const konamiCode = [
        'arrowup', 'arrowup', 'arrowdown', 'arrowdown',
        'arrowleft', 'arrowright', 'arrowleft', 'arrowright',
        'b', 'a'
    ];

    let userInput = [];

    const unlockSpeakeasy = () => {
        // Add a fade-out effect for the entrance
        entrancePuzzle.style.transition = 'opacity 0.5s ease-out';
        entrancePuzzle.style.opacity = '0';

        setTimeout(() => {
            entrancePuzzle.classList.add('hidden');
            speakeasyLounge.classList.remove('hidden');
            // Add a fade-in effect for the lounge
            speakeasyLounge.style.opacity = '0';
            requestAnimationFrame(() => {
                speakeasyLounge.style.transition = 'opacity 0.5s ease-in';
                speakeasyLounge.style.opacity = '1';
            });
            console.log('Boo-yah! Portal unlocked'); // As per PRD language guidelines
        }, 500); // Match timeout to transition duration
    };

    document.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        userInput.push(key);

        // Trim the array to the length of the konami code so it doesn't grow indefinitely
        if (userInput.length > konamiCode.length) {
            userInput.shift();
        }

        // Check if the last keys match the konami code
        if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
            unlockSpeakeasy();
            userInput = []; // Reset for good measure
        }
    });
});
