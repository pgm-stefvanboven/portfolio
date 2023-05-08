const introArray = ["Met trots presenteer ik hierbij mijn persoonlijke portfolio website, op deze website vindt u informatie over mezelf, mijn projecten en een contactformulier indien u mij een vraag wil stellen, of een sugestie wilt doenn aarzel niet om contact met me op te nemen."];
let currentPosition = 0;
const totalSpeed = 100;

const typewriterintro = () => {
  document.querySelector("#intro").innerHTML = introArray[0].substring(0, currentPosition) + "<span></span>";

  if(currentPosition++ != introArray[0].length)
    setTimeout(typewriterintro, totalSpeed);
}

window.addEventListener("load", typewriterintro);

