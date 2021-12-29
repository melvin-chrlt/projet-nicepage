let square = document.getElementsByClassName("blueSquare");
let worksGal = document.getElementsByClassName("gal");
let numWorksGal = worksGal.length;

for (let i = 0; i < numWorksGal; i++){
    worksGal[i].addEventListener('mouseenter', function(){
        square[i].style.display = "flex";
    })
}

for (let i = 0; i < numWorksGal; i++){
    worksGal[i].addEventListener('mouseleave', function(){
        square[i].style.display = "none";
    })
}