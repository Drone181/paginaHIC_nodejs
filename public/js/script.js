const navToggle = document.querySelector(".nav-menu_toggle"),
      navMenu = document.querySelector(".nav_menu"),
      navClose = document.querySelector(".nav-menu_close");


if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

// // HEADER RIGHT

// const rightHeader = document.querySelector(".right_header-toggle"),
//       headerRightMenu = document.querySelector(".header-right"),
//       rightClose = document.querySelector(".header-right_close");

// if (rightHeader) {
//     rightHeader.addEventListener("click", () => {
//         headerRightMenu.classList.add("show-right_menu")
//     })
// }

// if (rightClose) {
//     rightClose.addEventListener("click", () => {
//         headerRightMenu.classList.remove("show-right_menu")
//     })
// }

//     // SLIDER

// var swiper = new Swiper(".breaking_container", {
//     centeredSlide: true,
//     cssMode: true,
//     autoplay: {
//         delay: 4500,
//         disableOnInteraction: false,
//     },
//     loop: true,
//     slidesPerView: 1,
//     breakpoints: {
//         640: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 0,
//         },
//     }
// });

    // PAGINATION

// let ul = document.querySelector(".ul");
// let prev = document.querySelector(".prev");
// let next = document.querySelector(".next");
// let current_page = 1;
// let total_page = 10;
// let active_page = "";

// create_pages(current_page);

// function create_pages(current_page) {
//     ul.innerHTML = "";

//     let before_page = current_page - 2;
//     let after_page = current_page + 2;

//     if(current_page == 2) {
//         before_page = current_page - 1;
//     }
//     if(current_page == 1) {
//         before_page = current_page;
//     }

//     if(current_page == total_page - 1) {
//         after_page = current_page + 1;
//     }
//     if(current_page == total_page) {
//         after_page = current_page;
//     }

//     for (let i = before_page; i <= after_page; i++) {
//         if (current_page == i) {
//             active_page = "active_page";
//         } else {
//             active_page = "";
//         }
//         ul.innerHTML += '<li onclick="create_pages('+ i +')"><a href="#" class="page_number '+ active_page +'">'+ i +'</a></li>';

//     }

//     prev.onclick = function () {
//         current_page--;
//         create_pages(current_page);
//     }
//     if(current_page <= 1) {
//         prev.style.display = "none";
//     } else {
//         prev.style.display = "block"
//     }

//     next.onclick = function () {
//         current_page++;
//         create_pages(current_page);
//     }
//     if(current_page >= total_page) {
//         next.style.display = "none";
//     } else {
//         next.style.display = "block"
//     }
// }

let ul = document.querySelector(".ul");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let current_page = 1;
let total_page = 10;
let active_page = "";

create_pages(current_page);

function create_pages(current_page) {
    ul.innerHTML = "";

    // Cambiar el rango para mostrar solo 3 números
    let before_page = current_page - 1; // Muestra un número antes
    let after_page = current_page + 1;   // Muestra un número después

    // Ajustar límites cuando estamos cerca de los extremos
    if(current_page == 1) {
        after_page = Math.min(total_page, current_page + 2); // Muestra dos después si es la primera página
    }
    
    if(current_page == total_page) {
        before_page = Math.max(1, current_page - 2); // Muestra dos antes si es la última página
    }

    // Asegurarse de que el rango no exceda los límites
    for (let i = Math.max(1, before_page); i <= Math.min(total_page, after_page); i++) {
        if (current_page == i) {
            active_page = "active_page";
        } else {
            active_page = "";
        }
        ul.innerHTML += '<li onclick="create_pages('+ i +')"><a href="#" class="page_number '+ active_page +'">'+ i +'</a></li>';
    }

    prev.onclick = function () {
        if (current_page > 1) {
            current_page--;
            create_pages(current_page);
        }
    }
    
    prev.style.display = current_page <= 1 ? "none" : "block";

    next.onclick = function () {
        if (current_page < total_page) {
            current_page++;
            create_pages(current_page);
        }
    }
    
    next.style.display = current_page >= total_page ? "none" : "block";
}

    // BACK TOP

const backTopbtn = document.querySelector(".back-top-btn");

const showElemOnScroll = function() {
    if (window.scrollY > 150) {
        backTopbtn.classList.add("active");
    } else {
        backTopbtn.classList.remove("active");
    }
}

window.addEventListener("scroll", showElemOnScroll);






