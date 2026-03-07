document.addEventListener('DOMContentLoaded', () => {
    const orbs = document.querySelectorAll('.star-card-orb');

    // Intro Animation: Bloom from center
    orbs.forEach((orb, index) => {
        const originalTransform = orb.style.transform;
        orb.style.opacity = '0';
        orb.style.scale = '0';

        setTimeout(() => {
            orb.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
            orb.style.opacity = '1';
            orb.style.scale = '1';
        }, 200 + (index * 100));
    });

    // Hidden Pilot Trigger (Double Secret)
    const trigger = document.getElementById('pilot-trigger');
    let tapCount = 0;

    trigger.addEventListener('click', () => {
        tapCount++;
        if (tapCount >= 3) {
            const core = document.querySelector('.star-emblem-large');
            core.style.transition = 'all 1s ease';
            core.style.filter = 'drop-shadow(0 0 60px #ff0000)';
            core.style.background = '#ff0000';

            const msg = document.querySelector('.intercept-text');
            msg.style.color = '#ff4d4d';
            msg.innerText = "COMMANDER IDENTIFIED. SYSTEMS ALIGNED.";

            tapCount = 0;
        }
    });

    // The Absolute Core Reaction
    const centerCore = document.querySelector('.center-core');
    centerCore.addEventListener('mouseenter', () => {
        orbs.forEach(orb => {
            orb.style.boxShadow = '0 0 40px var(--gold-glow)';
            orb.style.scale = '1.1';
        });
    });

    centerCore.addEventListener('mouseleave', () => {
        orbs.forEach(orb => {
            orb.style.boxShadow = '';
            orb.style.scale = '1';
        });
    });

    // Subtle Float Animation
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        document.querySelector('.stars-orbit').style.transform = `translate(${x}px, ${y}px)`;
    });
});
