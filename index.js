var ar=[1,2,3,4,5];

var arMap = ar.map(demoMap);

function demoMap(value){
    return value*2;
}

console.log('map',arMap);
//map will give a array


// for each
var forLop = ar.forEach(demoFor)

function demoFor(value){
   return value*3;
}
//forEach will give undefined 

console.log('For',forLop);