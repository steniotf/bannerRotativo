// movimento do banner

let time = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll('#slider img')
    max = images.length;

  // função de animação troca de imagem
  function nextImage() {

    images[currentImageIndex].classList.remove('selected')

    currentImageIndex++

    if(currentImageIndex >= max)
      currentImageIndex = 0

    images[currentImageIndex].classList.add('selected')

  }

  // 
  function start(){
    setInterval(() => {
      //troca de imagens
      nextImage()
    }, time)
}
  window.addEventListener('load', start)