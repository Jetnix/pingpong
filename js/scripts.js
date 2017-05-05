var input = [];
var output = [];

function converter(number) {
  debugger;
  number = parseInt(number);

  if (number/15) {
    number = "PING-PONG";
  }
  else if (number/3) {
    number = "PING";
  }

  else if (number/5) {
    number = "PONG";
  }
  input = number;
}

$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
     event.preventDefault();
     var number = $("input#number").val();
     $("#display").text(converter(number));
     $("ul#display").prepend("<li>" + input + "</li>");
  });
});
