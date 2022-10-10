let isMobile = window.matchMedia("(any-pointer:coarse)").matches;

function hoverninos(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infografia/05_ninos_on.png');
}

function unhoverninos(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infografia/05_ninos.png');
}

function hoverjovenes(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infografia/05_jovenes_on.png');
}

function unhoverjovenes(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infografia/05_jovenes.png');
}

function hoveradultos(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infografia/05_adultos_on.png');
}

function unhoveradultos(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infografia/05_adultos.png');
}

function hoveradultosm(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infografia/05_mayores_on.png');
}

function unhoveradultosm(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infografia/05_mayores.png');
}

function hovermexext(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infografia/05_ext_on.png');
}

function unhovermexext(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infografia/05_ext.png');
}

function hoverregresar(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infografia/05_regresar_on.png');
}

function unhoverregresar(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infografia/05_regresar.png');
}

