$(document).ready(function () {
  $("#menu-btn").click(changeNav);
  function changeNav() {
    $("#links").toggle(2000);
    $("#menu-btn").toggleClass("turn");
  }
});

// Counter

// number count for stats, using jQuery animate

$(".counting").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 3000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      },
    }
  );
});
