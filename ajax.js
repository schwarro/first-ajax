document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  $("#step12 button").click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "GET"
    });
  });

  $("#step3456 button").click(function() {
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

  $("#step7 button").click(function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/count",
      method: "GET"
    }).done(function(responseData) {
      console.log("Great Success!");
      var response = $("<p>").html(responseData);
      $("#step7").append(response);
    });
  });

  $("#step8 button").click(function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/time",
      method: "GET",
      data: {timezone: "America/Mexico_City"}
    }).done(function(responseData) {
      console.log("Great Success!");
      var response = $("<p>").html(responseData);
      $("#step8").append(response);
    });
  });

  $("#step9 button").click(function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/a_car",
      method: "GET",
      dataType: "html"
    }).done(function(responseData) {
      console.log("Great Success!");
      var response = $("<ul>").html(responseData).attr("id", "car");
      $("#step9").append(response);
    });
  });




});
