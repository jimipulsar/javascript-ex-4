var parola=prompt("Inserisci una parola: "), prova="";

for (i=parola.length-1; i >= 0; i--) {
  prova += parola.charAt(i);
}
  if (parola == prova) {
  document.write("<h2> Risposta esatta!</h2> <br>La parola <strong>" + prova + "</strong> è palindroma ");
  console.log("Hai vinto");
}
  else
  document.write("<h2> Risposta sbagliata!</h2> <br>La parola <strong>" + parola + " </strong>non è palindroma </br>");
