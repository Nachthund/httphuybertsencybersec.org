var glowImage = document.getElementsByClassName('glow-image')[1];
glowImage.addEventListener('mouseover', function() {
 var src = glowImage.src;
 glowImage.src = 'Redhat.png'; // URL of the image with glowing eyes
});

glowImage.addEventListener('mouseout', function() {
 var src = glowImage.src;
 glowImage.src = 'Redhat.png'; // URL of the original image
});