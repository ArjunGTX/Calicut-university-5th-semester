let side1 = prompt("Enter the first side",);
let side2 = prompt("Enter the second side",);
let side3 = prompt("Enter the third side",);

if(isNaN(side1)||isNaN(side2)||isNaN(side3)){
    alert("Please enter  valid numbers");
}
else if(side1==0||side2==0||side3==0){
    alert("These sides cannot form a triangle")
}

else if((side1 == side2)&& (side1==side3)&&(side2== side3)){
    alert("These sides can form an equilateral triangle");
}
else if((side1==side2)||(side1==side3)||(side2==side3)){
    alert("These sides can form an isosceles triangle");
}
else{
    alert("These sides can form a scalene triangle");
}
