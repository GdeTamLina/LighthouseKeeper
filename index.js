var numberOfButtons = document.querySelectorAll("button").length;



for (var i = 0; i < numberOfButtons; i++) {
  $("button")[i].addEventListener("click", function() {

    var buttonId = this.id;
    var button = $("#" + buttonId);
    var audio = $("." + buttonId + "_sound")[0];

    $(button).toggleClass("pressed");

    // Play and pause sounds when clicked

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }

    // Set the volume on slider

    $(".slider").slider({
      step: 1,
      range: "min",
      min: 0,
      max: 100,
      slide: function() {
        var value = $("#slider").slider("value");
        audio.volume = (value / 100);
      }
    });

  });


}


// $("button").on("click", function() {
//   $(".symbol").setAttribute("style", "background-color: red;");
// })
