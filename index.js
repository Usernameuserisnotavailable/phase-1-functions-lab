// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    return Math.abs(42 - x);
}

function distanceFromHqInFeet(x) {
    return distanceFromHqInBlocks(x) * 264;
}

function distanceTravelledInFeet(x,y) {
    return Math.abs((x-y)*264);
}

function calculatesFarePrice(x,y){
    if (distanceTravelledInFeet(x,y) <= 400)
    return 0;
  
    else if (distanceTravelledInFeet(x,y) > 400 && distanceTravelledInFeet(x,y) <= 2000)
    return ((distanceTravelledInFeet(x,y)-400)*2)*.01;
  
    else if (distanceTravelledInFeet(x,y) > 2000 && distanceTravelledInFeet(x,y) <= 2500)
    return 25;
  
    //not at all how i assumed the && operator worked
  
    else if (distanceTravelledInFeet(x,y) > 2500)
    return 'cannot travel that far';
  }