const x = 2;
console.log(x);
var y = 16;
var z;
while (Number.isInteger(y)) {
    
    z = y/x;
    y = z;

    if(y == 1)
    {
        break;
    }
}

console.log(y);

if(y == 2 || y == 1) {
    console.log("Verdadeiro");
}

else {
    console.log("Falso");
}