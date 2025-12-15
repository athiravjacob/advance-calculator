
const { exit } = require("process");
const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
class advanceCalculator {
  constructor() {
    console.log("Welcome To Advanced Calculator");
  }

  add(num1, num2) {
    return ( num1 + num2)
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    if (num2 === 0) return "Cannot divide by zero. Please try again.";
    else return num1 / num2;
  }
  square_root(S){
    if(S < 0) return NaN
    if (S === 0) return 0
    let guess = S/2
    let newGuess
    let difference=1
    while(difference > 0.00001){
        newGuess = (guess +S/guess)/2
        difference = Math.abs(guess - newGuess)
        guess=newGuess
    }
    console.log(newGuess)
    return newGuess
  }

   factorial(n) {
    if (typeof n === "number") n = BigInt(n);
    if (n < 0n) return "Factorial not defined for negative numbers";
    if (n === 0n || n === 1n) return "1";
  
    let fact = 1n;
    for (let i = 2n; i <= n; i++) {
      fact *= i;
    }
  
    // Always return as string to handle huge numbers
    return fact.toString();
  }

  power(base,exponent){
    if(exponent === 1) return 1
    let acc = 1 ,n = Math.abs(exponent)
    for(let i =1;i<=n;i++){
        acc *= base
    }
    if(exponent < 0) return 1/acc
    return acc
  }
  
}

let calc = new advanceCalculator();
askQuestion()
function askQuestion(){
rl.question(
  "Enter a number to do calculation \n 1.Add \n 2.Subtract \n 3.Multiply \n 4.Divide \n 5.Square Root \n 6.Factorial \n 7.Power \n",
  (choice) => {
    console.log(choice);
    
    if(["1","2","3","4"].includes(choice)){
        rl.question("Enter first Number  ", (num1) =>{
            rl.question("Enter next number  ", (num2) =>{
               let first = Number(num1)
                let sec = Number(num2)

                if (isNaN(first) || isNaN(sec)) {
                    console.log("You can only give numbers as input");
                    askQuestion()
                    return; 
                }
                
            
                switch(choice){
                    case "1": 
                        console.log(`${first} + ${sec} = `,calc.add(first,sec))
                        break
    
                    case "2" :
                        console.log(`${first} - ${sec} = `,calc.subtract(first,sec))
                       
                        break
    
                    case "3" :
                        console.log(`${first} *  ${sec} = `,calc.multiply(first,sec))
                    
                        break
                    case "4" :
                        if(sec === 0){
                            console.log("Cannot divide by zero" )
                      
                            break
                        }
                        console.log(`${first} / ${sec} = `,calc.divide(first,sec))
                        break
                   
                }
                setTimeout(()=>{
                    if(choice !=="6") askQuestion()
                else rl.close()
                },1000)
                
            });
         
        });
    }
    else if(choice === "5"){
        rl.question("Enter a number to find square root",(num)=>{
            let S = Number(num)
            if(isNaN(S)){
                console.log("Not a number")
                return
            }
            console.log(`Square root of ${S} = `,calc.square_root(S))
            askQuestion()
        })

    }
    else if(choice === "6"){
        rl.question("Enter a number to find factorial",(num)=>{
            if(isNaN(num)) {
                console.log("Input should be number")
                exit
            }
            
            console.log(`Factorial of ${n} = `, calc.factorial(n))
            askQuestion()
        })

    }
    else if(choice === "7"){
        rl.question("Enter the base",(base)=>{
            rl.question("Enter the exponent",(exponent)=>{
                if(isNaN(base) || isNaN(exponent)) {
                    console.log("Input should be number")
                    exit
                }
                console.log(`${base} raise to ${exponent} = `, calc.power(Number(base),Number(exponent)))
                 askQuestion()
            })
            
            
            
        })

    }
    else if(choice === "7") {
        console.log("Thankd for using calculator.See you")
        rl.close()
    }
    else{
        console.log("Invalid choice")
        askQuestion()
       
    }
   
   
   }
  
);}
