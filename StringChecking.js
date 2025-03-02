let input1 = "Hello world";
let input2 = "   fly me   to   the moon  "

let findlength = (inputs)=>{
    inputs = inputs.trim();
    let arrcheck = inputs.split(" ");
    console.log(`The length of ${arrcheck[arrcheck.length-1]} is ${arrcheck[arrcheck.length-1].length}`);
}

findlength(input1);
findlength(input2);

let verifyanagram = (data1,data2)=>{
    if(data1.length == data2.length){
    if(data1.split('').sort().join('')==(data2.split('').sort().join(''))){
        console.log("String matched");
     return true;
    }else{
        console.log("String not matched");
       return false; 
    }
}else{
    console.log("String length itself not matched");
    return false; 
}
}
let bo1 = console.log(verifyanagram("listen","silent"));
let bo2 = console.log(verifyanagram("hellos","world"));
