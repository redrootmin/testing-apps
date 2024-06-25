$('.toggle').click(function(e){
  e.preventDefault(); // The flicker is a codepen thing
  $(this).toggleClass('toggle-on');
});