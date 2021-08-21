//storing button element
const button = document.getElementById('checkBtn');

//adding click event
button.addEventListener('click',checkNumber);

function checkNumber(){
    //reading the input number
    let number = document.getElementById('inputElement').value;
    //validation
    if(isNaN(number)){
        alert("Please Enter a valid number");
    }
    else{
        //initializing an empty array
        let divisors = [];
        for(let i = 0;i<=number/2;i++){
            if(Number.isInteger(number/i)){
                //if the remainder is 0 , current value of i is stored into the array
                divisors.push(i);
            } 
        }
        //stores the sum of all the values in the array into sum
        let sum = divisors.reduce((total,value) => {
           return total+=value;
        })
        if(sum == number){
            alert(`${number} is a Perfect number`);
        }
        else if(sum < number){
            alert(`${number} is a deficient number`);
        }
        else{
            alert(`${number} is a abundant number`);
        }
    }
    //clears the input field in order to enter the next number
    document.getElementById('inputElement').value = "";
    
}