let isMobile = window.matchMedia("(any-pointer:coarse)").matches;

function hoverInfografia(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/recursos/03_infografia_on.png');
}

function unhoverInfografia(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/recursos/03_infografia.png');
}

function hoverVideo(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/recursos/03_video_on.png');
}

function unhoverVideo(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/recursos/03_video.png');
}

function hoverregresar(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/recursos/03_regresar_on.png');
}

function unhoverregresar(element) {
  if(!isMobile)
    element.setAttribute('src', '../public/recursos/03_regresar.png');
}
