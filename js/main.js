var svg_anim = new Array('');

var vivus_init = function(objects) {
  for (var i = 0; i < objects.length; i++) {
    svg_anim[i] = new Vivus(objects[i], {
      duration: 100,
      start: 'manual',
      reverseStack: true
    }, function(obj) {
      obj.el.classList.add('finished');
      obj.el.style.fillOpacity = 1;
      obj.el.style.strokeOpacity = 0;
    });
  }
};
function draw_all() {
    console.log(svg_anim);
    for(var i=0;i<svg_anim.length;i++) {
      svg_anim[i].play();
    }
  }
$(document).ready(function() {
    vivus_init($(".anim"));
    svg_anim[0].play();
  $(".m").click(function() {
    window.open("http://soundcloud.com/mightydread", '_blank');
  });
  $(".m").mouseenter(function() {
    svg_anim[0].play(-1);
    $("#mighty").hide();
    $("#music").show();
    svg_anim[1].play();
  });
  $(".m").mouseleave(function() {
    $("#music").hide();
    $("#mighty").show();
  });
  $(".i").mouseenter(function() {
    $("#mighty").hide();
    $("#it").show();
    svg_anim[2].play();

  });
  $(".i").mouseleave(function() {
    $("#it").hide();
    $("#mighty").show();
  });
});
