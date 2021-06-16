$(document).ready(function () {
  var $el = $("#img-div");
  var elHeight = $el.outerHeight();
  var elWidth = $el.outerWidth();

  var $wrapper = $("#scaleable-div");

  $wrapper.css({
    width: $(window).innerWidth(),
    height: $(window).innerHeight(),
    /*
      width: $wrapper.width(),
    height: $wrapper.height(),
    */
  });

  $(window).trigger("resize"); // when maximize or Restore-down

  $(window).on("resize", function () {
    $wrapper.css({
      width: $(window).innerWidth(),
      height: $(window).innerHeight(),
      /*
        width: $wrapper.width(),
      height: $wrapper.height(),
      */
    });
    starterData = {
      size: {
        width: $wrapper.width(),
        height: $wrapper.height(),
      },
    };
    $(window).resizable({ resize: doResize });
    //
    doResize(null, starterData);
  });

  function doResize(event, ui) {
    console.log("---" + ui.size.width);
    var scale, origin;
    console.log("window H ", $(window).innerHeight());
    console.log("Main Div H ", ui.size.height);
    console.log("window W ", $(window).innerWidth());
    console.log("Main Div W ", ui.size.width);

    elHeight = $el.innerHeight(); //$el.outerHeight();
    elWidth = $el.innerWidth(); //$el.outerWidth();
    scale = Math.min(ui.size.width / elWidth, ui.size.height / elHeight);
    $el.css({
      transform: "translate(-50%, -50%) " + "scale(" + scale + ")",
    });

    $wrapper.css({
      width: $(window).innerWidth(),
      height: $(window).innerHeight(),
      /*
        width: $wrapper.width(),
      height: $wrapper.height(),
      */
    });
  }

  var starterData = {
    size: {
      width: $wrapper.width(),
      height: $wrapper.height(),
    },
  };
  doResize(null, starterData);
});

//? ------------------- the Loading Effect Action Here --------------
var myVar;
function myFunction() {
  myVar = setTimeout(stop, 3000);
}
myFunction();

function stop() {
  $("#loader").fadeOut("slow");
  $(".scaleable-div").css("display", "block");
}

//Please resize the window to see the effects
