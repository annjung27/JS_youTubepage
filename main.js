const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");

function handleClick(){
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
}

moreBtn.addEventListener("click", handleClick);