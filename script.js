const header = document.querySelector("[data-site-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileNavigation = document.querySelector(
    "[data-mobile-navigation]"
);

const mobileLinks =
    mobileNavigation?.querySelectorAll("a") ?? [];


/* =========================================
   HEADER SCROLL STATE
========================================= */

const setHeaderState = () => {
    if (!header) return;

    header.classList.toggle(
        "scrolled",
        window.scrollY > 20
    );
};


setHeaderState();


window.addEventListener(
    "scroll",
    setHeaderState,
    {
        passive: true
    }
);



/* =========================================
   MOBILE MENU
========================================= */

const closeMenu = () => {
    if (
        !menuButton ||
        !mobileNavigation ||
        !header
    ) {
        return;
    }


    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );


    menuButton.setAttribute(
        "aria-label",
        "Open navigation"
    );


    mobileNavigation.hidden = true;


    header.classList.remove(
        "menu-open"
    );


    document.body.classList.remove(
        "menu-open"
    );
};



const openMenu = () => {
    if (
        !menuButton ||
        !mobileNavigation ||
        !header
    ) {
        return;
    }


    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );


    menuButton.setAttribute(
        "aria-label",
        "Close navigation"
    );


    mobileNavigation.hidden = false;


    header.classList.add(
        "menu-open"
    );


    document.body.classList.add(
        "menu-open"
    );
};



menuButton?.addEventListener(
    "click",
    () => {

        const isOpen =
            menuButton.getAttribute(
                "aria-expanded"
            ) === "true";


        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    }
);



mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        closeMenu
    );

});



window.addEventListener(
    "resize",
    () => {

        if (window.innerWidth > 900) {
            closeMenu();
        }

    }
);



window.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    }
);



/* =========================================
   SHOWER RITUAL FINDER
========================================= */

const ritualData = {

    refresh: {
        name: "VITALITY BAR™",

        copy:
            "Fresh, green and revitalizing. " +
            "A balanced morning reset powered " +
            "by Organic Spirulina Extract.",

        href: "vitality.html",
        image: "photos/soap1.png"
    },


    brighten: {
        name: "GLOW BAR™",

        copy:
            "A golden daily ritual for " +
            "dull-looking skin, powered by " +
            "Organic Turmeric Extract for a " +
            "radiant, revived feel.",

        href: "glow.html",
        image: "photos/soap2.png"
    },


    purify: {
        name: "DETOX BAR™",

        copy:
            "A deep, refreshing cleanse with " +
            "Activated Charcoal for skin that " +
            "feels fresh, purified and reset.",

        href: "detox.html",
        image: "photos/soap4.png"
    },


    smooth: {
        name: "VELVET BAR™",

        copy:
            "A gentle polishing ritual with " +
            "Blackberry Extract and Pumice " +
            "for skin that feels smooth and renewed.",

        href: "velvet.html",
        image: "photos/soap3.png"
    },


    comfort: {
        name: "MOISTURE BAR™",

        copy:
            "A soft, soothing cleanse with Oat Milk " +
            "for a comfortable, nourished finish " +
            "and an easy evening ritual.",

        href: "moisture.html",
        image: "photos/soap5.png"
    }

};



const ritualButtons =
    document.querySelectorAll(
        "[data-ritual]"
    );


const ritualName =
    document.querySelector(
        "[data-ritual-name]"
    );


const ritualCopy =
    document.querySelector(
        "[data-ritual-copy]"
    );


const ritualLink =
    document.querySelector(
        "[data-ritual-link]"
    );



ritualButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const ritual =
                ritualData[
                    button.dataset.ritual
                ];


            if (
                !ritual ||
                !ritualName ||
                !ritualCopy ||
                !ritualLink
            ) {
                return;
            }


            ritualButtons.forEach(
                (item) => {
                    item.classList.remove(
                        "is-active"
                    );
                    item.setAttribute("aria-pressed", "false");
                }
            );


            button.classList.add(
                "is-active"
            );


            button.setAttribute("aria-pressed", "true");
            const ritualImage = document.querySelector("[data-ritual-image]");
            if (ritualImage) { ritualImage.src = ritual.image; ritualImage.alt = ritual.name; }

            ritualName.textContent =
                ritual.name;


            ritualCopy.textContent =
                ritual.copy;


            ritualLink.href =
                ritual.href;

        }
    );

});



