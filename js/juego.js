let isMobile = window.matchMedia("(any-pointer:coarse)").matches;

function hoverInfografia(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/juego/02_adultos_on.png');
}

function unhoverInfografia(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/juego/02_adultos.png');
}

function hoverVideo(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/juego/02_ninos_on.png');
}

function unhoverVideo(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/juego/02_ninos.png');
}

function hoverregresar(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/juego/02_regresar_on.png');
}

function unhoverregresar(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/juego/02_regresar.png');
}
