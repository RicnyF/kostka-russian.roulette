//var
var ammo= 1;
var zivoty = 3;
var coins = 0;
var win = 20;
var hody = [];

//event listeners
one.addEventListener("click", () => {
    ammo=1;
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = false;

    document.getElementById('naboje').innerHTML = ammo;
});
two.addEventListener("click", () => {
    ammo=2;
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = false;

    document.getElementById('naboje').innerHTML = ammo;
});
three.addEventListener("click", () => {
    ammo=3;
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = false;

    document.getElementById('naboje').innerHTML = ammo;
});
four.addEventListener("click", () => {
    ammo=4;
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = false;
    document.getElementById('naboje').innerHTML = ammo;
});
five.addEventListener("click", () => {
    ammo=5;
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = true;
    document.getElementById('naboje').innerHTML = ammo;
});
document.getElementById('gameButton').addEventListener('click',
    function(){
        hod(ammo);
        console.log(hody);
    }
);
document.getElementById('healthpotion').addEventListener('click',
function(){
    if(coins >=100){
        coins-=100;
        zivoty++;
        document.getElementById('zivoty').innerHTML = zivoty;
        document.getElementById('coins').innerHTML = coins;
    }
    else {
        swal("Not enough coins.", "", "error");
    }
}
);
//function
function hod(ammo) {
    var user = Math.ceil(Math.random() * 6);
    var game = [];
    var gamenumber;
    
    var indexnumber =0;
    var opakovani= 0;
   
    


    for (var i=ammo; i>0; i--){
    do{
    gamenumber=Math.ceil(Math.random() * 6)
    }while(gamenumber == game[0]|gamenumber == game[1]|gamenumber == game[2]|gamenumber == game[3]|gamenumber == game[4])
    game.push(gamenumber) 
}
document.getElementById("gameButton").disabled = true;
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
for (indexnumber;indexnumber<=ammo+1;indexnumber++){
    if(user == game[indexnumber]){
        zivoty--;
        
    setTimeout(() => {
            gameImage.src = "img/1r6M.gif";
        }, 600);
        setTimeout(() => {
            gameImage.src = "img/shooting.png";
        }, 1800);
        setTimeout(() => {
            gameImage.src = "img/default.png";
            document.getElementById("gameButton").disabled = false;
        document.getElementById("one").disabled = false;
        document.getElementById("two").disabled = false;
        document.getElementById("three").disabled = false;
        document.getElementById("four").disabled = false;
        document.getElementById("five").disabled = false;
        }, 1900);
        opakovani++;
        
    
    }
}

if (opakovani == 0){
    setTimeout(() => {
        gameImage.src = "img/1r6M.gif";
    }, 600);
    setTimeout(() => {
        gameImage.src = "img/default.png";
    
        document.getElementById("gameButton").disabled = false;
        document.getElementById("one").disabled = false;
        document.getElementById("two").disabled = false;
        document.getElementById("three").disabled = false;
        document.getElementById("four").disabled = false;
        document.getElementById("five").disabled = false;
    }, 1800);
    opakovani--;
    console.log(ammo+ "kokot")
    coins+=ammo*ammo*10;
win-=ammo;
}

if(zivoty <= 0){
    document.getElementById("gameButton").disabled = true;
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    setTimeout(() => {
        gameImage.src = "img/death.gif";
        document.getElementById("gameButton").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("healthpotion").disabled = true;
        document.getElementById("w/l").innerHTML = "PROHRÁL JSI";
        document.getElementById("w/l").classList.add('text-danger');


    }, 2000);
    setTimeout(() => {
        gameImage.src = "img/death.png";

    }, 5800);
}
if (win<= 0){
    setTimeout(() => {
        gameImage.src = "img/win.gif";
        document.getElementById("gameButton").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true; 
        document.getElementById("healthpotion").disabled = true;
        document.getElementById("w/l").innerHTML = "VYHRÁL JSI";
        document.getElementById("w/l").classList.add('text-success');


    }, 2100);
    win=0;
}

console.log(game[0]+" prvni cislo pocitace")
console.log(game[1]+" druhe cislo pocitace")
console.log(game[2]+" treti cislo pocitace")
console.log(game[3]+" ctvrte cislo pocitace")
console.log(game[4]+" pate cislo pocitace")
console.log(user+" cislo uzivatele")
console.log(zivoty+" zivotu");
console.log(coins+" coinu");
setTimeout(() => {
document.getElementById('zivoty').innerHTML = zivoty;
document.getElementById('coins').innerHTML = coins;
document.getElementById('win').innerHTML = win;
}, 1900);

}