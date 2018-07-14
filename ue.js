px.import("px:scene.1.js").then(scene=>{

 var my = scene.create({
  t:"rect",
  parent: scene.root,
  x:800, y:400,
  w:300, h:200,
  fillColor: 0xffff77ff,
  });
  my.animateTo({r:-360},2, scene.animation.COUNT_FOREVER);

 var x= scene.create({
    t: "text",                // Element type will be text
    parent: scene.root,       // Parent element
    text: "pxscene !",        // the text
    x: 580, y: 200,           // position
    textColor:0xFFFFFFff,     // RGBA - red text
    pixelSize:64              // font height
  });

x.animateTo({r:-360},2,scene.animation.OPTION_OSCILLATE,scene.animation.COUNT_FOREVER);

var x=100;
var y=200;
scene.create({t:"text",text:"how to turn off",textColor:0x707070ff,pixelSize:14,x:x+5,y:y+18,parent:scene.root})
.animateTo({r:-360},2,scene.animation.OPTION_OSCILLATE,scene.animation.COUNT_FOREVER);

// scene.create({t:"image",url:baseURL+"images/ball2.png",a:0.5,y:-40,parent:scene.root})
//     .animateTo({x:550},1,scene.animation[interpolatorName],scene.animation.OPTION_OSCILLATE,scene.animation.COUNT_FOREVER);
    
       
    var bg = scene.create({t:"rect",fillColor:0xffffffff,w:scene.getWidth(),h:scene.getHeight(),parent:scene.root});
    bg.animateTo({r:340},2, scene.animation.OPTION_OSCILLATE);

   
    // scene.create({t:"image",url:"http://pxscene.org/examples/px-reference/gallery/images/coverflow/8758522316428539112.jpg",a:0.5,y:-40,parent:line})
	  // .animateTo({x:550},1,scene.animation[interpolatorName],scene.animation.OPTION_OSCILLATE,scene.animation.COUNT_FOREVER);


}).catch(e=>{

  console.error("Import failed for fancy.js: " + e)

});