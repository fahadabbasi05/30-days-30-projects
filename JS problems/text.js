
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]

function golfScore(par, strokes){
    if(strokes == 1){
        return names[0];
    }else if (strokes <= - 2){
        return names[1]
    }else if (strokes == par - 1){
        return names[2]
    }else if (strokes == par){
        return names[3]
    }else if(strokes par + 1)
}










// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"