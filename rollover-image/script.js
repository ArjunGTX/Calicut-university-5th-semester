const image = document.getElementById('image');
image.addEventListener('mouseenter',rollIn);
image.addEventListener('mouseleave',rollOut);

function rollIn(){
    image.src = "./images/bike.jpg"
}
function rollOut(){
    image.src = "./images/background.png"
}

