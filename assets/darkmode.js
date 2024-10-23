const check = document.getElementById('chk');
check.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  if (document.body.classList.contains('dark')) {
    document.querySelector("#imagem").src = "assets/imgs/logo/1-removebg-preview.png";
  } else {
    document.querySelector("#imagem").src = "assets/imgs/logo/2-removebg-preview.png";
  }
});

