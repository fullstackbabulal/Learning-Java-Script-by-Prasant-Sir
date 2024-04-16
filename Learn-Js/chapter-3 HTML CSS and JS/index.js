let bagPrice = (15599-(10/100*15599))-272;
let jeansPrice = (2499-(41/100*2499))-29;
let gst = (118/100);
let bagValue = Math.round((bagPrice+jeansPrice+25+20)*gst);
let bagSummary = `Your final Myntra Bag amount is ${bagValue}`;
console.log(bagSummary);
/* We are updating variable values */
let money = 1; // Variable Declearation
money += 5; // money = 6
money -= 2; // money = 4
money *= 3; // money = 12
money /= 4; // money = 3
money++;    // money = 4