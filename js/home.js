let isMobile = window.matchMedia("(any-pointer:coarse)").matches;

function hoverJuega(element) {
  if(!isMobile)
    element.setAttribute('src', '/public/home/01_juega_on.png');
}

function unhoverJuega(element) {
  if(!isMobile)
    element.setAttribute('src', '/public/home/01_juega.png');
}

function hoverConsulta(element) {
  if(!isMobile)
    element.setAttribute('src', '/public/home/01_consulta_on.png');
}

function unhoverConsulta(element) {
  if(!isMobile)
    element.setAttribute('src', '/public/home/01_consulta.png');
}