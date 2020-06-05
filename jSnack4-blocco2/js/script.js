// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.


var uno = [2, 10, 20];

var due = [6, 45, 89, 100, 3, 7, 1000, 74, 39, 83, 23, 5];

var i = 0;

while (uno.length != due.length) {

    if (uno.length > due.length) {

        var casuale = uno[Math.floor(Math.random() * uno.length)];
        due.push(casuale);
        console.log(due);

    } else if (due.length > uno.length) {
        var casuale = due[Math.floor(Math.random() * due.length)];
        uno.push(casuale);
        console.log(uno);

    }

    i++;
}


