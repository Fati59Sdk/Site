let produit = localStorage.getItem("produit");
let quantite = localStorage.getItem("quantite");
let total = localStorage.getItem("total");

if (produit != null) {
    panier.innerHTML = `<p>${quantite} ${produit} soit ${total}€ TTC`;
}
else {
    panier.innerHTML = "Votre panier est vide";
}

