let quantiteProduit1 = document.querySelector("#quantiteProduit1");
let produit1 = document.querySelector("#produit1");
let total = 0;
let produit ="";

produit1.addEventListener("submit", cart);

function cart(e) {
    e.preventDefault();
    produit =  "Ouija 1";
    total = quantiteProduit1.value * 20;
    localStorage.setItem("total", total);
    localStorage.setItem("quantite", quantiteProduit1.value);
    localStorage.setItem("produit", produit);
    window.location.href = "./panier.html";
}

function remove() {
    localStorage.removeItem("total");
    localStorage.removeItem("quantite");
    localStorage.removeItem("produit");

}