//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
// Gatsby vuole generare una falsa lista di invitati.

var arrayNomi = ['tommaso', 'monica', 'francesco',];

var arrayCognomi = ['gialli', 'rossi', 'venza', 'poggianti'];

var vuoto = [];


function randomArray(array1, array2) {

    var rand = array1[Math.floor(Math.random() * array1.length)];

    var rand2 = array2[Math.floor(Math.random() * array2.length)];

    var rand3 = rand + ' ' + rand2;

    return rand3;

}


for (var i = 0; i < 10; i++) {
    
    nomeCasuale = randomArray(arrayNomi, arrayCognomi);

    vuoto.push(nomeCasuale);

}

console.log(vuoto);