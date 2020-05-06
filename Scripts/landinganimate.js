/*$(document).ready(function() {
    $('.navbar').hide();
});*/

$(window).scroll(function() {
    var nav = document.getElementsByClassName('navbar')[0];
    if ($(this).scrollTop() > 700) {  
        nav.classList.add('showing');
    } else {
        nav.classList.remove('showing');
    }
});