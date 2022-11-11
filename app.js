const $ = (elemento) => document.querySelector(elemento);

// Variables principales
const body = document.getElementsByTagName("body");
const header = $("#header");
const main = $("#main");
const footer = $("#footer");
// Variables de cambio de modo oscuro - modo claro 
const lightDarkMode = $("#mode-btn");
// Variables del sidebar
const asideCont = $(".aside-cont");
const sidebar = $("#sidebar");
const sidebarImageBtn = $(".aside-tool-image-edit-button");
const sidebarTextBtn = $(".aside-tool-text-edit-button");
const sidebarTextPanel = $("#text-edit-panel-section");
const sidebarImagePanel = $("#image-edit-panel-section");
const asideCloseBtn = $(".close-aside-btn");
// Variables del botón de descarga
const imgDownload = $("#img-download");
const btnDownload = $("#download-meme");
// Variables del contenedor del meme
const memeImageCont = $(".meme-image-cont");
const topTextMeme = $(".meme-top-text");
const bottomTextMeme = $(".meme-bottom-text");
const topTextMemeCont = $(".meme-top-text-cont");
const bottomTextMemeCont = $(".meme-bottom-text-cont");
// Variables del sidebar de edición de imágen
const urlInput = $("#url-img-input");
const imgBgColor = $("#blend-mode-color-input");
const imgBlendMode = $("#blend-mode-select");
const brightnessFilter = $("#brightness-slider");
const opacityFilter = $("#opacity-slider");
const contrastFilter = $("#contrast-slider");
const blurFilter = $("#blur-slider");
const grayscalefilter = $("#grayscale-slider");
const sepiaFilter = $("#sepia-slider");
const saturateFilter = $("#saturate-slider");
const hueFilter = $("#hue-slider");
const negativeFilter = $("#negative-slider");
const resetButton = $("#default-filters-button");
// Variables del sidebar de edición de texto
const topTextMemeInput = $("#top-text-input");
const bottomTextMemeInput = $("#bottom-text-input");
const topTextMemeCheck = $("#no-top-text-checkbox");
const bottomTextMemeCheck = $("#no-bottom-text-checkbox");
const textFontSelect = $("#text-font-select");
const textSizeInput = $("#text-size-input");
const textAlingBtnLeft = $("#text-left-align-button");
const textAlingBtnCenter = $("#text-center-align-button");
const textAlingBtnRight = $("#text-right-align-button");
const textColorInput = $("#text-color-input");
const textBGColorInput= $("#text-background-color-input");
const noTextBGCheck = $("#text-no-background-checkbox");
const spacingTextInput = $("#spacing-input");
const lineHeighTextInput = $("#line-height-input");
const noneOutlineText = $("#outline-none-btn");
const lightOutlineText = $("#outline-light-btn");
const darkOutlineText = $("#outline-dark-btn");


// Evento de cambio de modo oscuro - modo claro
lightDarkMode.addEventListener("click", () => {
    header.classList.toggle("dark-mode");
    main.classList.toggle("dark-mode-main");
    footer.classList.toggle("dark-mode-footer");
    sidebar.classList.toggle("dark-mode-panel");
    if (header.classList.contains("dark-mode")) {
      lightDarkMode.innerHTML =
        '<i class="mode-button-icon fa-solid fa-lightbulb header-icons"></i>Modo Claro';
    } else {
      lightDarkMode.innerHTML =
        '<i class="mode-button-icon fa-solid fa-lightbulb header-icons"></i>Modo Oscuro';
    }
  });


// Eventos para abrir y cerrar el panel oculto

// Evento de mostrar y ocultar editor de texto
sidebarTextBtn.addEventListener("click", () => {
  if(!asideCont.classList.contains("open-sidebar")){
    asideCont.classList.toggle("open-sidebar");
  } else if (sidebarTextPanel.style.display=="flex"){
    asideCont.classList.toggle("open-sidebar");
  }
  sidebarTextPanel.style.display="flex";
  sidebarImagePanel.style.display="none";
  sidebar.style.overflow="scroll";
});

// Evento de mostrar y ocultar editor de imágen
sidebarImageBtn.addEventListener("click", () => {
  if(!asideCont.classList.contains("open-sidebar")){
    asideCont.classList.toggle("open-sidebar");
  } else if (sidebarImagePanel.style.display=="flex") {
    asideCont.classList.toggle("open-sidebar");
 }
  sidebarImagePanel.style.display="flex";
  sidebarTextPanel.style.display="none";
  sidebar.style.overflow="scroll";
});

// Evento de botón de cerrar sidebar
asideCloseBtn.addEventListener("click", () => {
  asideCont.classList.toggle("open-sidebar");
})

// Evento para introducir la imágen
urlInput.addEventListener("change", () => {
  memeImageCont.style.backgroundImage=`url(${urlInput.value})`;
});

// Eventos para editar Imagen del meme con filtros
imgBgColor.addEventListener("input", () => {
  memeImageCont.style.backgroundColor=imgBgColor.value;
  $("#blend-mode-color").innerText=imgBgColor.value;
});

imgBlendMode.addEventListener("change", () => {
  memeImageCont.style.backgroundBlendMode=imgBlendMode.value;
});

