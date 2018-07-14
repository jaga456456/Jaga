"use strict";

// px.import("px:scene.1.js").then(function (scene) {

//   var basePackageUri = px.getPackageBaseFilePath();

//   var urls = ["https://px-apps.sys.comcast.net/px_apps/showcase/img/dromaeo.png","http://www.pxscene.org/examples/px-reference/gallery/images/ajpeg.jpg", "https://px-apps.sys.comcast.net/px_apps/showcase/img/suite.png"];


//   var ready = urls.map(function (url) {
//     return scene.create({ t: "imageA", url: url, parent: scene.root }).animateTo({x:-360},1,scene.animation[interpolatorName],scene.animation.OPTION_OSCILLATE,scene.animation.COUNT_FOREVER).ready.catch(function (e) {
//       return null;
//     });
//   });

// });


px.import("px:scene.1.js").then( function ready(scene) {
  // var root = scene.root;
  // root.h = 1000;
  
  var basePackageUri = px.getPackageBaseFilePath();
  var urls = ["https://px-apps.sys.comcast.net/px_apps/showcase/img/dromaeo.png","http://www.pxscene.org/examples/px-reference/gallery/images/ajpeg.jpg", "https://px-apps.sys.comcast.net/px_apps/showcase/img/suite.png"];
 
  var w = 180;         //assign a width
  var h = 250;          //Height 
  var cal = 7;    
  var I = 0;     
var k=1;
  var ready = urls.map(function (url){
    return scene.create({t:"image9",parent: scene.root,url:url,x:(k%cal)*w,y:Math.floor(k/cal)*h,w:w,h:h,cx:w/2,cy:h/2,ry:1,rz:0}).animateTo({r:360},3,scene.animation.EASE_IN_ELASTIC, scene.animation.OPTION_LOOP, scene.animation.COUNT_FOREVER).ready.catch(function (e) {
            return null;
           });
        });
  });

