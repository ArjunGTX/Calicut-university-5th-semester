//storing button element
const button = document.getElementById('checkBtn');

//adding click event
button.addEventListener('click',checkPrime);

function checkPrime(){
    //reading the input number
    let number = document.getElementById('inputElement').value;
    //validation
    if((isNaN(number))||number<=0){
        alert("Please Enter a non-zero number");
    }
    else{
        var flag = 0;//setting a test value
        for(let i = 2;i<=number/2;i++){
            if(Number.isInteger(number/i)){
                //if the remainder is 0,test is set to 1
                flag = 1;
                
            }
            break;
        }
        switch(flag){
            case 0: alert(`${number} is a prime number`);
            case 1: alert(`${number} is not a prime number`);
        }
    }
    document.getElementById('inputElement').value = "";
}