broswer = "safari";

let launchBrowser = function(browser) {
 if(browser == "chrome"){
   console.log(`${browser} is launched`);
 }else {
   console.log(`${browser} is launched`)
 }
  
}
launchBrowser(broswer);

let testType = "BN";


let arrow = (test) =>{
    switch(test){
        case "R" : console.log(`${test} is a Regression test`);
        break;
        case "S" : console.log(`${test} is a Smoke test`);
        break;
        case "SA" : console.log(`${test} is a Sanity test`);
        break;
        default : console.log(`${test} is a Default manual test`);
    }
}

arrow(testType);
