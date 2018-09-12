document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */



  var requestButton = document.querySlector('Button')

  requestButton.addEventListener('click', function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/count",
      method: "GET",
      data: {},
      dataType: "text"
    })
  })
});
