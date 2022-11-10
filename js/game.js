//var
var ammo= 0;
var zivoty = 3;
var coins = 0;
var win = 20;
var hody = [];
//event listeners
one.addEventListener("click", () => {
    ammo=0;

    document.getElementById('naboje').innerHTML = `Počet nábojů = ${ammo+1}`;
});
two.addEventListener("click", () => {
    ammo=1;
    
    document.getElementById('naboje').innerHTML = `Počet nábojů = ${ammo+1}`;
});
three.addEventListener("click", () => {
    ammo=2;
    
    document.getElementById('naboje').innerHTML = `Počet nábojů = ${ammo+1}`;
});
four.addEventListener("click", () => {
    ammo=3;
    console.log(ammo);
    document.getElementById('naboje').innerHTML = `Počet nábojů = ${ammo+1}`;
});
five.addEventListener("click", () => {
    ammo=4;
    console.log(ammo);
    document.getElementById('naboje').innerHTML = `Počet nábojů = ${ammo+1}`;
});
document.getElementById('game').addEventListener('click',
    function(){
        hod(ammo);
        console.log(hody);
    }
);
//function
function hod(ammo) {
    var user = Math.ceil(Math.random() * 6);
    var game = [];
    var gamenumber;
    var naboje= ammo+1;
    var indexnumber =0;
    var opakovani= 0;
    gamenumber=Math.ceil(Math.random() * 6)
    game.push(gamenumber);
    for (ammo; ammo>0; ammo--){
    do{
    gamenumber=Math.ceil(Math.random() * 6)
    }while(gamenumber == game[0]|gamenumber == game[1]|gamenumber == game[2]|gamenumber == game[3]|gamenumber == game[4])
    game.push(gamenumber) 
}
for (indexnumber;indexnumber<=naboje;indexnumber++){
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
    
    }, 1800);
    opakovani--;
    coins+=naboje*naboje*10;
win-=naboje;
}

if(zivoty <= 0){
    setTimeout(() => {
        gameImage.src = "img/death.gif";
    
    }, 2000);
}
if (win<= 0){
    setTimeout(() => {
        gameImage.src = "img/win.gif";
    
    }, 2100);
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
document.getElementById('zivoty').innerHTML = `Počet životů =${zivoty}`;
document.getElementById('coins').innerHTML = `Počet coinů =${coins}`;
document.getElementById('win').innerHTML = `Počet nábojů do výhry =${win}`;
}, 1900);

}