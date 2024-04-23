let product = {
  name:'Tshirt',
  price: 789,
  rating:{
    stars: 4.5,
    noOfReviews: 453,
  },
};

// console.log(typeof product);
// console.log(product);
// let toStringConvert = JSON.stringify(product);
// console.log(typeof toStringConvert);
// console.log(toStringConvert);

// let toObject = JSON.parse(toStringConvert);
// console.log(toObject);

localStorage.setItem('Babulal', 'Mandal');
let stringifyObject = JSON.stringify(product);
localStorage.setItem('Product', stringifyObject);
console.log(localStorage.getItem('product'));
// localStorage.removeItem('Babulal');
// localStorage.clear();