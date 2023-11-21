// Consegna:

// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz”,
// al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?:faccia_nerd:
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
// BONUS 1:
// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna

const start = document.getElementById("start");
const container =document.querySelector(".container");

start.addEventListener("click", 
    
    function() {

        for (let i = 1;  i <=100; i++) {

            const col = document.createElement("div");
        
            col.classList.add("col");
        
            container.append(col);
        
            if (i % 3 === 0 && i % 5 === 0) {
                console.log ("FizzBuzz");
                col.classList.add("fizzbuzz-color");
                col.append ("FizzBuzz");
            
            } else if (i % 3 === 0){
                console.log ("Fizz");
                col.classList.add("fizz-color");
                col.append ("Fizz");
        
            } else if (i % 5 === 0) {
                console.log("Buzz");
                col.classList.add("buzz-color");
                col.append ("Buzz");
                
            } else {
                console.log(i);
                col.classList.add("color-number");
                col.append (i);     
            }   
        }

        const showContainer = document.querySelector(".container");
        showContainer.classList.add("active")

    }
)
