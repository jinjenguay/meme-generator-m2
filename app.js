const $ = (elemento) => document.querySelector(elemento);

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
const asideCloseBtn = document.querySelector(".close-aside-btn-cont");
const urlInput = document.querySelector("#url-img-input");
const memeImageCont = document.querySelector(".meme-image-cont");
const topTextMemeInput = $("#top-text-input");
const bottomTextMemeInput = $("#bottom-text-input");
const topTextMeme = $(".meme-top-text");
const bottomTextMeme = $(".meme-bottom-text");
const topTextMemeCont = $(".meme-top-text-cont");
const bottomTextMemeCont = $(".meme-bottom-text-cont");
const topTextMemeCheck = $("#no-top-text-checkbox");
const bottomTextMemeCheck = $("#no-bottom-text-checkbox");
const brightness = $("#brightness-slider");
const imgBgColor = $("#blend-mode-color-input");
const imgBlendMode = $("#blend-mode-select");
const resetButton = $("#default-filters-button");

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

// Eventos para abrir y cerrar el panel oculto

sidebarTextBtn.addEventListener("click", () => {
  if(!asideCont.classList.contains("open-sidebar")){
    asideCont.classList.toggle("open-sidebar");
  } else if (sidebarTextPanel.style.display=="flex"){
    asideCont.classList.toggle("open-sidebar");
  }
  sidebarTextPanel.style.display="flex";
  sidebarImagePanel.style.display="none";
});
sidebarImageBtn.addEventListener("click", () => {
  if(!asideCont.classList.contains("open-sidebar")){
    asideCont.classList.toggle("open-sidebar");
  } else if (sidebarImagePanel.style.display=="flex") {
    asideCont.classList.toggle("open-sidebar");
 }
  sidebarImagePanel.style.display="flex";
  sidebarTextPanel.style.display="none";
  panelSidebar.style.overflow="scroll";
});

asideCloseBtn.addEventListener("click", () => {
  asideCont.classList.toggle("open-sidebar");
})

// Evento para introducir la imágen

urlInput.addEventListener("change", () => {
  // memeImageCont.innerHTML = '<img src="'+ urlInput.value +'" class="meme-image" id="image-cont">';
  memeImageCont.style.backgroundImage=`url(${urlInput.value})`;
  // if(urlInput.value == "") {
  //   memeImageCont.innerHTML = '';
  // }
});

// Eventos para editar Imagen del meme

brightness.addEventListener("input", () => {
  memeImageCont.style.filter=`brightness(${brightness.value})`;
})

imgBgColor.addEventListener("input", () => {
  memeImageCont.style.backgroundColor=imgBgColor.value;
  $("#blend-mode-color").innerText=imgBgColor.value;
})

imgBlendMode.addEventListener("change", () => {
  memeImageCont.style.backgroundBlendMode=imgBlendMode.value;
})

resetButton.addEventListener("click", () => {
  // Llamo a que el filtro este en su valor default
  brightness.value=1;
  imgBgColor.value="#000000";
  imgBlendMode.value="unset";
  // Llamo a que el filtro dispare un nuevo evento (el mismo evento del filtro) para que tome lo de arriba en la imagen
  brightness.dispatchEvent(new Event('input'));
  imgBgColor.dispatchEvent(new Event('input'));
  imgBlendMode.dispatchEvent(new Event('change'));

})
// Eventos para editar el texto

topTextMemeInput.addEventListener("keyup", () => {
  topTextMeme.innerText = topTextMemeInput.value;
});

bottomTextMemeInput.addEventListener("keyup", () => {
  bottomTextMeme.innerText = bottomTextMemeInput.value;
});

topTextMemeCheck.addEventListener("click", () => {
  if(topTextMemeCheck.checked == true){
    topTextMemeCont.style.display="none";
  } else {
    topTextMemeCont.style.display="flex";
  }
})

bottomTextMemeCheck.addEventListener("click", () => {
  if(bottomTextMemeCheck.checked == true){
    bottomTextMemeCont.style.display="none";
  } else {
    bottomTextMemeCont.style.display="flex";
  }
})

// sidebarTextBtn.addEventListener("click", () => {
//   asideCont.classList.toggle("open-sidebar");
//   sidebarTextPanel.style.display="flex";
//   sidebarImagePanel.style.display="none";
// });
// sidebarImageBtn.addEventListener("click", () => {
//   asideCont.classList.toggle("open-sidebar");
//   sidebarImagePanel.style.display="flex";
//   sidebarTextPanel.style.display="none";
// });





const descargarMeme = () => {
  domtoimage.toBlob(imgDownload).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};

btnDownload.addEventListener("click", descargarMeme);
