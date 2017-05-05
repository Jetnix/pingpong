var input = [];
var output = [];

function converter(number) {
  debugger;
  number = parseInt(number);
  if  (number/15) {
    number = "PING-PONG";
    $("ul#display").prepend("<li>" + number + "</li>");
  }
  else if (number/3) {
    number = "PING";
    $("ul#display").prepend("<li>" + number + "</li>");
  }

  else if (number/5) {
    number = "PONG";
    $("ul#display").prepend("<li>" + number + "</li>");
  }
}

$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
     event.preventDefault();
     debugger;
     var number = $("input#number").val();
     $("#display").text(converter(number));
  });
});
