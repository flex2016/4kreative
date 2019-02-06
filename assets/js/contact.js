// Input Lock
$('textarea').blur(function () {
  $('#contact textarea').each(function () {
      $this = $(this);
      if ( this.value != '' ) {
        $this.addClass('focused');
        $('textarea + label + span').css({'opacity': 1});
      }
      else {
        $this.removeClass('focused');
        $('textarea + label + span').css({'opacity': 0});
      }
  });
});

$('#contact .field:first-child input').blur(function () {
  $('#contact .field:first-child input').each(function () {
      $this = $(this);
      if ( this.value != '' ) {
        $this.addClass('focused');
        $('.field:first-child input + label + span').css({'opacity': 1});
      }
      else {
        $this.removeClass('focused');
        $('.field:first-child input + label + span').css({'opacity': 0});
      }
  });
});

$('#contact .field:nth-child(2) input').blur(function () {
  $('#contact .field:nth-child(2) input').each(function () {
      $this = $(this);
      if ( this.value != '' ) {
        $this.addClass('focused');
        $('.field:nth-child(2) input + label + span').css({'opacity': 1});
      }
      else {
        $this.removeClass('focused');
        $('.field:nth-child(2) input + label + span').css({'opacity': 0});
      }
  });
});
