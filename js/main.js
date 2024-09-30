const menuItems = document.querySelectorAll('.menu-item a');

menuItems.forEach(item => {
  item.addEventListener('click', function(event) {


    menuItems.forEach(link => {
      link.classList.remove('active');
    });

    this.classList.add('active');
  });
});
