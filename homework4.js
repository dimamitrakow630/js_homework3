function checkProbabilityTheory(count){
    let odds = 0;
    let evens = 0;

         for (let i = 0; i < count; i++){
    let number = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
         if(number % 2 === 0) {evens++} else {odds++}
         }
        

   return `total numbers: odds: ${odds}, evens: ${evens}, odds probability: ${odds / count}, evens probability: ${evens / count}`;
}
