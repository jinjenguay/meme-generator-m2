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
const imgBgColor = $("#blend-mode-color-input");
const imgBlendMode = $("#blend-mode-select");
const resetButton = $("#default-filters-button");
const brightnessFilter = $("#brightness-slider");
const opacityFilter = $("#opacity-slider");
const contrastFilter = $("#contrast-slider");
const blurFilter = $("#blur-slider");
const grayscalefilter = $("#grayscale-slider");
const sepiaFilter = $("#sepia-slider");
const saturateFilter = $("#saturate-slider");
const hueFilter = $("#hue-slider");
const negativeFilter = $("#negative-slider");
const textFontSelect = $("#text-font-select");
const textSizeInput = $("#text-size-input");
const textAlingBtnLeft = $("#text-left-align-button");
const textAlingBtnCenter = $("#text-center-align-button");
const textAlingBtnRight = $("#text-right-align-button");
const textColorInput = $("#text-color-input");
const textBGColorInput= $("#text-background-color-input");
const noTextBGCheck = $("#text-no-background-checkbox");




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

// Eventos para editar Imagen del meme con filtros
imgBgColor.addEventListener("input", () => {
  memeImageCont.style.backgroundColor=imgBgColor.value;
  $("#blend-mode-color").innerText=imgBgColor.value;
});

imgBlendMode.addEventListener("change", () => {
  memeImageCont.style.backgroundBlendMode=imgBlendMode.value;
});

brightnessFilter.addEventListener("input", () => {
  memeImageCont.style.filter=`brightness(${brightnessFilter.value})`;
});

contrastFilter.addEventListener("input", () => {
  memeImageCont.style.filter=`contrast(${contrastFilter.value})`;
});

opacityFilter.addEventListener("input", () => {
  memeImageCont.style.filter=`opacity(${opacityFilter.value})`;
});

blurFilter.addEventListener("input", () => {
  memeImageCont.style.filter=`blur(${blurFilter.value}px)`;
});

grayscalefilter.addEventListener("input", () => {
  memeImageCont.style.filter=`grayscale(${grayscalefilter.value}%)`;
});

sepiaFilter.addEventListener("input", () => {
  memeImageCont.style.filter=`sepia(${sepiaFilter.value}%)`;
});

saturateFilter.addEventListener("input", () => {
  memeImageCont.style.filter=`saturate(${saturateFilter.value}%)`;
});

hueFilter.addEventListener("input", () => {
  memeImageCont.style.filter=`hue-rotate(${hueFilter.value}deg)`;
});

negativeFilter.addEventListener("input", () => {
  memeImageCont.style.filter=`invert(${negativeFilter.value}%)`;
});

resetButton.addEventListener("click", () => {
  // Llamo a que el filtro este en su valor default
  imgBgColor.value="#000000";
  imgBlendMode.value="unset";
  brightnessFilter.value=1;
  opacityFilter.value=1;
  contrastFilter.value=1;
  blurFilter.value=0;
  grayscalefilter.value=0;
  sepiaFilter.value=0;
  saturateFilter.value=100;
  hueFilter.value=0;
  negativeFilter.value=0;
  // Llamo a que el filtro dispare un nuevo evento (el mismo evento del filtro) para que tome lo de arriba en la imagen
  imgBgColor.dispatchEvent(new Event('input'));
  imgBlendMode.dispatchEvent(new Event('change'));
  brightnessFilter.dispatchEvent(new Event('input'));
  contrastFilter.dispatchEvent(new Event('input'));
  opacityFilter.dispatchEvent(new Event('input'));
  blurFilter.dispatchEvent(new Event('input'));
  grayscalefilter.dispatchEvent(new Event('input'));
  sepiaFilter.dispatchEvent(new Event('input'));
  saturateFilter.dispatchEvent(new Event('input'));
  hueFilter.dispatchEvent(new Event('input'));
  negativeFilter.dispatchEvent(new Event('input'));
});

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
});

bottomTextMemeCheck.addEventListener("click", () => {
  if(bottomTextMemeCheck.checked == true){
    bottomTextMemeCont.style.display="none";
  } else {
    bottomTextMemeCont.style.display="flex";
  }
});

// Evento de selección de fuente del texto
textFontSelect.addEventListener("click", () => {
  bottomTextMeme.style.fontFamily=textFontSelect.value;
  topTextMeme.style.fontFamily=textFontSelect.value;
});

// Evento de selección de tamaño de fuente
textSizeInput.addEventListener("change", () => {
  bottomTextMeme.style.fontSize=`${textSizeInput.value}px`;
  topTextMeme.style.fontSize=`${textSizeInput.value}px`;
});

// Eventos de alineación del texto
textAlingBtnLeft.addEventListener("click", () => {
  bottomTextMemeCont.style.justifyContent="flex-start";
  topTextMemeCont.style.justifyContent="flex-start";
});

textAlingBtnCenter.addEventListener("click", () => {
  bottomTextMemeCont.style.justifyContent="center";
  topTextMemeCont.style.justifyContent="center";
});

textAlingBtnRight.addEventListener("click", () => {
  bottomTextMemeCont.style.justifyContent="flex-end";
  topTextMemeCont.style.justifyContent="flex-end";
});

// Eventos de color del texto y del fondo del texto
textColorInput.addEventListener("input", () => {
  topTextMeme.style.color=textColorInput.value;
  bottomTextMeme.style.color=textColorInput.value; 
  $("#text-color").innerText=textColorInput.value;
});

textBGColorInput.addEventListener("input", () => {
  topTextMemeCont.style.backgroundColor=textBGColorInput.value;
  bottomTextMemeCont.style.backgroundColor=textBGColorInput.value; 
  $("#text-background-color").innerText=textBGColorInput.value;
});

noTextBGCheck.addEventListener("click", () => {
  console.log(noTextBGCheck.value);
  if(noTextBGCheck.checked == true){
    topTextMemeCont.style.backgroundColor="transparent";
    bottomTextMemeCont.style.backgroundColor="transparent";
  } else {
    topTextMemeCont.style.backgroundColor=`${textBGColorInput.value}`;
    bottomTextMemeCont.style.backgroundColor=`${textBGColorInput.value}`;
  }
});

// EVENTO DE DESCARGA

const descargarMeme = () => {
  domtoimage.toBlob(imgDownload).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};

btnDownload.addEventListener("click", descargarMeme);
