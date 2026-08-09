document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect
    const typingText = document.getElementById('typing-text');
    const words = ["Student At Bahir Dar University", "Full Stack Developer", "UI Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 100;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 200;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();

    // Sidebar Toggle
    const sidebar = document.getElementById('customization-sidebar');
    const settingsBtn = document.getElementById('settings-toggle');
    const closeBtn = document.getElementById('sidebar-close');

    settingsBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksList = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('open');
            menuToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinksList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksList.classList.remove('open');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Theme Switching
    const themeButtons = document.querySelectorAll('.option-btn[data-theme]');
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');

            themeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (theme === 'dark') {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
            }
        });
    });

    // Close sidebar on click outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !settingsBtn.contains(e.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    // Navigation Active State on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(li => {
            li.classList.remove('active');
            if (li.querySelector('a').getAttribute('href').substring(1) === current) {
                li.classList.add('active');
            }
        });
    });

    // Selection Lists (Environment, etc.)
    const selectionItems = document.querySelectorAll('.selection-item');
    selectionItems.forEach(item => {
        item.addEventListener('click', () => {
            const group = item.parentElement;
            group.querySelectorAll('.selection-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // Logic for different environments can be added here
        });
    });

    // Reset Button
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            // Reset to defaults
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            
            themeButtons.forEach(b => {
                b.classList.remove('active');
                if (b.dataset.theme === 'light') b.classList.add('active');
            });

            selectionItems.forEach(i => {
                i.classList.remove('active');
                if (i.dataset.env === 'constellation') i.classList.add('active');
            });
        });
    }

    // Reveal on Scroll
    const revealSections = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    revealSections.forEach(section => {
        revealObserver.observe(section);
    });
});
