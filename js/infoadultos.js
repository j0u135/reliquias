let isMobile = window.matchMedia("(any-pointer:coarse)").matches;

function hoverinfo1(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infoadultos/08_info1_on.png');
}

function unhoverinfo1(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infoadultos/08_info1.png');
}

function hoverinfo2(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infoadultos/08_info2_on.png');
}

function unhoverinfo2(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infoadultos/08_info2.png');
}

function hoverinfo3(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infoadultos/08_info3_on.png');
}

function unhoverinfo3(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infoadultos/08_info3.png');
}

function hoverregresar(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infoadultos/08_regresar_on.png');
}

function unhoverregresar(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/infoadultos/08_regresar.png');
}

