const button = document.getElementById('checkBtn');

button.addEventListener('click',checkYear);


function checkYear(){
   let year1 = document.getElementById('firstYear').value;
   let year2 = document.getElementById('secondYear').value;
   firstYear = year1.toString().slice(0,4);
   secondYear = year2.toString().slice(0,4);
   for(;firstYear<=secondYear;firstYear++){
       var d = new Date(firstYear,0,1);
       var day = d.getDay();
       if(day == 0){
           alert(`1st january of ${firstYear} is a sunday`)
       }
   }
}