// Solución de Gabi para mi problema, los filtros no funcionaban juntos, cuando editaba uno se borraba el anterior

function darEstilos() {
  brillo = brightnessFilter.value;
  contraste = contrastFilter.value;
  opacidad = opacityFilter.value;
  desenfocar = blurFilter.value;
  escalaDeGrises = grayscalefilter.value;
  sepia = sepiaFilter.value;
  saturacion = saturateFilter.value;
  hue = hueFilter.value;
  negativo = negativeFilter.value;

  memeImageCont.style.filter = `brightness(${brillo}) contrast(${contraste}) opacity(${opacidad}) blur(${desenfocar}px) grayscale(${escalaDeGrises}%) sepia(${sepia}%) saturate(${saturacion}%) hue-rotate(${hue}deg) invert(${negativo}%)`;
}

brightnessFilter.addEventListener("input", darEstilos);
contrastFilter.addEventListener("input", darEstilos);
opacityFilter.addEventListener("input", darEstilos);
blurFilter.addEventListener("input", darEstilos);
grayscalefilter.addEventListener("input", darEstilos);
sepiaFilter.addEventListener("input", darEstilos);
saturateFilter.addEventListener("input", darEstilos);
hueFilter.addEventListener("input", darEstilos);
negativeFilter.addEventListener("input", darEstilos);


// Evento del botón de reestablecer filtros
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
    topTextMeme.style.display="none";
  } else {
    topTextMeme.style.display="block";
  }
});

bottomTextMemeCheck.addEventListener("click", () => {
  if(bottomTextMemeCheck.checked == true){
    bottomTextMeme.style.display="none";
  } else {
    bottomTextMeme.style.display="block";
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
  bottomTextMeme.style.textAlign="start";
  topTextMeme.style.textAlign="start";
});

textAlingBtnCenter.addEventListener("click", () => {
  bottomTextMeme.style.textAlign="center";
  topTextMeme.style.textAlign="center";
});

textAlingBtnRight.addEventListener("click", () => {
  bottomTextMeme.style.textAlign="end";
  topTextMeme.style.textAlign="end";
});

// Eventos de color del texto y del fondo del texto
textColorInput.addEventListener("input", () => {
  topTextMeme.style.color=textColorInput.value;
  bottomTextMeme.style.color=textColorInput.value; 
  $("#text-color").innerText=textColorInput.value;
});

textBGColorInput.addEventListener("input", () => {
  topTextMeme.style.backgroundColor=textBGColorInput.value;
  bottomTextMeme.style.backgroundColor=textBGColorInput.value; 
  $("#text-background-color").innerText=textBGColorInput.value;
});

noTextBGCheck.addEventListener("click", () => {
  console.log(noTextBGCheck.value);
  if(noTextBGCheck.checked == true){
    topTextMeme.style.backgroundColor="transparent";
    bottomTextMeme.style.backgroundColor="transparent";
    topTextMeme.style.position="absolute";
    bottomTextMeme.style.position="absolute";
  } else {
    topTextMeme.style.backgroundColor=`${textBGColorInput.value}`;
    bottomTextMeme.style.backgroundColor=`${textBGColorInput.value}`;
    topTextMeme.style.position="";
    bottomTextMeme.style.position="";
  }
});

// Eventos del Espaciado y el Interlineado del texto

spacingTextInput.addEventListener("change", () => {
  topTextMeme.style.padding=`${spacingTextInput.value}px 0px`;
  bottomTextMeme.style.padding=`${spacingTextInput.value}px 0px`;
});

lineHeighTextInput.addEventListener("click", () => {
  topTextMeme.style.lineHeight=`${lineHeighTextInput.value}`;
  bottomTextMeme.style.lineHeight=`${lineHeighTextInput.value}`;
});

//Eventos del contorno del texto 
noneOutlineText.addEventListener("click", () => {
    topTextMeme.classList.contains("lightOutlineValue");
    bottomTextMeme.classList.contains("lightOutlineValue");
    topTextMeme.classList.contains("darkOutlineValue");
    bottomTextMeme.classList.contains("darkOutlineValue");
    topTextMeme.classList.remove("lightOutlineValue");
    bottomTextMeme.classList.remove("lightOutlineValue");
    topTextMeme.classList.remove("darkOutlineValue");
    bottomTextMeme.classList.remove("darkOutlineValue");
});
darkOutlineText.addEventListener("click", () => {
  topTextMeme.classList.add("darkOutlineValue");
  bottomTextMeme.classList.add("darkOutlineValue");
});
lightOutlineText.addEventListener("click", () => {
  topTextMeme.classList.contains("darkOutlineValue");
  bottomTextMeme.classList.contains("darkOutlineValue");
  topTextMeme.classList.remove("darkOutlineValue");
  bottomTextMeme.classList.remove("darkOutlineValue");
  topTextMeme.classList.add("lightOutlineValue");
  bottomTextMeme.classList.add("lightOutlineValue");
});

// EVENTO DE DESCARGA

const descargarMeme = () => {
  domtoimage.toBlob(imgDownload).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};

btnDownload.addEventListener("click", descargarMeme);
