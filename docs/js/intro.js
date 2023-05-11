const introArray = ["Met trots presenteer ik hierbij mijn persoonlijke portfolio website op deze website vindt u informatie over mezelf."];
let currentPosition = 0;
const totalSpeed = 10;

const typewriterintro = () => {
  document.querySelector("#intro").innerHTML = introArray[0].substring(0, currentPosition) + "<span></span>";

  if(currentPosition++ != introArray[0].length)
    setTimeout(typewriterintro, totalSpeed);
}

window.addEventListener("load", typewriterintro);

