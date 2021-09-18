function feast(beast, dish) {
let beastL = beast.split('').pop()
let dishL = dish.split('').pop()

return (beast[0] == dish[0] && beastL == dishL ) ? true : false


}