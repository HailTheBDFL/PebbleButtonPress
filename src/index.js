Pebble.addEventListener("ready", function(e) {});
Pebble.addEventListener("appmessage", function(e) {            
 switch(e.payload.message) {
    case 1:        
        // code on up
        break;
    case 2:        
        // code on long-up
        break;
    case 3:          
        // code on select
        break;
    case 4:   
        // code on long-select
        break;
    case 5:        
        // code on down
        break;
    case 6:        
        // code on long-down
        break;
    default:
        console.log('Case Default / Error');        
      }  
});
