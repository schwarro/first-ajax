document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  $("#step12 button").click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "GET"
    });
  });

  $("#step3456 button").click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/ping",
      method: "GET",
    }).done(function(responseData) {
      console.log("Great Success!");
      var response = $("<p>").html(responseData);
      $("#step3456").append(response);
    }).fail(function(responseData){
      console.log("Fail!");
      var response = $("<p>").html(responseData.responseText);
      $("#step3456").append(response);
    }).always(function(){
      console.log("The request is finised!");
    });
  });






});
