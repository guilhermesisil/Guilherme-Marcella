
function openLightbox(img){

const lightbox = document.createElement("div");
lightbox.className = "lightbox";

lightbox.innerHTML = `<img src="${img.src}">`;

lightbox.onclick = ()=>lightbox.remove();

document.body.appendChild(lightbox);

}
