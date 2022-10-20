const body = document.getElementsByTagName("body");
const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const lightDarkMode = document.getElementById("mode-btn");

// lightDarkMode.addEventListener("click",() => {
//     if(header.classList.contains("light-mode")){
//         header.classList.remove("light-mode")
//     } else {
//         header.classList.add("dark-mode")
//     }
// })

// lightDarkMode.addEventListener("click", () => {
//     header.classList.toggle("dark-mode");
//     main.classList.toggle("dark-mode-main");
//     footer.classList.toggle("dark-mode-footer");

//     if (header.classList.contains("dark-mode")){
//         lightDarkMode.innerHTML =
//         '<i class="mode-button-icon fa-solid fa-lightbulb header-icons"></i>Modo Oscuro'
//     } else {
//         '<i class="mode-button-icon fa-solid fa-lightbulb header-icons"></i>Modo Claro'
//     }
// });

lightDarkMode.addEventListener("click", () => {
    header.classList.toggle("dark-mode");
    main.classList.toggle("dark-mode-main");
    footer.classList.toggle("dark-mode-footer");
    if (header.classList.contains("dark-mode")) {
      lightDarkMode.innerHTML =
        '<i class="mode-button-icon fa-solid fa-lightbulb header-icons"></i>Modo Claro';
    } else {
      lightDarkMode.innerHTML =
        '<i class="mode-button-icon fa-solid fa-lightbulb header-icons"></i>Modo Oscuro';
    }
  });

