let form = document.getElementById('formBlock');
let bill = document.getElementById('bill');
let  NPeople = document.getElementById('N_people');
let five = document.getElementById('fivebtn');
let ten = document.getElementById('tenbtn');
let fifteen = document.getElementById('fifteenbtn');
let twenty = document.getElementById('twbtn');
let fifty = document.getElementById('fiftybtn');
let custom = document.getElementById('Custombtn');
//sometimes the solution may be easier than you think
//look at line 15 and you will see the solution you were searching


alert("to submit just press the percentage buttons or press Enter on the custom!");
custom.addEventListener("click", function(event) {
   event.preventDefault()
})
form.addEventListener("click", function(event){
    event.preventDefault();
});
function tipCalc(choice) {
   switch (choice) {
      case 5: 
         let amount5 = bill.value
         let result5 = (amount5 / 10) /2
         return Number(result5)
      case 10: 
         let amount10 = bill.value
         let result10 = (amount10/10)
         return Number(result10)
      case 15:
         let amount15 = bill.value
         let result15 = (amount15/10) + ((amount15/10)/2)
         return Number(result15)
      case 25:
         let amount25 = bill.value
         let result25 = ((amount25/10) * 2) + ((amount25/10) / 2)
         return Number(result25)
      case 50:
         let amount50 = bill.value
         let result50 = (((amount50/10) * 2) + ((amount50/10) / 2)) + (((amount50/10) * 2 ) + ((amount50/10) /2))
         return Number(result50)
   }
}

function totalPP(choice) {
   switch (choice) {
      case 5:
         let amount5 = bill.value
         let NumberP5 = NPeople.value
         let TotalAmount5 = Number(amount5) + Number(tipCalc(5))
         let TotalPPerson5 = TotalAmount5 / NumberP5                         
         return TotalPPerson5.toFixed(2) 
      case 10:
         let amount10 = bill.value                                               
         let NumberP10 = NPeople.value                                            
         let TotalAmount10 = Number(amount10) + Number(tipCalc(10))                  
         let TotalPPerson10 = TotalAmount10 / NumberP10                         
         return TotalPPerson10.toFixed(2) 
      case 15:
         let amount15 = bill.value                                               
         let NumberP15 = NPeople.value                                            
         let TotalAmount15 = Number(amount15) + Number(tipCalc(15))                  
         let TotalPPerson15 = TotalAmount15 / NumberP15                         
         return TotalPPerson15.toFixed(2)
      case 25:
         let amount25 = bill.value                                               
         let NumberP25 = NPeople.value                                            
         let TotalAmount25 = Number(amount25) + Number(tipCalc(25))                  
         let TotalPPerson25 = TotalAmount25 / NumberP25                         
         return TotalPPerson25.toFixed(2) 
      case 50:
         let amount50 = bill.value                                               
         let NumberP50 = NPeople.value                                            
         let TotalAmount50 = Number(amount50) + Number(tipCalc(50))                  
         let TotalPPerson50 = TotalAmount50 / NumberP50
         return TotalPPerson50.toFixed(2)
      case 100:
         let amountCus = bill.value                                               
         let NumberPCus = NPeople.value                                            
         let TotalAmountCus = Number(amountCus) + Number(custom.value)                  
         let TotalPPersonCus = TotalAmountCus / NumberPCus                         
         return TotalPPersonCus.toFixed(2) 
   }
}
function send(choice) {
   if (choice == 5) {
      console.log("hey i'm five") 
      document.getElementById('tipAP').innerHTML = '$' + tipCalc(5)
      document.getElementById('totalP').innerHTML = '$' + totalPP(5)
   } else if (choice == 10) {
      console.log("hey i'm ten")
      document.getElementById('tipAP').innerHTML = '$' + tipCalc(10)             
      document.getElementById('totalP').innerHTML = '$' + totalPP(10)
   } else if (choice == 15) {
      console.log("hey i'm fifteen")
      document.getElementById('tipAP').innerHTML = '$' + tipCalc(15)             
      document.getElementById('totalP').innerHTML = '$' + totalPP(15)
   } else if (choice == 25) {
      console.log("hey i'm twenty five")
      document.getElementById('tipAP').innerHTML = '$' + tipCalc(25)             
      document.getElementById('totalP').innerHTML = '$' + totalPP(25)
   } else if (choice == 50) {
      console.log("hey i'm fifty")
      document.getElementById('tipAP').innerHTML = '$' + tipCalc(50)             
      document.getElementById('totalP').innerHTML = '$' + totalPP(50)
   } else if (choice == 100) {
      document.getElementById('tipAP').innerHTML = '$' + Number(custom.value)
      document.getElementById('totalP').innerHTML = '$' + totalPP('c')
   }

};

function reset() {
   document.getElementById('tipAP').innerHTML = '$'
   document.getElementById('totalP').innerHTML = '$'
}

 document.getElementById('reset_btn').style.backgroundColor = "hsl(172, 67%, 45%)";
