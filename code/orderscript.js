//点单界面


//点单界面用到的元素
var playBtn = document.querySelector("#playButton");

var cus1 = document.querySelector("#cus1"); //第一个界面出现的顾客
var cusorderCus = document.querySelector("#cusorderCus"); //第二个界面出现的顾客
var tkod = document.querySelector("#tkod");
var dialog = document.querySelector("#dialog");

var CusRandom = 0;
var bodyBgs = [];  //图片地址
bodyBgs[0] = "../image/customer1.png";
bodyBgs[1] = "../image/customer2.png";
bodyBgs[2] = "../image/customer3.png";

var ingredients = [];  //图片地址
ingredients[0] = "../image/bbq.png";
ingredients[1] = "../image/cheese.png";
ingredients[2] = "../image/cucumber.png";
ingredients[3] = "../image/egg.png";
ingredients[4] = "../image/meat3.png";
ingredients[5] = "../image/mstd.png";
ingredients[6] = "../image/onion.png";
ingredients[7] = "../image/tmt.png";
ingredients[8] = "../image/tomato.png";
ingredients[9] = "../image/veg.png";

var ticketBurgertop = document.querySelector("#ticketBurgertop");
var ticketBurgerbtm = document.querySelector("#ticketBurgerbtm");
var ingredient1 = document.querySelector("#ingredient1");
var ingredient2 = document.querySelector("#ingredient2");
var ingredient3 = document.querySelector("#ingredient3");
var ingredient4 = document.querySelector("#ingredient4");
var ingredient5 = document.querySelector("#ingredient5");

var buildingredient1 = document.querySelector("#buildingredient1");
var buildingredient2 = document.querySelector("#buildingredient2");
var buildingredient3 = document.querySelector("#buildingredient3");
var buildingredient4 = document.querySelector("#buildingredient4");
var buildingredient5 = document.querySelector("#buildingredient5");

var ingredientsRandom = [1,2,3,4,5];


//开始游戏
playBtn.onclick = function () {
    doorchimeMusic.play();
    orderscreenMusic.play();
    //生成随机顾客
    CusRandom = parseInt(Math.round( Math.random() * 1000 ))%3;
    cus1.src = bodyBgs[CusRandom];
    cusorderCus.src = bodyBgs[CusRandom];
    startcontainer.style.display = "none";
    ordercontainer.style.display = "block";
    button.style.display = "block";
    tkod.style.display = "none";
    cus1.addEventListener("animationend", function () {
        tkod.style.display = "block";
    });
}

//重置随机顾客
function resetCus (){
    CusRandom = parseInt(Math.round( Math.random() * 1000 ))%3;
    cus1.src = bodyBgs[CusRandom];
    cusorderCus.src = bodyBgs[CusRandom];
}

//生成随机订单
tkod.onclick = function () {
    dialog.style.display = "block";
    ingredientsRandom[0] = parseInt(Math.round( Math.random() * 1000 ))%10;
    ingredientsRandom[1] = parseInt(Math.round( Math.random() * 1000 ))%10;
    ingredientsRandom[2] = 4;
    ingredientsRandom[3] = parseInt(Math.round( Math.random() * 1000 ))%10;
    ingredientsRandom[4] = parseInt(Math.round( Math.random() * 1000 ))%10;

    ingredient1.src = ingredients[ingredientsRandom[0]];
    ingredient2.src = ingredients[ingredientsRandom[1]];
    ingredient3.src = ingredients[ingredientsRandom[2]];
    ingredient4.src = ingredients[ingredientsRandom[3]];
    ingredient5.src = ingredients[ingredientsRandom[4]];

    //传递订单给制作界面
    buildingredient1.src = ingredients[ingredientsRandom[0]];
    buildingredient2.src = ingredients[ingredientsRandom[1]];
    buildingredient3.src = ingredients[ingredientsRandom[2]];
    buildingredient4.src = ingredients[ingredientsRandom[3]];
    buildingredient5.src = ingredients[ingredientsRandom[4]];

    ordercontainer.style.display = "none";
    cuscontainer.style.display = "block";

    ticketBurgertop.style.display = "block";
    talkbubbleMusic.play();

    ingredient1.style.display = "none";
    ingredient2.style.display = "none";
    ingredient3.style.display = "none";
    ingredient4.style.display = "none";
    ingredient5.style.display = "none";
    ticketBurgerbtm.style.display = "none";
    ticketBurgertop.addEventListener("animationend", function () {
        ingredient1.style.display = "block";
        talkbubbleMusic.play();
    });
    ingredient1.addEventListener("animationend", function () {
        ingredient2.style.display = "block";
        talkbubbleMusic.play();
    });
    ingredient2.addEventListener("animationend", function () {
        ingredient3.style.display = "block";
        talkbubbleMusic.play();
    });
    ingredient3.addEventListener("animationend", function () {
        ingredient4.style.display = "block";
        talkbubbleMusic.play();
    });
    ingredient4.addEventListener("animationend", function () {
        ingredient5.style.display = "block";
        talkbubbleMusic.play();
    });
    ingredient5.addEventListener("animationend", function () {
        ticketBurgerbtm.style.display = "block";
        talkbubbleMusic.play();
    });
    ticketBurgerbtm.addEventListener("animationend", function () {
        dialog.style.display = "none";
        nextBtn.src = "../image/next.png"; changePage = 1;
    });
}
