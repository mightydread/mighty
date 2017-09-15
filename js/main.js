var anim_mighty = new Vivus('mighty', {
  duration: 70,
  start: 'manual'
}, function(obj) {
  obj.el.classList.add('finished');
});
var anim_music = new Vivus('music', {
  duration: 50,
  start: 'manual'
}, function(obj) {
  obj.el.classList.add('finished');
});
var anim_it = new Vivus('it', {
  duration: 20,
  start: 'manual'
}, function(obj) {
  obj.el.classList.add('finished');
});
$(document).ready(function() {
  anim_mighty.play(function() {

  });


  $(".m").mouseenter(function() {
    anim_mighty.play(-1, function() {

      $("#mighty").hide();
      $("#music").show();
      anim_music.play(function() {
        $(".dropdown-closed").velocity("slideDown", function() {
          $(".dropdown-closed").addClass("dropdown-open");
          $(".dropdown-closed").removeClass("dropdown-closed");
        });
        $(".m2").click(function() {
          anim_music.play(-1, function() {
            $(".dropdown-open").velocity("slideUp", function() {
              $(".dropdown-open").addClass("dropdown-closed");
              $(".dropdown-open").removeClass("dropdown-open");
            });
            $("#music").hide();
            $("#mighty").show();
            anim_mighty.play();
          });
        });
      });
    });
  });
  $(".m").mouseleave(function() {
    anim_mighty.play();
  });

  $(".i").mouseenter(function() {
    anim_mighty.play(-1, function() {

      $("#mighty").hide();
      $("#it").show();
      anim_it.play(function() {
        $(".dropdown-closed").velocity("slideDown", function() {
          $(".dropdown-closed").addClass("dropdown-open");
          $(".dropdown-closed").removeClass("dropdown-closed");
        });
        $(".i2").click(function() {
          anim_it.play(-1, function() {
            $(".dropdown-open").velocity("slideUp", function() {
              $(".dropdown-open").addClass("dropdown-closed");
              $(".dropdown-open").removeClass("dropdown-open");
            });
            $("#it").hide();
            $("#mighty").show();
            anim_mighty.play();
          });
        });
      });
    });
  });
  $(".i").mouseleave(function() {

    anim_mighty.play();

  });
});
