
domanda_gioco(prompt("Vince pari o dispari?"), parseInt(prompt("Inserisci un numero da 1 a 5")));

function domanda_gioco(regola_utente, numero_utente) {
  var vittoria_utente_pari = vittoria_pari(regola_utente);
  document.writeln("<br>Hai scelto il numero " + numero_utente + "<br>");
  var numero_cpu = numero_generato_cpu(5);

  function vittoria_pari(regola_utente) {
  if (regola_utente == "pari") {
    console.log("Si vince con un numero pari");
    return true;
  }
  console.log("Si vince con un numero dispari");
  return false;
}

  function numero_generato_cpu(numeroMassimo) {
  var numero_cpu = Math.ceil(Math.random() * numeroMassimo);
  document.writeln("<br> Il Computer ha scelto il numero " + numero_cpu + "<br>");
  return numero_cpu;
}

var somma_selezionati = numero_utente + numero_cpu;
document.writeln("<br>Il risultato finale è <strong>" + somma_selezionati + "<br>");

if ((vittoria_utente_pari && somma_selezionati % 2 === 0) || (!vittoria_utente_pari && somma_selezionati % 2 != 0)) {
  document.writeln("<br><h2> Congratulazioni! Hai vinto</h2>");
}

else {
  document.writeln("</strong><h2>Hai perso! Computer vince!</h2>");
  }
}
