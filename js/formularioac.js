let isMobile = window.matchMedia("(any-pointer:coarse)").matches;

function hoverentrar(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/formulario/F_entrar_on.png');
}

function unhoverentrar(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/formulario/F_entrar.png');
}