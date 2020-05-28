// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.


// l'array degli invitati alla festa
var arrayInvitati = ['tommaso', 'monica', 'ernesto', 'tizio', 'caio', 'sempronio'];

// chiedo il nome all'utente
var ask = prompt('qual è il tuo nome?');

// imposto variabile di ingresso come falsa
var ingresso = false;

// ciclo for
for (i = 0; i < arrayInvitati.length; i++) {

    if (arrayInvitati[i] === ask ) {
        ingresso = true;
    }
}

if (ingresso) {
    alert('sei invitato, entra!');
} else {
    alert('mi dispiace, non sei invitato!');
}