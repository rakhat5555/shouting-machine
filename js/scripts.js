
function upperCase(string) {
  string = string.toUpperCase();
  return string;
}



$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var shouting = $("input#text").val();
    var shouting = upperCase(shouting)

    $(".allCaps").text(shouting);


    $("#shout").show();

    event.preventDefault();
  });
});
