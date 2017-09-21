// Gather data
//

// pull settings from js/data.json
//

var pull_settings = new XMLHttpRequest();
var settings = "";
pull_settings.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    settings = JSON.parse(this.responseText);
    fb_req.open("GET", "https://graph.facebook.com/v2.10/me?fields=events.limit(3)&access_token=" + settings.fb_token, true);
    fb_req.send();
  }
};

var fb_req = new XMLHttpRequest();
fb_req.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    r = JSON.parse(this.responseText);
    for (var i in r.events.data) {
      document.getElementById("events").innerHTML += format_events(r.events.data[i]);
    }
  }
};

function format_events(obj) {
  var date = new Date(obj.start_time);
  return date.toDateString() + " @ " + obj.place.name + ", " + obj.place.location.city + ", " + obj.place.location.country + "<br/>";
}


var anim_mighty = new Vivus('mighty', {
  duration: 70,
  start: 'manual'
}, function(obj) {
  $(".m").flashfill();
  $(".i").delay(500).flashfill();
});
var anim_music = new Vivus('music', {
  duration: 50,
  start: 'manual'
});
var anim_it = new Vivus('it', {
  duration: 20,
  start: 'manual'
});
jQuery.fn.extend({
  flashfill: function() {
    $(this).velocity({
      fill: "#fff",
      fillOpacity: 1
    }, {
      duration: "500",
      complete: function(elements) {
        $(elements).velocity({
          fillOpacity: 0
        }, {
          duration: 500
        });
      }
    });
  }
});
$(document).ready(function() {
  pull_settings.open("GET", "js/data.json", true);
  pull_settings.send();

  anim_mighty.play();
  $(".m").mouseenter(function() {
    anim_mighty.play(-1, function() {
      $("#mighty").hide();
      $("#music").show();
      anim_music.play(function() {
        $(".dropdown.closed.music").velocity("slideDown", function() {
          $(".dropdown.closed.music").addClass("open");
          $(".dropdown.closed.music").removeClass("closed");
        });
        $(".m2").click(function() {
          anim_music.play(-1, function() {
            $(".dropdown.open.music").velocity("slideUp", function() {
              $(".dropdown.open.music").addClass("closed");
              $(".dropdown.open.music").removeClass("open");
              $("#music").hide();
              anim_mighty.reset();
              $("#mighty").show();
              anim_mighty.play();
            });
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
        $(".dropdown.closed.it").velocity("slideDown", function() {
          $(".dropdown.closed.it").addClass("open");
          $(".dropdown.closed.it").removeClass("closed");
        });
        $(".i2").click(function() {
          anim_it.play(-1, function() {
            $(".dropdown.open.it").velocity("slideUp", function() {
              $(".dropdown.open.it").addClass("closed");
              $(".dropdown.open.it").removeClass("open");
              $("#it").hide();
              anim_mighty.reset();
              $("#mighty").show();
              anim_mighty.play();
            });
          });
        });
      });
    });
  });

  $(".i").mouseleave(function() {
    anim_mighty.play();
  });

});
