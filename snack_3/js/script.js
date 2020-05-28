// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

var somma = 0;
for (i = 1; i <= 5; i++) {

    var x = parseInt(prompt('chiedi un numero'));
    console.log(x);

    somma = somma + x;
    
}

console.log(somma);

