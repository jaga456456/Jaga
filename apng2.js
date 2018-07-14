"use strict";

px.import("px:scene.1.js").then(function (scene) {                  //Importing the scene1.js
  var root = scene.root;                                            //assigning te rootof scene
  var basePackageUri = px.getPackageBaseFilePath();                 //assigning the package file path to to basePackageUri variable

  var txt1 = scene.create({ t: "text", text: "", parent: root, pixelSize: 64 });             // Text scene is created 

  var url = "http://www.pxscene.org/examples/px-reference/gallery/images/apng/spinfox.png";         // assigning the image file to url
  var ball = scene.create({ t: "image", w: 400, h: 400, url: url, parent: root });                 // creating am image scene
  ball.ready.then(function () {                             //promise for the object of ball image                                        
    ball.cx = ball.w/2 ;
    ball.cy = ball.h/2 ;

    fancy(ball);
  });
  function fancy(o) {
    var startX = 520;
    var startY = 210;

    // animate x and restart the overall animation at end
    o.x = startX;
   // o.y = startY;
    o.animateTo({ x: 50 }, 4.0, scene.animation.TWEEN_LINEAR, scene.animation.OPTION_LOOP,1).then(function (o) {
      o.animateTo({ x: startX }, 4.0, scene.animation.EASE_OUT_ELASTIC, scene.animation.OPTION_LOOP, 1).then(function (o) {
        fancy(o);
      });
    });         //animation for the x position with tween linear and elastic ease out

    // // animate y
    o.y = startY;
    o.animateTo({ y: 350 }, 4.0, scene.animation.EASE_OUT_BOUNCE, scene.animation.OPTION_LOOP, 1).then(function (o) {
      o.animateTo({ y: startY }, 4.0, scene.animation.EASE_OUT_ELASTIC, scene.animation.OPTION_LOOP, 1);
      }); 

    // animate r
    o.r = 0;
    o.animateTo({ r: 360 }, 2.5, scene.animation.EASE_OUT_ELASTIC, scene.animation.OPTION_LOOP, 1);

    // animate sx, sy
    // o.animateTo({ sx: 0.2, sy: 0.2 }, 1, scene.animation.TWEEN_LINEAR, scene.animation.OPTION_LOOP, 1).then(function (o) {
    //   o.animateTo({ sx: 2.0, sy: 2.0 }, 1.0, scene.animation.TWEEN_EXP1, scene.animation.OPTION_LOOP, 1).then(function (o) {
    //     o.animateTo({ sx: 1.0, sy: 1.0 }, 1.0, scene.animation.EASE_OUT_ELASTIC, scene.animation.OPTION_LOOP, 1);
    //   });
    // });
  }

//   onMouseDown - parameter object has properties: x, y, flags*
//   onMouseUp - parameter object hasproperties: x, y, flags*
//   onMouseMove - parameter object has properties: x, y*
//   onMouseEnter - parameter object has properties: target, stopPropagation()
//   onMouseLeave - parameter object has properties: target, stopPropagation()
//   onFocus - parameter object has properties: target, stopPropagation()
//   onBlur - parameter object has properties: target, loseFocusChain, stopPropagation() -
// onKeyDown - parameter object has properties: target, keyCode, flags, stopPropagation()
// onKeyUp - parameter object has properties: target, keyCode, flags, stopPropagation()
// onChar - parameter object has properties: target, charCode, stopPropagation()
// onResize - parameter object has properties w, h *
// onClose - parameter object no properties 
// onClose indicates the object scene is destructed and garbage collected

  scene.on("onMouseUp", function (e) {            //mouse move event on mouse down, on mouse up
    txt1.text =  e.x + ", " + e.y;
  });

  function updatePosition(w, h) {
    txt1.y = h - txt1.h;
  }

  scene.on("onResize", function (e) {
    console.log("fancy resize", e.w, e.h);
    updatePosition(e.w, e.h);
  });
  updatePosition(scene.getWidth(), scene.getHeight());
}).catch(function (e) {
  console.error("Import failed for fancy.js: " + e);
});
