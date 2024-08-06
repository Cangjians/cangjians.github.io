(function () {
    // Check if the domain is within accepted domain names.
    // If not, redirect to the correct domain with the current path.
    const acceptedDomains = [
        'cangjie.pages.freedesktop.org',
        'localhost', // For local development
    ];

    const currentDomain = window.location.hostname;
    if (acceptedDomains.includes(currentDomain)) {
        return;
    }

    const currentPath = window.location.pathname;
    const newUrl = `https://${acceptedDomains[0]}${currentPath}`;
    window.location.replace(newUrl);
})();

(function () {
    // "Animate" the image on the home page
    const home_image = document.getElementById("cangjie_home");
    if (!home_image) {
        console.log('image not found');
        return;
    }

    const originalSrc = home_image.src;
    const hoverSrc = originalSrc.replace("cangjie-without-codes.png", "cangjie-with-codes.png");
    const image = new Image();
    image.src = hoverSrc; // preload iamge
    image.onload = function() {
        console.debug('hover image loaded');
    };
    home_image.addEventListener("mouseover", function(event) {
        event.target.src = hoverSrc;
    });
    home_image.addEventListener("mouseout", function(event) {
        event.target.src = originalSrc;
    });
})();
