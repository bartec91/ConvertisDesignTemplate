(function () {
    var header = document.querySelector("header"),
    video = document.querySelector(".embed-responsive"),
    content = document.querySelector(".content"),
    navSticky = document.querySelector(".header__sticky"),
    videoHeight = video.offsetHeight,
    headerHeight = header.offsetHeight;

    if (window.innerWidth <= 992) {
        content.style.marginTop = headerHeight + videoHeight + "px";
    }

    window.addEventListener("scroll", function (e) {
        if (document.documentElement.scrollTop >= 80) {
            navSticky.classList.add("header__stuck");
        } else {
            navSticky.classList.remove("header__stuck");
        }
    }, false);
})();