// script.js

document.addEventListener("DOMContentLoaded", () => {
  const botaoOrdenar = document.getElementById("botaoOrdenar");
  const secaoCardapio = document.querySelector(".cardapio");

  botaoOrdenar.addEventListener("click", () => {
    const artigos = Array.from(secaoCardapio.querySelectorAll(".sabor"));

    artigos.sort((a, b) => {
      const nomeA = a.querySelector("h2").textContent.toLowerCase().trim();
      const nomeB = b.querySelector("h2").textContent.toLowerCase().trim();
      return nomeA.localeCompare(nomeB);
    });

    artigos.forEach((artigo) => secaoCardapio.appendChild(artigo));
  });
});
