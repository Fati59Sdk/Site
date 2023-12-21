let item1 = document.querySelector("#item1");
let item2 = document.querySelector("#item2");
let item3 = document.querySelector("#item3");


item1.addEventListener("mouseover", voir1);
item1.addEventListener("mouseout", devoir1);
item2.addEventListener("mouseover", voir2);
item2.addEventListener("mouseout", devoir2);
item3.addEventListener("mouseover", voir3);
item3.addEventListener("mouseout", devoir3);


function voir1() {  
        horreur1.style.display = "block";
}

function devoir1() {
    horreur1.style.display = "none";
}

function voir2() {  
    horreur2.style.display = "block";
}

function devoir2() {
horreur2.style.display = "none";
}

function voir3() {  
    horreur3.style.display = "block";
}

function devoir3() {
horreur3.style.display = "none";
}


function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }








function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }