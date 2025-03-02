let input = "neennaan";
let output = "";

let check = (data) => {
    let check = data.split("");
    for(let i=check.length-1;i>=0;i--){
        output = output + check[i];
    }
}

function verify(){
if(input == output){
    console.log("Given String is a Palindrome")
}else{
    console.log("Given String is not a Palindrome")
}
}

check(input);
console.log(output);
verify();