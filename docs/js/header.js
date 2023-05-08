const messageArray = ["Welkom op mijn website!"];
let textPosition = 0;
const speed = 100;

const typewriter = () => {
  document.querySelector("#message").innerHTML = messageArray[0].substring(0, textPosition) + "<span></span>";

  if(textPosition++ != messageArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);