// Crea due tag div con due id diversi: un div avrà il testo colorato di rosso mentre l’altro di verde. 
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


var numeri = [2, 89, 80, 100, 65, 68, 34, 33, 23, 18];

var y = [];
var x = [];

for (var i = 0; i < numeri.length; i++) {

    var numeroCorrente = numeri[i];
    
    
    if(numeroCorrente % 2 != 0) {

        //stampi nell'id rosso

        y.push(numeroCorrente); 
        
        var stampaDispari = document.getElementById('rosso');

        stampaDispari.innerHTML = y;

    } else if (numeroCorrente % 2 === 0){

        x.push(numeroCorrente);
        // stampi nell'id verde
        
        var stampaPari = document.getElementById('verde');

        stampaPari.innerHTML = x;
    }


}
console.log(y);
console.log(x);