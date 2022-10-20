const lightDarkMode = document.getElementById("mode-btn");
const body = document.getElementsByTagName("body");
const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const sidebar = document.getElementById("sidebar");
const panelSidebar = document.querySelector(".panel-editor-sidebar");
const sidebarImageBtn = document.querySelector(".aside-tool-image-edit-button");
const sidebarTextBtn = document.querySelector(".aside-tool-text-edit-button");
const sidebarTextPanel = document.getElementById("text-edit-panel-section");
const sidebarImagePanel = document.getElementById("image-edit-panel-section");


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
    panelSidebar.classList.toggle("dark-mode-panel");
    if (header.classList.contains("dark-mode")) {
      lightDarkMode.innerHTML =
        '<i class="mode-button-icon fa-solid fa-lightbulb header-icons"></i>Modo Claro';
    } else {
      lightDarkMode.innerHTML =
        '<i class="mode-button-icon fa-solid fa-lightbulb header-icons"></i>Modo Oscuro';
    }
  });

  //intento de ocultar el sidebar
// sidebarImageBtn.addEventListener("click", () => {
//   if (sidebarImagePanel.style.display="inline") {
//     sidebarImagePanel.style.display="none";
//   } else if (sidebarImagePanel.style.display="none") {
//     sidebarImagePanel.style.display="inline";
//   }
// });
// sidebarTextBtn.addEventListener("click", () => {
//   if (sidebarTextPanel.style.display="inline") {
//     sidebarTextPanel.style.display="none";
//   } else if (sidebarTextPanel.style.display="none") {
//     sidebarTextPanel.style.display="inline";
//   }
// });