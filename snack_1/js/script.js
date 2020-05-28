// L’utente inserisce due numeri in successione, con due prompt. 
// Il software stampa il maggiore.

// i due numeri
var numeroUno = parseInt(prompt('inserisci un numero'));
var numeroDue = parseInt(prompt('inserisci un numero'));

if (numeroUno > numeroDue) {
    alert('il primo numero è maggiore');
} else if (numeroDue === numeroUno ) {
    alert('i numeri sono uguali');
} else {
    alert('il secondo numero è maggiore');
}

