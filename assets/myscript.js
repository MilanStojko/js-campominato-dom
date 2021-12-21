

let grid = document.getElementById ("my-grid");
let colored = document.getElementsByClassName("cell");

let easy = document.getElementById("ez");
let mediocre = document.getElementById("mediocre");
let tough = document.getElementById("tough");


function colorit(){
    for(i=1; i < colored.length; i++){
        colored[i].addEventListener("click", function(){
            this.classList.add ("azzuro");
        })
    }
}

easy.addEventListener("click", function(){
    grid.innerHTML = "";
    grid.classList.remove("medium", "hard");
    grid.classList.add("easy");
    for(i=1; i <= 100; i++){
        grid.innerHTML += `
        <div class = "cell"> ${i} </div>
        `
    }
    colorit();
})
mediocre.addEventListener("click", function(){
    grid.innerHTML = "";
    grid.classList.remove("easy", "hard");
    grid.classList.add("medium");
    for(i=1; i <= 81; i++){
        grid.innerHTML += `
        <div class = "cell"> ${i} </div>
        `
    }
    colorit();
})
tough.addEventListener("click", function(){
    grid.innerHTML = "";
    grid.classList.remove("medium", "easy");
    grid.classList.add("hard");
    for(i=1; i <= 49; i++){
        grid.innerHTML += `
        <div class = "cell"> ${i} </div>
        `
    }
    colorit();
})
