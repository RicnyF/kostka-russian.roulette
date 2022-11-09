//var
var ammo= 0;
var zivoty = 3;
var coins = 0;
var win = 20;
var hody = [];
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

function hod(ammo) {
    var user = Math.ceil(Math.random() * 6);
    var game = [];
    var gamenumber;
    var naboje= ammo+1;
    var indexnumber =0;
    gamenumber=Math.ceil(Math.random() * 6)
    game.push(gamenumber);
    for (ammo; ammo>0; ammo--){
    do{
    gamenumber=Math.ceil(Math.random() * 6)
    }while(gamenumber == game[0]|gamenumber == game[1]|gamenumber == game[2]|gamenumber == game[3]|gamenumber == game[4])
    game.push(gamenumber) 
}
do{
    if(user == game[indexnumber]){
        zivoty--;
        coins-=10*naboje
        win+=naboje;
   }
    indexnumber++;
}while(indexnumber<=naboje)
coins+=10*naboje;
win-=naboje;


    setTimeout(() => {
        gameImage.src = "img/1r6M.gif";
    }, 600);
    setTimeout(() => {
        gameImage.src = "img/default.png";
       
    }, 1800);

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
}, 1800);
}