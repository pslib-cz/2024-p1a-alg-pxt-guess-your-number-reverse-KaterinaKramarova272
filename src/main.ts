function getNumber(): number {
    let cislo: number;
    do {
      cislo = Number(window.prompt("Zadej číslo"));
      console.log("ready number: ", cislo);
    } while (Number.isNaN(cislo));
    return cislo;
  }
  function randInt(min: number, max: number): number {
    return min + Math.round(Math.random() * (max - min));
  }
  
  let userinput: number = 0
  let pokusy: number = 0;
  let min: number = 1
  let max: number = 100
  userinput = getNumber ()
  getNumber()
  
  while (true) {
    let guessNumber: number = randInt (min, max)
    console.log ("guessNumber", guessNumber)
    if (guessNumber === userinput ) {
      break
    }
    if (guessNumber > userinput) {
      console.log ("Číslo je menší")
      pokusy = pokusy + 1
      max = guessNumber - 1 
    }
    if (guessNumber < userinput) {
      console.log ("Číslo je větší")
      pokusy = pokusy + 1
      min = guessNumber + 1
    }
    console.log ("Uhádl jsi číslo. Pokusů:", pokusy) 
  }
  
  
  
  
  
  
  
  
  