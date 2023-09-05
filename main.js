//Name: Christian Cruz Marcial
    console.group("Excercise 1");
    console.log("Hello World!");
    console.groupEnd;
    
    console.group("Excercise 2");
    const myName = "Christian";
    console.log(myName);
    console.groupEnd;

    
    console.group("Excercise 3");
    const length = 20;
    const width = 40;
    console.log(length * width);
    console.groupEnd;

    //excercise 4
    console.group("Excercise 4");
    const n = 64654;
    if (AudioDestinationNode & 1){
        console.log("Odd");
    }else{
        console.log("Even")
    }
    console.groupEnd;

    //excercise 5
    console.group("Excercise 5");
    const numbers = [
        {value: "1"},
        {value: "2"},
        {value: "3"},
        {value: "4"},
        {value: "5"},
        {value: "6"},
        {value: "7"},
        {value: "8"},
        {value: "9"},
        {value: "10"},
    ]
    
    for (let i = 0; i <= 10; i++) {
        console.log(numbers[i]);
    }
    console.groupEnd;

    //excercise 6
    console.group("Excercise 6");
    const name = prompt ('Enter your name:');
    if (name != null){
        console.log("hello " + name + "! How are you today?");
    }
    console.groupEnd;

    console.group('Excercise 7')
    function fact(x) {
        if(x === 0 || x === 1) {
            return 1;
        }
        if(x < 0 ) {
            return undefined;
        }
        for(var i = x - 1; i >= 1; i--) {
            x *= i;
        }
        return x;
        
    }
    let x = prompt("Please enter a number to be factored");
    console.log(fact(x));
    console.groupEnd;
    
    console.group('Excercise 8')
    function findLeap(year){
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
    let year = prompt("Please enter a year and see if it was a leap year");
    console.log(findLeap(year));
    console.groupEnd;
    
    console.group('Excercise 9');

        let total = 0;
        let count = 0;
        while (count < 100){
         count++;
         total += count;   
        }
        console.log(total);
    
    console.groupEnd;

    console.group('Excercise 10');
function math(){
    console.log('addition:' + n1+n2);
    console.log('substraction:' + n1-n2);
    console.log('multiplication:' + n1*n2);
    console.log('division:' + n1/n2);
}
let n1 = prompt("Please enter any number"); 
let n2 = prompt("Please enter a second number"); 
console.log(math())
    console.groupEnd

    console.group('excercise 11');
    let string = 'hello';
    console.log(string)

    let number = 69;
    console.log(number);
    
    const B = Boolean(false);
    if (B){}
    
    console.log(B);
    let no = null;
    no;
    
    console.log(typeof(no));
    let undefind = undefined;
    
    console.log(undefind);
    let obj = number;
    
    console.log(obj);
    let array = ['green', 'blue', 'red'];
    
    console.log(array);
    let none = '';
    console.log(none);
    
    console.groupEnd;