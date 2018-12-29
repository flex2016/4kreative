$(document).ready(function () {
  // init Isotope
  var $grid = $('.work-projects').isotope({
    // options
  });
  // filter items on button click
  $('.work-btn-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });
  //images loaded
  $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout');


  });
});
