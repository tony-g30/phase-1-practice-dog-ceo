//console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
    const imageContainer = document.getElementById('dog-image-container');
    data.message.forEach(imageUrl => {
    const img = document.createElement('img');
    img.src = imageUrl;
    imageContainer.appendChild(img);
    });
    });
    });