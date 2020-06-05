// Fai inserire un numero, che chiameremo N, all’utente. 
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. 
// Ogni volta che ne crei uno, stampalo a schermo.


// chiedo un numero all'utente. In base a questo numero ciclerò l'array Generato
var numeroUtente = parseInt(prompt('inserisci un numero'));


for (var i = 0; i < numeroUtente; i++) {

    // questo array viene ciclato per le volte che l'utente ha specificato nel prompt
    var arrayGenerato = [];


    for (var k = 0; k < 10; k++)  {

        // imposto un numero casuale che verrà ciclato per 10 volte
        var numeroCasuale = Math.floor((Math.random() * 100) + 1);

        // ognuno dei 10 cicli appende un numero all'array Generato
        arrayGenerato.push(numeroCasuale);

    }

    console.log(arrayGenerato);
}


