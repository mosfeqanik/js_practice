var firstNumber = prompt('Put Your Number');
console.log(firstNumber);

var secondNumber = 10;
console.log(secondNumber);

var firstpersonName = "Mosfeq";
console.log(firstpersonName);

var bazarList = ['chaal','daal','Soybean Oil'];

console.log(bazarList);

var newbazarList = ['chaal','daal','Soybean Oil',['mangsher mosla','macher mosla']];

console.log(newbazarList);
console.log(newbazarList[3][0]);

if(firstNumber%2==0){
    alert(firstNumber + " is even"); 
}else{
    alert(firstNumber + " is odd");
}

var seriesofNumber = [11,22,34,54,5,6,7,8,9,10];

for (let i = 0; i < seriesofNumber.length; i++) {
    const element = seriesofNumber[i];
    const index = i;
    console.log(`index ${i} = ${element}`);
    //console.log("index" + i + element);
}

function SumOfTwoNumber(firstNumber,secondNumber){
    return result = firstNumber + secondNumber;
}
var sumResult = SumOfTwoNumber(20,10);
console.log(sumResult);
console.log("sum of two number is " + SumOfTwoNumber(20,10));