/* =========================================
   COPYRIGHT YEAR
========================================= */

const year =
    document.querySelector(
        "[data-year]"
    );


if (year) {
    year.textContent =
        new Date().getFullYear();
}
/* V2 community, approved testimonials and form integrations. */
const config = window.SABAN_CONFIG || {};
const communityDialog = document.querySelector('.community-dialog');
let communityTrigger = null;
function showCommunity(trigger) {
    if (!communityDialog || communityDialog.open) return;
    communityTrigger = trigger || document.activeElement;
    communityDialog.showModal();
}
function rememberCommunity() {
    try { sessionStorage.setItem('saban-community-seen', '1'); } catch (_) {}
}
document.querySelectorAll('[data-open-community]').forEach(button => {
    button.addEventListener('click', () => showCommunity(button));
});
communityDialog?.querySelector('.dialog-close')?.addEventListener('click', () => communityDialog.close());
communityDialog?.addEventListener('click', event => {
    if (event.target !== communityDialog) return;
    const rect = communityDialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) communityDialog.close();
});
communityDialog?.addEventListener('close', () => {
    rememberCommunity();
    if (communityTrigger && document.contains(communityTrigger)) communityTrigger.focus();
});
let hasSeenCommunity = false;
try { hasSeenCommunity = sessionStorage.getItem('saban-community-seen') === '1'; } catch (_) {}
if (!hasSeenCommunity && document.querySelector('.hero')) {
    window.setTimeout(() => {
        if (document.visibilityState === 'visible' && !document.body.classList.contains('menu-open')) showCommunity();
    }, 4500);
}
async function sendForm(form, endpoint, status, success) {
    if (!form.reportValidity()) return;
    if (!endpoint) {
        status.textContent = 'This form is not accepting submissions yet. Please check back soon.';
        return;
    }
    const submit = form.querySelector('[type="submit"]');
    submit.disabled = true;
    status.textContent = 'Sending…';
    try {
        const response = await fetch(endpoint, {
            method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(Object.fromEntries(new FormData(form)))
        });
        if (!response.ok) throw new Error('Submission failed');
        status.textContent = success;
        form.reset();
    } catch (_) {
        status.textContent = 'We couldn’t send that. Please try again in a moment.';
    } finally { submit.disabled = false; }
}
document.querySelector('[data-newsletter]')?.addEventListener('submit', event => {
    event.preventDefault();
    sendForm(event.currentTarget, config.newsletterEndpoint,
        event.currentTarget.querySelector('[data-newsletter-status]'),
        'Thank you for joining the SĀBAN community.');
});
document.querySelector('[data-contact-form]')?.addEventListener('submit', event => {
    event.preventDefault();
    sendForm(event.currentTarget, config.contactEndpoint,
        event.currentTarget.querySelector('[data-contact-status]'),
        'Thank you. Your message has been sent.');
});
const reviewContainer = document.querySelector('[data-testimonials]');
const reviews = Array.isArray(config.testimonials) ? config.testimonials.filter(r => r.quote && r.author) : [];
if (reviewContainer && reviews.length) {
    reviews.forEach(review => {
        const quote = document.createElement('blockquote');
        const text = document.createElement('p');
        text.textContent = review.quote;
        const author = document.createElement('cite');
        author.textContent = review.author;
        quote.append(text, author); reviewContainer.append(quote);
    });
    document.querySelector('[data-review-invitation]')?.setAttribute('hidden', '');
}
document.querySelectorAll('[data-payment-methods]').forEach(el => {
    if (Array.isArray(config.paymentMethods) && config.paymentMethods.length) {
        el.textContent = config.paymentMethods.join(' · '); el.hidden = false;
    }
});
