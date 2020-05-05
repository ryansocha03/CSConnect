function showProfile() {
    var menu = document.getElementsByClassName('dropdown-menu')[0];
    if (menu.classList.contains('showing')) {
        menu.classList.remove('showing');
    } else {
        menu.classList.add('showing');
    }
}
