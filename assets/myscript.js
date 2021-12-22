

let grid = document.getElementById ("my-grid");
let colored = document.getElementsByClassName("cell");

let easy = document.getElementById("ez");
let mediocre = document.getElementById("mediocre");
let tough = document.getElementById("tough");

let maxCells = 0;

let bombArr = [];

let killGame = false;                           //dichiarazione maggior parte delle variabili

function stopgame (){                           //function per stoppare il gioco
    killGame = true;
}

function wingame(winner){
    if (winner > colored.length - 16){
        stopgame();
        alert ("congfuckingratulations");
        location.reload();
    }
}

function generateRandom(min, max){
    let radomized = parseInt(Math.floor(Math.random()*(max - min + 1)));
    return radomized;
}

function safe(safe){
    let t = 0;
    if(!safe.classList.contains("azzuro")){
        safe.classList.add ("azzuro");
        t ++;
        wingame (t);
    }
}

function addbombs(){                            //function per aggiungere le bombe all'array
    const maxBomb = 16;
    for(let j = 0; j < 16; j++){
        let newBomb = generateRandom(1, maxCells);
        if (bombArr.includes(newBomb)){
            j--;
        }else{
            bombArr.push (newBomb);
            
        }
    }
    console.log(bombArr);
}

function allred(){                              //function per far comparire tutti i rossi al momento
    for (let j = 0; j < colored.length; j++){   // del click su anche solo uno
        if(bombArr.includes(parseInt(colored[j].innerHTML))){
            colored[j].classList.add ("rosso");
            colored[j].innerHTML = '<i class="fas fa-bomb"></i';
        }
    }
}


function colorit(){ 
    let points = 0;                            //funzione che aggiunge l'event listenere ai bottoni e aggiunge tutto il neccessario perchè il programma funzioni in poche parole 
    killGame = false;
    for(i=0; i < colored.length; i++){
        colored[i].addEventListener("click", function(){
            if(killGame){return}
            if(bombArr.includes(parseInt(this.innerHTML))){
                this.classList.add ("rosso");
                console.log (this.innerHTML);
                allred();
                stopgame();
            }else{
                safe(this);
                points ++;
                console.log (points);
                document.querySelector(".result").innerHTML = (`Il tuo puntenggio è il seguente ${points}`);     
            }
        })
    }
    console.log(bombArr);
}

easy.addEventListener("click", function(){
    maxCells = 100;
    bombArr = [];
    grid.innerHTML = "";
    grid.classList.remove("medium", "hard");
    grid.classList.add("easy");
    for(let i=1; i <= 100; i++){
            grid.innerHTML += `
            <div class = "cell"> ${i} </div>
            `
    }
    addbombs();
    colorit();
})
mediocre.addEventListener("click", function(){
    maxCells = 81;
    bombArr = [];
    grid.innerHTML = "";
    grid.classList.remove("easy", "hard");
    grid.classList.add("medium");
    for(i=1; i <= 81; i++){
        grid.innerHTML += `
        <div class = "cell"> ${i} </div>
        `
    }
    addbombs();
    colorit();
})
tough.addEventListener("click", function(){
    maxCells = 49;
    bombArr = [];
    grid.innerHTML = "";
    grid.classList.remove("medium", "easy");
    grid.classList.add("hard");
    for(i=1; i <= 49; i++){
        grid.innerHTML += `
        <div class = "cell"> ${i} </div>
        `
    }
    addbombs();
    colorit();
})

$(window).on("load", function(){
    $(".loader-wrapper").fadeOut("slow");
});

