let num = 1600;
if(num < 100){
    console.log("No discount is applied")
}else if(num >=100 && num <=500){
    let D = (num*5/100)
    console.log(D)
     let amt =(num -  D);
    console.log( amt )
}else if(num >=500 && num <=1000){
let D1 = (num*10/100)
console.log(D1)
let tamount = (num - D1)
console.log(  tamount)
}else{
    let D2 = (num*15/100)
    console.log(D2)
    let camt = (num - D2)
    console.log(camt)
}