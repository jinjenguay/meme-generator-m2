const body = document.getElementsByTagName("body");
const header = document.getElementById("header");
const main = document.getElementById("main");
const lightDarkMode = document.getElementById("mode-btn");

// lightDarkMode.addEventListener("click",() => {
//     if(header.classList.contains("light-mode")){
//         header.classList.remove("light-mode")
//     } else {
//         header.classList.add("dark-mode")
//     }
// })

lightDarkMode.addEventListener("click", () => {
    header.classList.toggle("dark-mode");
})