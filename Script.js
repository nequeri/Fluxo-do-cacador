const quotes = [
  "Corte o ruído. Ouça só o que te move.",
  "Destrua a versão fraca de si mesmo hoje.",
  "Você é a lâmina e o ferreiro.",
  "O caos é o solo do seu domínio.",
  "Seu fluxo é seu trono. Encontre-o. Sente nele."
];

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}
