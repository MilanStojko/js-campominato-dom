

let grid = document.getElementById ("my-grid");
let colored = document.getElementsByClassName("cell");

let easy = document.getElementById("ez");
let mediocre = document.getElementById("mediocre");
let tough = document.getElementById("tough");

let bombArr = [];

let killGame = false;

function stopgame (){
    killGame = true;
}

function addbombs(){
    const maxBomb = 16;
    for(let j = 0; j < 16; j++){
        let newBomb = parseInt(Math.floor(Math.random()*100 + 1));
        if (bombArr.includes(newBomb)){
            j--;
        }else{
            bombArr.push (newBomb);
        }
    }
    console.log(bombArr);
}

function allred(){
    for (let j = 0; j < colored.length; j++){
        if(bombArr.includes(parseInt(colored[j].innerHTML))){
            colored[j].classList.add ("rosso");
        }
    }
}


function colorit(){
    killGame = false;
    let t = 0
    let points = 0;
    for(i=0; i < colored.length; i++){
        colored[i].addEventListener("click", function(){
            if(killGame){return}
            if(bombArr.includes(parseInt(this.innerHTML))){
                this.classList.add ("rosso");
                console.log (this.innerHTML);
                allred();
                stopgame();

            }else{
                if(!this.classList.contains("azzuro")){
                    this.classList.add ("azzuro");
                    t ++;
                    if (t > colored.length - 16){
                        stopgame();
                        alert ("congfuckingratulations");
                    }
                    points ++;
                    document.querySelector(".result").innerHTML = (`Il tuo puntenggio è il seguente ${points}`);
                }
                
            }
            console.log(points);
        })
    }
    console.log(bombArr);
}

easy.addEventListener("click", function(){
    bombArr = [];
    grid.innerHTML = "";
    grid.classList.remove("medium", "hard");
    grid.classList.add("easy");
    for(i=1; i <= 100; i++){
        grid.innerHTML += `
        <div class = "cell"> ${i} </div>
        `

    }
    addbombs();
    colorit();
    
})
mediocre.addEventListener("click", function(){
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
