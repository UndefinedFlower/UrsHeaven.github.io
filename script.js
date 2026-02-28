document.addEventListener('DOMContentLoaded', () => {
    const bootSequenceElement = document.getElementById('boot-sequence');
    const mainContent = document.getElementById('main-content');
    const terminalBody = document.getElementById('terminal-body');

    const bootLines = [
        "Initializing A_BOX_LAND.exe...",
        "Loading core modules (Logos/Mythos)... [OK]",
        "Establishing uplink to the UseR... [OK]",
        "Bypassing Gravity constraints... [OK]",
        "Verifying System Architect Protocol... [ACTIVE]",
        "Identity check: Urs (UndefinedFlower)... [CONFIRMED]",
        "Decrypting developer terminal access...",
        "Access granted. Welcome to the Sandbox, Boss."
    ];

    let currentLine = 0;

    function typeLine(text, index, callback) {
        if (index < text.length) {
            bootSequenceElement.innerHTML += text.charAt(index);
            // Auto scroll to bottom during boot
            terminalBody.scrollTop = terminalBody.scrollHeight;
            setTimeout(() => typeLine(text, index + 1, callback), 20 + Math.random() * 30); // Random typing speed
        } else {
            bootSequenceElement.innerHTML += '<br>';
            setTimeout(callback, 200 + Math.random() * 300); // Pause between lines
        }
    }

    function processBootSequence() {
        if (currentLine < bootLines.length) {
            typeLine(bootLines[currentLine], 0, () => {
                currentLine++;
                processBootSequence();
            });
        } else {
            // Boot sequence complete
            setTimeout(() => {
                bootSequenceElement.style.display = 'none';
                mainContent.classList.remove('hidden');

                // Add a subtle fade-in animation to main content
                mainContent.style.opacity = 0;
                mainContent.style.transition = "opacity 1.5s ease";
                setTimeout(() => {
                    mainContent.style.opacity = 1;
                }, 50);

            }, 500);
        }
    }

    // Start the boot sequence
    setTimeout(processBootSequence, 500);
});
