// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

// 1- Richiede all'utente un numero
var numCell = prompt("inserisci un numero da 1 a 100");

// 2- creo il mio programma che inserisce il numero di quadrati indicati dall'utente
for (var i = 1; i <= numCell; i++) {
    document.getElementById("scacchiera").innerHTML += `<div class="quadrato">${i}</div>`;
}

// 3- Creo l'evento al "click" dell'utente, che colora il quadrato e fa uscire l'alert con il numero del quadrato selezionato
document.getElementById("scacchiera").addEventListener("click",
    function(event) {
        event.target.classList.toggle("cliccato");
        alert(event.target.innerHTML);
    }
);