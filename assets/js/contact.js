$(document).ready(function() {
  $("#slider-range-min").slider({
    range: "min",
    step: 100,
    value: 1200,
    min: 0,
    max: 15000,
    slide: function(event, ui) {
      $("#amount").val("$" + ui.value);
    },
    change: function(event, ui) {
      if (ui.value === 0) {
        $("#amount").val("To be determined");
      } else if (ui.value === 15000) {
        $("#amount").val("$" + "15000 or more");
      } else {
        $("#amount").val("$" + $("#slider-range-min").slider("value"));
      }
    }
  });
  $("#amount").val("$" + $("#slider-range-min").slider("value"));

});

$(document).ready(function() {

  // -- autosize init --

  autosize($('textarea'));

});
