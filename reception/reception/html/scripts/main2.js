$(function() {

  $.subscribeToALMemoryEvent("Sample/ShowText", function (data) {
  	$("#text_area").css("visibility", "visible");
  });

  $.subscribeToALMemoryEvent("kadai4/showqr", function (data) {
         $("#item01").text(data);
  });
  
  $.subscribeToALMemoryEvent("kadai4/showqr", function (data) {
        $("#count01").css("visibility", "visible");
  });

 $('#start_button').click(function(){
    $.raiseALMemoryEvent('Sample/ButtonPress', "");
  });

  $('#emotion_button').click(function(){
    $.raiseALMemoryEvent('Sample/emotionPress', "");
  });
  
  $('#close_button').click(function(){
    $.raiseALMemoryEvent('Sample/CloseApp', "");
  });

  $.raiseALMemoryEvent("Sample/StartApp","");
});
