const memeUrl = document.querySelector('#meme-url');
const textAbove = document.querySelector('#text-above');
const textBelow = document.querySelector('#text-below');
const button = document.querySelector('#btn');
const memeGallery = document.querySelector('.meme-gallery');

button.addEventListener("click", function(event){
    event.preventDefault();

    var newLi = document.createElement('li')
    newLi.classList.add('meme-img');

    src = memeUrl.value;
    img = document.createElement('img');
    img.src = src;

    var topText = document.createElement('div');
    topText.classList.add("text","top");
    topText.innerText = textAbove.value;

    var botText = document.createElement('div');
    botText.classList.add("text", "bottom");
    botText.innerText = textBelow.value;

    var removeMeme = document.createElement('div');
    removeMeme.classList.add("remove-button");
    removeMeme.innerText = "Remove?";

    memeGallery.appendChild(newLi);
    newLi.appendChild(img);
    newLi.appendChild(topText);
    newLi.appendChild(botText);
    newLi.appendChild(removeMeme);

    textAbove.value = "";
    textBelow.value = "";
    memeUrl.value = "";
    
    memeGallery.addEventListener('click',function(event){
        event.target.parentNode.remove();
    });

}) 

