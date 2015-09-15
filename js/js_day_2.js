$(document).ready(function() {

  // $(".clickable_c").click(function() {
  //   $("#cat").fadeIn();
  //     });
  //
  // $(".clickable_d").click(function() {
  //     $("#dog").show();
  //     });
  //
  // $(".clickable_w").click(function() {
  //   $("img").toggle();
  //   $("#walrus").toggle();
  //   });
 $(".clickable_w").click(function(){
   $("#picShow").toggle();
   $("#picNoShow").toggle();
 });
 $(".clickable_c").click(function(){
   $("#picShow_c").toggle();
   $("#picNoShow_c").toggle();
 });
 $(".clickable_d").click(function(){
   $("#picShow_d").toggle();
   $("#picNoShow_d").toggle();
 });
  });
