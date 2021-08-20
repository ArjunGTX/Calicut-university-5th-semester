let radius = 10;


function area(radius){
    let area =  radius*radius*3.14;
    console.log(`Area of circle is ${area.toPrecision(4)}`);
}

function circumference(radius){
    let circumference = 2*3.14*radius;
    console.log(`Circumference of the circle is ${circumference.toPrecision(4)}`);
}
area(radius);
circumference(radius);
