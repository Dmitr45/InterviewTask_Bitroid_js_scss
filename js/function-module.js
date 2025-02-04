console.log("start function.js");
// Подгружаем переиспользующиеся разделы сайта
export function Loader(urlHTML, teg) {
    console.log("Подгружаем: " + urlHTML + " в <" + teg + "/>")
    fetch(urlHTML)
        .then(response => response.text())
        .then(html => document.querySelector(teg).innerHTML = html)
        .catch((err)=>{console.log(err)})
}