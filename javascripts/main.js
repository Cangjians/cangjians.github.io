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
