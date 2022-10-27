const lightDarkMode = document.getElementById("mode-btn");
const body = document.getElementsByTagName("body");
const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const asideCont = document.querySelector(".aside-cont");
const sidebar = document.getElementById("sidebar");
const panelSidebar = document.querySelector(".panel-editor-sidebar");
const sidebarImageBtn = document.querySelector(".aside-tool-image-edit-button");
const sidebarTextBtn = document.querySelector(".aside-tool-text-edit-button");
const sidebarTextPanel = document.getElementById("text-edit-panel-section");
const sidebarImagePanel = document.getElementById("image-edit-panel-section");
const imgDownload = document.getElementById("img-download");
const btnDownload = document.getElementById("download-meme");

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


// sidebarImageBtn.addEventListener("click", () => {
//   if(asideCont.style.display="none"){
//     asideCont.classList.add("open-siderbar");
//   } else if (asideCont.style.display="flex") {
//     asideCont.classList.remove("open-sidebar");
//   };

//     // if(asideCont.classList.add("open-sidebar")) {
//     //   asideCont.classList.remove("open-sidebar");
//     //   asideCont.style.display="flex";
//     // };
// });
// sidebarImageBtn.addEventListener("click", () => {
//   if(asideCont.classList.add("open-sidebar")) {
//     asideCont.style.display="flex";
//   }
// });

sidebarTextBtn.addEventListener("click", () => {
  asideCont.classList.toggle("open-sidebar");
  // sidebarTextPanel.classList.toggle("open-text-editor");
  sidebarTextPanel.style.display="flex";
  sidebarImagePanel.style.display="none";
});
sidebarImageBtn.addEventListener("click", () => {
  asideCont.classList.toggle("open-sidebar");
  // sidebarImagePanel.classList.add("open-image-editor");
  sidebarImagePanel.style.display="flex";
  sidebarTextPanel.style.display="none";

});

const descargarMeme = () => {
  domtoimage.toBlob(imgDownload).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};

btnDownload.addEventListener("click", descargarMeme);