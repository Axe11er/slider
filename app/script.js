window.addEventListener("DOMContentLoaded", init);

let container,
    images,
    blackpanel,
    position = 0;

function init() {
    container = document.getElementById("container");
    container.style.left = "0";

    images = document.getElementsByClassName("my-image");

    blackpanel = document.querySelector(".blackpanel");

    let counter = 0;

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function () {
            blackpanel.style.display = "flex";

            let largeImage = document.createElement("img");
            largeImage.src = this.src;
            largeImage.style.margin = "auto";
            largeImage.style.width = "80vw";
            largeImage.style.zIndex = 100;
            largeImage.style.borderRadius = "5px";

            blackpanel.appendChild(largeImage);
        });
        blackpanel.addEventListener("click", function () {
            this.innerHTML = "";
            this.style.display = "none";
        });
    }

    setTimeout(function timeOut() {

        if (counter < images.length - 1) {
            let currentPosition = container.style.left;
            container.style.left = (parseInt(currentPosition) - 1010) + "px";
            counter++;
            setTimeout(timeOut, 5000);


        } else {
            container.style.left = "0";
            counter = 0;
            setTimeout(timeOut, 5000);
        }
    }, 1000);

}