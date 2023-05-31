//各个元素
var startcontainer = document.querySelector("#startcontainer");

var ordercontainer = document.querySelector("#ordercontainer");
ordercontainer.style.display = "none";
var cuscontainer = document.querySelector("#cuscontainer");
cuscontainer.style.display = "none";

var grillcontainer = document.querySelector("#grillcontainer");
grillcontainer.style.display = "none";

var buildcontainer = document.querySelector("#buildcontainer");
buildcontainer.style.display = "none";

var button = document.querySelector("#button");
button.style.display = "none";

var orderStn = document.querySelector("#orderStn");
var grillStn = document.querySelector("#grillStn");
var buildStn = document.querySelector("#buildStn");
var nextBtn = document.querySelector("#next");
var quitBtn = document.querySelector("#quit");


//音乐和音效
var titleMusic = new Audio("sound/title_music.mp3");
titleMusic.loop = true;
var buttonclickMusic = new Audio("sound/buttonclick.wav.mp3");

//点单界面
var doorchimeMusic = new Audio("sound/doorchime.wav.mp3");
var orderscreenMusic = new Audio("sound/orderscreen_music.mp3");
orderscreenMusic.loop = true;
var talkbubbleMusic = new Audio("sound/talkbubble.wav.mp3");

//烤肉界面
var grillscreenMusic = new Audio("sound/grillscreen_music.mp3");
grillscreenMusic.loop = true;
var landburgerMusic = new Audio("sound/landburger.wav.mp3");
var grillburgerMusic = new Audio("sound/grillburger.wav.mp3");
grillburgerMusic.loop = true;

//组装界面
var buildscreenMusic = new Audio("sound/buildscreen_music.mp3");
buildscreenMusic.loop = true;
var mousedownMusic = new Audio("sound/grabtopping.wav.mp3");
var mouseupMusic = new Audio("sound/droptopping.wav.mp3");
var ticketMusic = new Audio("sound/dropticket.wav.mp3");
var waitMusic = new Audio("sound/giveorder_drumroll.wav.mp3");
var judge5Music = new Audio("sound/customer_overjoyed.wav.mp3");
var judge4Music = new Audio("sound/customer_happy.wav.mp3");
var judge3Music = new Audio("sound/customer_decent.wav.mp3");
var judge2Music = new Audio("sound/customer_worried.wav.mp3");
var judge1Music = new Audio("sound/customer_upset.wav.mp3");
var judge0Music = new Audio("sound/customer_pissed.wav.mp3");
var multicoinMusic = new Audio("sound/multicoin.wav.mp3");
var singlecoinMusic = new Audio("sound/singlecoin.wav.mp3");

var pageNo = 0; //记录是哪个界面
var changePage = 0; //是否可以更换界面

nextBtn.onclick = function() { if(changePage == 1){ 
    pageNo++;
    buttonclickMusic.play();
    if(pageNo % 3 == 0) { //点单界面
        nextBtn.src = "image/next0.png";
        changePage = 0;
        
        tkod.style.display = "none";
        resetCus(); //重置顾客

        buildcontainer.style.display = "none";
        ordercontainer.style.display = "block";
        orderStn.src = "image/orderStn.png";
        doorchimeMusic.play();
        orderscreenMusic.play();
        grillStn.src = "image/grillStn0.png";
        buildStn.src = "image/buildStn0.png";
        buildscreenMusic.pause();
    } 
    else if(pageNo % 3 == 1) { //烤肉界面
        if(cookedMeat == 0) { //没有烤好的肉饼
            nextBtn.src = "image/next0.png";
            changePage = 0;
        }

        cuscontainer.style.display = "none";
        grillcontainer.style.display = "block";
        orderStn.src = "image/orderStn0.png";
        orderscreenMusic.pause();
        grillStn.src = "image/grillStn.png";
        grillscreenMusic.play();
        buildStn.src = "image/buildStn0.png";
    } 
    else { //组装界面
        nextBtn.src = "image/next0.png";
        changePage = 0;

        //恢复初始状态
        grillcontainer.style.display = "none";
        buildcontainer.style.display = "block";
        stickbg.style.display = "block";
        plate.style.top = '300px';
        tickethere.style.top = '270px';
        plate.style.left = '200px';
        tickethere.style.left = '220px';
        judge.style.display = "none";
        stickticket.style.display = "none";
        
        buildbg.style.display = "block";
        ingredient.style.display = "block";
        saucebottle.style.display = "block";
        order.style = "z-index:900";
        order.style.left = 640 + 'px';
        order.style.top = 0 + 'px';
        order.style.transform = "scale(1)";
        
        var burger = document.querySelector("#burger");
        var list = burger.getElementsByTagName("li");
        for(var j = list.length - 1; j >= 0; --j)
        {
            burger.removeChild(list[j]);
        }
        tmt.style.display = "none";
        mstd.style.display = "none";
        egg.style.display = "none";
        bbq.style.display = "none";
        stickticket.style.display = "none";
        judge.style.display = "none";
        coins.src = "image/money0.png";
        if(cookedMeat == 0)
            meatfired.style.display="none";
        else
            meatfired.style.display="block";
        if(cookedMeatArr[0] == 2)
            meatfired.src = "image/meat2.png";
        else if(cookedMeatArr[0] == 3)
            meatfired.src = "image/meat3.png";
        else if(cookedMeatArr[0] == 4)
            meatfired.src = "image/meat4.png";

        orderStn.src = "image/orderStn0.png";
        grillStn.src = "image/grillStn0.png";
        grillscreenMusic.pause();
        buildStn.src = "image/buildStn.png";
        buildscreenMusic.play();
    }
}}

quitBtn.onclick = function() {
    //回归初始界面
    ordercontainer.style.display = "none";
    cuscontainer.style.display = "none";
    grillcontainer.style.display = "none";
    buildcontainer.style.display = "none";
    button.style.display = "none";
    startcontainer.style.display = "block";

    //改变音乐
    orderscreenMusic.pause();
    grillscreenMusic.pause();
    grillburgerMusic.pause();
    buildscreenMusic.pause();
    buttonclickMusic.play();
    titleMusic.play();
}