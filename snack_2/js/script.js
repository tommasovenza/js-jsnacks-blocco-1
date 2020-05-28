// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la
// parola più lunga.


// le parole

var parolaUno = prompt('Inserisci una parola');
var parolaDue = prompt('Inserisci una parola');


if (parolaUno.length < parolaDue.length) {
    alert('la prima parola è più corta rispetto alla seconda')
} else if (parolaDue.length === parolaUno.length) {
    alert('le parole hanno la stessa lunghezza');
} else {
    alert('la seconda parola è più corta');
}
