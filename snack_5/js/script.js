// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.


var numero;

while (isNaN(parseInt(numero)) || (numero.length != 4)) {
    var numero = prompt('inserisci un numero di quattro cifre');
}

var numeroStringa = numero.toString();

var x = numeroStringa.split('');

console.log(x);

var somma = 0;
for (i = 0; i < x.length; i++) {

    y = parseInt(x[i]);

    somma = somma + y;

}

alert('la somma è dei numeri inseriti è ' + somma);


