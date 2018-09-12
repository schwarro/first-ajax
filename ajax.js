document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */

  $.ajax({
    url: "http://first-ajax-api.herokuapp.com/",
    method: "GET",
    data: {},
    dataType: "text"
  });
});
