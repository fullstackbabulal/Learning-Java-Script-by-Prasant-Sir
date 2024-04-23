let product = {
productName: "Harrier",

productDescription: "The New Harrier symbolizes the unwavering spirit of young achievers in its latest avatar.",
productPrice:"₹24,49,000",
productFeatures:{
Wheels: "R18 Alloy Wheels with Aero Insert",
ADAS: "Advanced Driver Assistance System",
'7Airbags': 'Driver, Co-Driver, Side, Curtain & Driver Knee Airbags',

}

};

// Object D-Stucturing
// let {productName, productDescription, productPrice, productFeatures} = product;

// console.log(productFeatures);

// console.log(typeof product);
// let product2 = {
//   productName: "Jankiartstudio",
//   company: "Visulganj",
//   location: "Patna",
//   services:{
//     SEO: "Search Engine Optimization",
//     SocalMedia: "Socal Media Marketing",
//     GoogleAds: "Google Adwords"
//   }
// };

let product2 = {
  productName: "Harrier",

productDescription: "The New Harrier symbolizes the unwavering spirit of young achievers in its latest avatar.",
productPrice:"₹24,49,000",
productFeatures:{
Wheels: "R18 Alloy Wheels with Aero Insert",
ADAS: "Advanced Driver Assistance System",
'7Airbags': 'Driver, Co-Driver, Side, Curtain & Driver Knee Airbags',
}
};

function isIdenticalProduct(product, product2){
  if (typeof product !== 'object' || typeof product2 !== 'object'){
    console.warn('Parameter Passed was not an Object');
    return false;
  }else if(product == product2){
    return true;
  }else if (product.productName === product2.productName){
    return true;
  }else{
    return false;
  }
}

console.log(isIdenticalProduct(product,product2));