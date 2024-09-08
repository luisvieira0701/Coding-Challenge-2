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