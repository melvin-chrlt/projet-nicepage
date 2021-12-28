let worksGal = document.querySelector(".gal");
let square = document.querySelector(".blueSquare");

worksGal.addEventListener('mouseenter', function(){
    square.style.display = "flex";   
})

worksGal.addEventListener('mouseleave', function(){
    square.style.display = "none";
})