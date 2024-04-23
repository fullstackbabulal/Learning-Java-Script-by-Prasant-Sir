const source = document.querySelector('#code');

source.innerText = "Bababulal Mandal";

function ifPrime(num){
  for(let i = 2; i<num; i++ ){
    
    if(num % i ===0){
      return false;
    }
  }
  return true;
}

let num = 2;
let i = 0;
while(i<10){
  if(ifPrime(num)){
    console.log(num);
    i++;
  }
  num++;
}