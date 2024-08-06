(function () {
    // "Animate" the image on the home page
    const home_image = document.getElementById("cangjie_home");
    if (!home_image) {
        return;
    }

    // Preload "cangjie-with-codes.png", presuming the default image is "cangjie-without-codes.png"
    const image = new Image();
    image.src = home_image.replace("cangjie-without-codes.png", "cangjie-with-codes.png");

    home_image.addEventListener("mouseover", function(event) {
        event.target.src.replace("cangjie-without-codes.png", "cangjie-with-codes.png");
    });
    home_image.addEventListener("mouseout", function(event) {
        event.target.src.replace("cangjie-with-codes.png", "cangjie-without-codes.png");
    });
})();
