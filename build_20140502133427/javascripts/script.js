/* Author: Kim Foale

*/

// h/t http://css-tricks.com/website-escape/

function getAway() {
  // Get away right now
  window.open("http://www.bbc.co.uk/weather/", "_newtab");
  // Replace current site with another benign site
  window.location.replace('http://google.com');
}

$(function() {

  $("#panic").on("click", function(e) {
    getAway();
  });

  $("#panic a").on("click", function(e) {
    // allow the (?) link to work
    e.stopPropagation();
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key
      getAway();
    }
  });

});

$(document).ready(function(){
  if($(".nav-container").css("width") > "600px") {
   $(".nav-container").sticky({topSpacing:0});
 }
});



















