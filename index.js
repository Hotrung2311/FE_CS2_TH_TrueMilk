$('.slider1').owlCarousel({
    loop: false,
    margin: 70,
    dots: false,
    mouseDrag: false,
    nav: true,
    navText: ["<img style='transform: rotate(180deg); width: 14px; height: 20px;' src='https://img.icons8.com/ios-filled/60/000000/play--v1.png'/>", "<img style='width: 14px; height: 20px;' src='https://img.icons8.com/ios-filled/60/000000/play--v1.png'/>"],
    // navText: ["bach", "bach"],
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 5
        },
        800: {
            items: 5
        },
        1000: {
            items: 9
        }
    }
})

$('.slider2').owlCarousel({
    loop: true,
    autoplay: false,
    // margin: 20,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        800: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


// window.onscroll = function() { myFunction() };

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }