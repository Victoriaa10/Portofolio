var pageLocation= [],
    lastPage= null;
    zi=1;


TweenLite.set(".pageBg", {xPercent:-50, yPercent: -50});
TweenLite.set(".page", {transformStyle:"preserve-3d"});
TweenLite.set(".back", {rotationY:-180});

$(".page").click(
function() {
	if ($(window).width() >= 760){
    if (pageLocation[this.id] === undefined || pageLocation[this.id] =="right") {
      zi = ($(".left").length)+1 ;
      TweenMax.to($(this), 1, {force3D:true,rotationY:-180,transformOrigin:"-1px top",className:'+=left',z: zi ,zIndex: zi}); 
      TweenLite.set($(this), {className:'-=right'}); 
      pageLocation[this.id]= "left";
    }
    else {
      zi = ($(".right").length)+1 ;
      TweenMax.to($(this), 1, {force3D:true,rotationY:0,transformOrigin:"left top",className:'+=right',z: zi, zIndex: zi});
      TweenLite.set($(this), {className:'-=left'}); 
      pageLocation[this.id]= "right";
    }
  }
}
);





