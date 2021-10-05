function updateLight(current,green,yellow,red) {
 if (current=="green"){
   return "yellow"
 } else if (current=="yellow"){
   return "red"
 } else{
   return "green"
 }
}