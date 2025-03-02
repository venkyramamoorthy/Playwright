let score = 70;


let fn= (score) =>{
    switch(score){
      case 50 : 
      var res = "Dgrade" ;
      break;
      case 60 : 
      var res = "Cgrade" ;
      break;
      case 70 : 
      var res = "Bgrade" ;
      break;
      case 80 : 
      var res = "Agrade" ;
      break;
      case 90 : 
      var res = "A+grade" ;
      break;
      default : 
      var res = "Fail" ;
    }
    return res;
}

let result = fn(score);
console.log(`Grade = ${result}`);