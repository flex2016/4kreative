//imediate invoke function

(function(){
  //select toggle
  const toggle = document.querySelector('.menu-icon__toggle');
  const menu = document.querySelector('.menu-icon');
  toggle.addEventListener('click', function(){
    menu.classList.toggle('active');

  });
})();
