// Initial Logic for Calculating a Tip Using Ternary Operations
let Bill = 275;
let tip = Bill >= 50 && Bill <=300 ? (Bill * 0.15) : (Bill * 0.20);

    console.log(`Thanks for dining at Reeds Restaurant. Your Bill total is $${Bill}, the tip was $${tip}, and your total amount is $${Bill + tip}`);

//Create a function
function calculateTip (Bill) {
    let TipPercent = (Bill >= 50 && Bill <= 300) ? 0.15 : 0.20;
    return Bill * TipPercent
}

calculateTip(350)


//Implement and populate arrays for bills, tips, and totals
let bills = [275, 40, 430]
let tips = bills.map (bill => calculateTip(bill));
console.log (`The tips for bills 275, 40, and 430 are: $${tips}`)
let totals = bills.map (bills => calculateTip(bills) + bills)
console.log(`Your total bills, with tips included, are: $${totals}`)

