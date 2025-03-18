// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active link based on the section in view
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav a');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");

hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});

document.addEventListener('click', function (event) {
    if (!hamburgerBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});





// services logic
const services = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
        title: "Web Development",
        description:
            "We build high-performance, responsive websites with modern technologies, ensuring a seamless user experience and robust security.",
        li1: "Custom Web Development",
        li2: "E-Commerce Development",
        li3: "WordPress Development",
        li4: "Shopify Store Setup",
        li5: "Website Redesign",
        link: "/services/web-development",
    },

    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone text-indigo-600"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
        title: "Mobile App Development",
        description:
            "We design and develop custom mobile applications for iOS and Android, delivering intuitive, high-performance experiences.",
        li1: "Custom Mobile App Development",
        li2: "Cross-Platform Development",
        li3: "App Maintenance & Updates",
        li4: "Mobile App UI/UX Design",
        li5: "App Optimization",
        link: "/services/mobile-apps",
    },

    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-megaphone h-12 w-12 text-indigo-600 mb-4">
        <path d="m3 11 18-5v12L3 14v-3z"></path>
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
      </svg>`,
        title: "Digital Marketing & SEO",
        description:
            "Our digital marketing and SEO strategies help businesses increase their online visibility, attract targeted traffic, and boost conversions.",
        li1: "On-Page & Off-Page SEO",
        li2: "Local SEO",
        li3: "PPC Management (Google Ads)",
        li4: "Content Marketing & Strategy",
        li5: "SEO Audits",
        link: "/services/digital-marketing",
    },

    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wand-sparkles text-indigo-600"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>`,
        title: "UI/UX Design",
        description:
            "We create visually appealing, intuitive, and user-friendly UI/UX designs that enhance user engagement and improve usability.",
        li1: "Wireframing & Prototyping",
        li2: "User Research & Testing",
        li3: "Interactive UI Designs",
        li4: "Mobile & Web App Design",
        li5: "Branding & Visual Identity",
        link: "/services/ui-ux-design",
    },
];

const modal = document.getElementById("portfolioModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalIcon = document.getElementById("modalIcon");
const modalFeatures = document.getElementById("modalFeatures");
const closeModalButton = document.getElementById("closeModal");

function openServiceModal(service) {
    modalTitle.textContent = service.title;
    modalDescription.textContent = service.description;
    modalIcon.innerHTML = service.icon;

    modalFeatures.innerHTML = "";
    const features = [service.li1, service.li2, service.li3, service.li4, service.li5];
    features.forEach(feature => {
        const listItem = document.createElement("li");
        listItem.textContent = feature;
        modalFeatures.appendChild(listItem);
    });

    modal.classList.remove("hidden");
}

function closeServiceModal() {
    modal.classList.add("hidden");
}

closeModalButton.addEventListener("click", closeServiceModal);

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeServiceModal();
    }
});

function renderServiceCards() {
    const servicesGrid = document.getElementById("servicesGrid");

    services.forEach(service => {
        const serviceCard = document.createElement("div");
        serviceCard.classList.add("p-6", "rounded-xl", "bg-white", "border", "border-gray-200", "hover:border-indigo-600", "hover:shadow-xl", "transition", "duration-300", "cursor-pointer", "shadow-md");

        serviceCard.innerHTML = `
            <div class="text-center mb-4">${service.icon}</div>
            <h3 class="text-xl font-semibold font-roboto text-gray-900 mb-2 ">${service.title}</h3>
            <p class="text-gray-600">${service.description}...</p>
        `;

        // Add click event listener to open modal
        serviceCard.addEventListener("click", () => openServiceModal(service));

        servicesGrid.appendChild(serviceCard);
    });
}

// Render services when the page loads
document.addEventListener("DOMContentLoaded", renderServiceCards);



// cookies handling logic
const cookieStorage = {
    getItem: (item) => {
        try {
            const cookies = document.cookie
                .split('; ')
                .map(cookie => cookie.split('='))
                .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: decodeURIComponent(value) }), {});
            
            return cookies[item] ? JSON.parse(cookies[item]) : null;
        } catch (error) {
            console.error("Error parsing cookies:", error);
            return null;
        }
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${encodeURIComponent(JSON.stringify(value))}; path=/; max-age=31536000; Secure; SameSite=Lax`;
    }
};

const consentPropertyName = 'it_solution_consent';

const shouldShowPopup = () => !cookieStorage.getItem(consentPropertyName);
const saveToStorage = (value) => cookieStorage.setItem(consentPropertyName, value);

window.onload = () => {
    const consentPopup = document.getElementById('consent-popup');
    const manageCookiesBtn = document.getElementById('manage-cookies');
    const acceptAllBtn = document.getElementById('accept-all');
    const rejectNonEssentialBtn = document.getElementById('reject-non-essential');
    const cookieModal = document.getElementById('cookie-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const savePreferencesBtn = document.getElementById('save-preferences');

    const performanceCookies = document.getElementById('performance-cookies');
    const functionalCookies = document.getElementById('functional-cookies');
    const aiCookies = document.getElementById('ai-cookies');
    const advertisingCookies = document.getElementById('advertising-cookies');

    // Load saved cookie preferences
    const savedPreferences = cookieStorage.getItem(consentPropertyName);
    if (savedPreferences) {
        performanceCookies.checked = savedPreferences.performance || false;
        functionalCookies.checked = savedPreferences.functional || false;
        aiCookies.checked = savedPreferences.ai || false;
        advertisingCookies.checked = savedPreferences.advertising || false;
        consentPopup.classList.add('hidden'); // Hide popup if preferences exist
    } else {
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
        }, 500);
    }

    // Accept all cookies
    acceptAllBtn.addEventListener('click', () => {
        saveToStorage({
            performance: true,
            functional: true,
            ai: true,
            advertising: true
        });
        consentPopup.classList.add('hidden');
    });

    // Reject non-essential cookies
    rejectNonEssentialBtn.addEventListener('click', () => {
        saveToStorage({
            performance: false,
            functional: false,
            ai: false,
            advertising: false
        });
        consentPopup.classList.add('hidden');
    });

    // Open manage preferences modal
    manageCookiesBtn.addEventListener('click', () => {
        const savedPreferences = cookieStorage.getItem(consentPropertyName) || {};
        performanceCookies.checked = savedPreferences.performance || false;
        functionalCookies.checked = savedPreferences.functional || false;
        aiCookies.checked = savedPreferences.ai || false;
        advertisingCookies.checked = savedPreferences.advertising || false;
        cookieModal.classList.remove('hidden');
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
        cookieModal.classList.add('hidden');
    });

    // Save user preferences
    savePreferencesBtn.addEventListener('click', () => {
        const preferences = {
            performance: performanceCookies.checked,
            functional: functionalCookies.checked,
            ai: aiCookies.checked,
            advertising: advertisingCookies.checked
        };
        saveToStorage(preferences);
        cookieModal.classList.add('hidden');
        consentPopup.classList.add('hidden');
    });
    
    // ✅ Close modal when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!event.target.closest('#cookie-modal') && event.target !== manageCookiesBtn) {
            cookieModal.classList.add('hidden');
        }
    });
    
    
};
