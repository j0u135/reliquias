let isMobile = window.matchMedia("(any-pointer:coarse)").matches;

function hoversalir(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/zonajuego/J_B_salir_ON.png');
}

function unhoversalir(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/zonajuego/J_B_salir.png');
}