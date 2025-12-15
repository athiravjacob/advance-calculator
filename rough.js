//square root using Babylonian method 
// Itreate until last guess and new guess difference is very minimal 
function square_root(s){
    guess = s/2
    appr=1
   while(appr > 0.00001){
        newguess = (guess +s/guess)/2
        appr =Math.abs( newguess - guess)
        guess = newguess
       
        
    }
    console.log(newguess)
}

//Factorial of 36525

function factorial(n){
    let fact = 1n
   for(let i = n; i>=1n;i--){
    fact = fact* i
   }
   return fact
}

console.log("factorial of 36525 is ",factorial(3n))