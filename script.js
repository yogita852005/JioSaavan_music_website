
function toggleAudio(image) {
    if (!image.audio) {
        
        image.audio = new Audio(image.getAttribute('data-audio'));
        image.audio.addEventListener('ended', function () {
            
            image.src = "images/play_button.jpeg"; 
        });
    }

    if (image.audio.paused) {
        
        image.audio.play();
        image.src = "images/pause_button.png"; 
    } else {
        
        image.audio.pause();
        image.src = "images/play_button.jpeg"; 
    }
}


var images = document.querySelectorAll('#divmain img');


images.forEach(function (image) {
    image.addEventListener('click', function () {
       toggleAudio(this);
    });
});
