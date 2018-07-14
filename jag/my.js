"use strict";
var programs = {"programs":[
    {
        "title" : "Picture Pile",
        "description" : "A Screen Saver App",
        "type" : "Spark",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/picpile.png",
        "attributes" : [
          { "url":"http://www.pxscene.org/examples/px-reference/gallery/picturepile.js" }
        ]
      },
      {
        "title" : "Polaroid Picture Pile",
        "description" : "Used to launch PxScene application",
        "type" : "Spark",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/ppp.png",
        "attributes" : [
          { "url":"http://www.pxscene.org/examples/px-reference/polaroid/pp_polaroid.js?numimages=5" }
        ]
      },
      {
        "title" : "Fish Tank",
        "description" : "A virtual fish tank showing some graphics capabilities of Spark",
        "type" : "Spark",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/fishtank.png",
        "attributes" : [
          { "url":"http://www.pxscene.org/examples/px-reference/gallery/fishtank/fishtank.js" }
        ]
      },
      {
        "title" : "Coverflow",
        "description" : "UI Design Concept",
        "type" : "Spark",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/coverflow.png",
        "attributes" : [
          { "url":"https://px-apps.sys.comcast.net/pxscene-samples/examples/px-reference/gallery/coverflowtest_v2.js" }
        ]
      },
      {
        "title" : "Animated PNGs",
        "description" : "A sample of some animated PNG images",
        "type" : "Spark",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/apng.png",
        "attributes" : [
          { "url":"http://www.pxscene.org/examples/px-reference/gallery/apng1.js" }
        ]
      },
      {
        "title" : "Play Mask",
        "description" : "Rotating Images",
        "type" : "Spark",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/playmask.png",
        "attributes" : [
          { "url":"http://www.pxscene.org/examples/px-reference/gallery/playmask.js" }
        ]
      },
      {
        "title" : "Gallery 3",
        "description" : "A gallery of nested scenes",
        "type" : "Spark",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/gallery3.png",
        "attributes" : [
          { "url":"http://www.pxscene.org/examples/px-reference/gallery/gallery3.js" }
        ]
      },
      {
        "title" : "Horoscopes",
        "description" : "Your source for astrology",
        "type" : "Spark",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/horoscopes.png",
        "attributes" : [
          { "url":"https://px-apps.sys.comcast.net/px_apps/horoscopes/horoscopes.js" }
        ]
      },
      {
        "title" : "Bluetooth Audio In",
        "description" : "Play music from your Bluetooth enabled device",
        "type" : "Spark",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/btaudioin.png",
        "attributes" : [
          { "url":"https://px-apps.sys.comcast.net/px_apps/bluetooth-audio-in-app/app.js" }
        ]
      },
      {
        "title" : "Sleep Timer",
        "description" : "Set a timer for your TV to go to sleep when you do",
        "type" : "Spark",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/sleeptimer.png",
        "attributes" : [
          { "url":"https://px-apps.sys.comcast.net/px_apps/sleep-timer/sleep-timer.js" }
        ]
      },
      {
        "title" : "Fandango",
        "description" : "Get your movie tickets here",
        "type" : "Spark",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/fandango.png",
        "attributes" : [
          { "url":"http://d243sour89mi5g.cloudfront.net/xre/pxscene/fandango/0.0.2/fandango.js?zipCode=19103" }
        ]
      },
      {
        "title" : "TopCoder Showcase",
        "description" : "A Video Listing App",
        "type" : "Spark",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/showcase.png",
        "attributes" : [
          { "url":"http://showcase-prototype.herokuapp.com/" }
        ]
      },
      {
        "title" : "Web App Demo",
        "description" : "Used to launch web application",
        "type" : "WebApp",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/dromaeo.png",
        "attributes" : [
          { "url":"http://dromaeo.com/" }
        ]
      },
      {
        "title" : "XRE Test Suite",
        "description" : "Used to perform various XRE related test cases",
        "type" : "XRE",
        "image" : "https://px-apps.sys.comcast.net/px_apps/showcase/img/suite.png",
        "attributes" : [
          { "url":"xre://tvxxre-ci-h2zjpp.x1.xcal.tv:10004/suite" }
        ]
      }
  ]};

px.import("px:scene.1.js").then( function ready(scene) {
    var root = scene.root;

    var w = 180;         //assign a width
    var h = 250;          //Height 
    var cal = 7;
    var progs = programs.programs;    
    var I = 0;                

    for(var j = 1; j <= 14; j++) {
              var url = progs[I++].attributes;
              var k = j-1;
            
              var mun = scene.create({ t:"image9",parent: root,url:url,x:(k%cal)*w,y:Math.floor(k/cal)*h,w:w,h:h,cx:w/2,cy:h/2,ry:1,rz:0});    
              mun.animateTo({r:360},4,scene.animation.TWEEN_LINEAR,scene.animation.OPTION_LOOP,scene.animation.COUNT_FOREVER);
             // mun.animateTo({ x:23, y:23 }, 2, scene.animation.EASE_IN_ELASTIC, scene.animation.OPTION_LOOP, scene.animation.COUNT_FOREVER);
              mun.animateTo({sx:0.8,sy:0.9},1,scene.animation.EASE_IN_ELASTIC, scene.animation.OPTION_LOOP, scene.animation.COUNT_FOREVER);
}
});
            
// how to put a background image for the output
