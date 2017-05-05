var output = [];

function converter(number) {
    if (!isNaN(number) === false) {
      alert("Invalid Entry, try a number.")
  }
    else if (number === "") {
      alert("Invalid Entry, try entering something!");
  }
}

$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
     event.preventDefault();
     var number = $("input#number").val();
    $("ul#display").prepend("<li>" + number + "</li>");
  });
});
