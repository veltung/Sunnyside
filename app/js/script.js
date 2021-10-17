const hamburgerBtn = document.querySelector('#hamburgerBtn');
const fadeElems = document.querySelectorAll('.has_fade');

hamburgerBtn.addEventListener('click', function() {

    if (hamburgerBtn.classList.contains('hamburgerOpen')) {
        hamburgerBtn.classList.remove('hamburgerOpen');
        fadeElems.forEach(function(element){
            element.classList.remove('fade_in');
            element.classList.add('fade_out');
        });
    }
    else {
        hamburgerBtn.classList.add('hamburgerOpen');
        fadeElems.forEach(function(element){
            element.classList.add('fade_in');
            element.classList.remove('fade_out');
        });
    }
    
});