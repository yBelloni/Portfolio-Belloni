const check = document.getElementById('chk');
check.addEventListener('click', () => {
document.body.classList.toggle('dark');
  
if (document.body.classList.contains('dark')) {
    document.querySelector("#imagem").src = "assets/imgs/logo/1-removebg-preview.png";
} else {
    document.querySelector("#imagem").src = "assets/imgs/logo/2-removebg-preview.png";
}
});

const text = "Developer & Editor";
const paragrafo_typing = document.getElementById("paragrafo_typing");
let index = 0;

function type() {
    if (index < text.length) {
        paragrafo_typing.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150);
      }
}
type();

