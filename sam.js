 px.import("px:scene.1.js").then( function ready(scene) 
    {  
        // Delegate for Clearscreen
        module.exports.wantsClearscreen = function()
        {
            return false;
        };

        // additional code for pxscene JS app
    

    }).catch( function importFailed(err){
      console.error("Import failed for myApp.js: " + err)
    });
