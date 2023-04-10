var flavorButtons = document.querySelectorAll('.flavor .toggle-description');
for (var i = 0; i < flavorButtons.length; i++) {
  flavorButtons[i].addEventListener('click', function() {
    var flavor = this.parentNode;
    if (flavor.classList.contains('show')) {
      flavor.classList.remove('show');
      this.innerText = 'Read More';
    } else {
      flavor.classList.add('show');
      this.innerText = 'Read Less';
    }
  });
}
