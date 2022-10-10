let isMobile = window.matchMedia("(any-pointer:coarse)").matches;

function hoverninos(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/videos/04_ninos_on.png');
}

function unhoverninos(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/videos/04_ninos.png');
}

function hoverjovenes(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/videos/04_jovenes_on.png');
}

function unhoverjovenes(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/videos/04_jovenes.png');
}

function hoveradultos(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/videos/04_adultos_on.png');
}

function unhoveradultos(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/videos/04_adultos.png');
}

function hoveradultosm(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/videos/04_mayores_on.png');
}

function unhoveradultosm(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/videos/04_mayores.png');
}

function hovermexext(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/videos/04_ext_on.png');
}

function unhovermexext(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/videos/04_ext.png');
}

function hoverregresar(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/videos/04_regresar_on.png');
}

function unhoverregresar(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/videos/04_regresar.png');
}

