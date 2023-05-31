//制作界面


var burger = document.querySelector("#burger");

var count=900; //用于汉堡食材叠放优先级

var tmts = document.querySelector("#tmts");
var tmtss = document.querySelector("#tmtss");
//保留番茄酱瓶原始位置
var tmtsleft=tmts.style.left; 
var tmtstop=tmts.style.top;

var tmt = document.querySelector("#tmt");

tmts.onmousedown = function(e){
    count = count + 1;
    var event = e || window.event; //兼容性写法
    //鼠标相对于图片的位置
    var dx = event.clientX - tmts.offsetLeft;
    var dy = event.clientY - tmts.offsetTop;

    mousedownMusic.play();
    //鼠标移动时
    document.onmousemove = function(e) {
        var event = e || window.event; 

        var x1 = parseFloat(event.clientX - dx);
        var x2 = parseFloat(x1 * 180 / 70);
        if(x1 > -70 && x1 <= 0) //增加瓶子旋转角度
            tmts.style.transform = "rotate("+ String(x2) + "deg)";

        tmts.style.left = event.clientX - dx + 'px';
        tmts.style.top = event.clientY - dy + 'px';
    };
    //鼠标抬起时
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        var list = burger.getElementsByTagName("li");
        if(list.length > 0) //第一个只能取汉堡底
        {
            mouseupMusic.play();
            var li = list[list.length - 1];
            //判断落点是否合法
            if(tmts.offsetLeft + 415 - li.offsetLeft <= 20 && tmts.offsetLeft + 415 - li.offsetLeft >= -20) {
                tmt.style.display = "block";
                tmt.src = "image/tmt.gif";
                //设置番茄酱落点
                tmt.style = "z-index:" + String(count);
                tmt.style.left = tmts.offsetLeft + 415 + 'px';
                tmt.style.top = li.offsetTop - 55 + 'px';
                
                //新建番茄酱元素
                var tmts1 = document.createElement("li");
                //播放gif定时器
                let imgTimeout = setTimeout(function(){
                    tmt.src = "image/tmt.png";
                    tmt.style.display = "none";
                    tmts1.innerHTML = '<div> <img src="image/tmt.png"></div>';
                    tmts1.src = "image/tmt.png";
                    count = count + 1;
                    tmts1.style = "z-index:" + String(count);
                    tmts1.style.left = tmt.style.left;
                    tmts1.style.top = li.offsetTop - 7 + 'px';
                    tmtss.appendChild(tmts1);
                    burger.appendChild(tmts1);
                    clearTimeout(imgTimeout);
                }, 300) 
            }
        }
        //番茄酱瓶子回原位置
        tmts.style.left=tmtsleft;
        tmts.style.top=tmtstop;
        tmts.style.transform="rotate(0deg)";
    };
    //解决有些时候,在鼠标松开的时候,元素仍然可以拖动;
    document.ondragstart = function(ev) {
        ev.preventDefault();
    };
    document.ondragend = function(ev) {
        ev.preventDefault();
    };
}

var mstds = document.querySelector("#mstds");
var mstdss = document.querySelector("#mstdss");
var mstd = document.querySelector("#mstd");
var mstdsleft = mstds.style.left;
var mstdstop = mstds.style.top;

mstds.onmousedown = function(e){
    count = count + 1;
    var event = e || window.event; //兼容性写法
    //鼠标相对于图片的位置
    var dx = event.clientX - mstds.offsetLeft;
    var dy = event.clientY - mstds.offsetTop;
    mousedownMusic.play();
    //鼠标移动时
    document.onmousemove = function(e) {
        var event = e || window.event; 
        var x1 = parseFloat(event.clientX - dx);
        var x2 = parseFloat(x1 * 180 / 70);
        if(x1 > -70 && x1 <= 0)
            mstds.style.transform = "rotate(" + String(x2) + "deg)";
        mstds.style.left = event.clientX - dx + 'px';
        mstds.style.top = event.clientY - dy + 'px';
    };
    //鼠标抬起时
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        var list = burger.getElementsByTagName("li");
        if(list.length > 0) //第一个只能取汉堡底
        {
            mouseupMusic.play();
            var li = list[list.length - 1];
            //判断落点是否合法
            if(mstds.offsetLeft + 415 - li.offsetLeft <= 20 && mstds.offsetLeft + 415 - li.offsetLeft >= -20) {
                mstd.style.display = "block";
                mstd.src = "image/mstd.gif";
                //设置芥末酱落点
                mstd.style = "z-index:" + String(count);
                mstd.style.left = mstds.offsetLeft + 415 + 'px';
                mstd.style.top = li.offsetTop - 55 + 'px';
                
                //新建芥末酱元素
                var mstds1 = document.createElement("li");
                //播放gif定时器
                let imgTimeout = setTimeout(function(){
                    mstd.src = "image/mstd.png";
                    mstd.style.display = "none";
                    mstds1.innerHTML = '<div> <img src="image/mstd.png"></div>';
                    mstds1.src = "image/mstd.png";
                    count = count + 1;
                    mstds1.style = "z-index:" + String(count);
                    mstds1.style.left = mstd.style.left;
                    mstds1.style.top = li.offsetTop - 7 + 'px';
                    mstdss.appendChild(mstds1);
                    burger.appendChild(mstds1);
                    clearTimeout(imgTimeout);
                }, 300) 
            }
        }
        mstds.style.left = mstdsleft;
        mstds.style.top = mstdstop;
        mstds.style.transform = "rotate(0deg)";
    };
    //解决有些时候,在鼠标松开的时候,元素仍然可以拖动;
    document.ondragstart = function(ev) {
        ev.preventDefault();
    };
    document.ondragend = function(ev) {
        ev.preventDefault();
    };
}

var eggs = document.querySelector("#eggs");
var eggss = document.querySelector("#eggss");
var egg = document.querySelector("#egg");
var eggsleft = eggs.style.left;
var eggstop = eggs.style.top;

eggs.onmousedown = function(e){
    count = count + 1;
    var event = e || window.event; //兼容性写法
    //鼠标相对于图片的位置
    var dx = event.clientX - eggs.offsetLeft;
    var dy = event.clientY - eggs.offsetTop;
    mousedownMusic.play();
    //鼠标移动时
    document.onmousemove = function(e) {
        var event = e || window.event; 
        var x1 = parseFloat(event.clientX - dx);
        var x2 = parseFloat(x1 * 180 / 70);
        if(x1 > -70 && x1 <= 0)
            eggs.style.transform = "rotate(" + String(x2) + "deg)";
        eggs.style.left = event.clientX - dx + 'px';
        eggs.style.top = event.clientY - dy + 'px';
    };
    //鼠标抬起时
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        var list = burger.getElementsByTagName("li");
        if(list.length > 0) //第一个只能取汉堡底
        {
            mouseupMusic.play();
            var li = list[list.length - 1];
            //判断落点是否合法
            if(eggs.offsetLeft + 415 - li.offsetLeft <= 20 && eggs.offsetLeft + 415 - li.offsetLeft >= -20) {
                egg.style.display = "block";
                egg.src = "image/egg.gif";
                //设置蛋黄酱落点
                egg.style = "z-index:" + String(count);
                egg.style.left = eggs.offsetLeft + 415 + 'px';
                egg.style.top = li.offsetTop - 55 + 'px';
                
                //新建蛋黄酱元素
                var eggs1 = document.createElement("li");
                //播放gif定时器
                let imgTimeout = setTimeout(function(){
                    egg.src = "image/egg.png";
                    egg.style.display = "none";
                    eggs1.innerHTML = '<div> <img src="image/egg.png"></div>';
                    eggs1.src = "image/egg.png";
                    count = count + 1;
                    eggs1.style = "z-index:" + String(count);
                    eggs1.style.left = egg.style.left;
                    eggs1.style.top = li.offsetTop - 7 + 'px';
                    eggss.appendChild(eggs1);
                    burger.appendChild(eggs1);
                    clearTimeout(imgTimeout);
                }, 300) 
            }
        }
        eggs.style.left = eggsleft;
        eggs.style.top = eggstop;
        eggs.style.transform = "rotate(0deg)";
    };
    //解决有些时候,在鼠标松开的时候,元素仍然可以拖动;
    document.ondragstart = function(ev) {
        ev.preventDefault();
    };
    document.ondragend = function(ev) {
        ev.preventDefault();
    };
}
var bbqs = document.querySelector("#bbqs");
var bbqss = document.querySelector("#bbqss");
var bbq = document.querySelector("#bbq");
var bbqsleft = bbqs.style.left;
var bbqstop = bbqs.style.top;
bbqs.onmousedown = function(e){
    count = count + 1;
    var event = e || window.event; //兼容性写法
    //鼠标相对于图片的位置
    var dx = event.clientX - bbqs.offsetLeft;
    var dy = event.clientY - bbqs.offsetTop;
    mousedownMusic.play();
    //鼠标移动时
    document.onmousemove = function(e) {
        var event = e || window.event; 
        var x1 = parseFloat(event.clientX - dx);
        var x2 = parseFloat(x1 * 180 / 70);
        if(x1 > -70 && x1 <= 0)
            bbqs.style.transform = "rotate(" + String(x2) + "deg)";
        bbqs.style.left = event.clientX - dx + 'px';
        bbqs.style.top = event.clientY - dy + 'px';
    };
    //鼠标抬起时
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        var list = burger.getElementsByTagName("li");
        if(list.length > 0) //第一个只能取汉堡底
        {
            mouseupMusic.play();
            var li = list[list.length - 1];
            if(bbqs.offsetLeft + 415 - li.offsetLeft <= 20 && bbqs.offsetLeft + 415 - li.offsetLeft >= -20) {
                bbq.style.display = "block";
                bbq.src = "image/bbq.gif";
                //设置烧烤酱落点
                bbq.style = "z-index:" + String(count);
                bbq.style.left = bbqs.offsetLeft + 415 + 'px';
                bbq.style.top = li.offsetTop - 55 + 'px';
                
                //新建烧烤酱元素
                var bbqs1 = document.createElement("li");
                //播放gif定时器
                let imgTimeout = setTimeout(function(){
                    bbq.src = "image/bbq.png";
                    bbq.style.display = "none";
                    bbqs1.innerHTML = '<div> <img src="image/bbq.png"></div>';
                    bbqs1.src = "image/bbq.png";
                    count = count + 1;
                    bbqs1.style = "z-index:" + String(count);
                    bbqs1.style.left = bbq.style.left;
                    bbqs1.style.top = li.offsetTop - 7 + 'px';
                    bbqss.appendChild(bbqs1);
                    burger.appendChild(bbqs1);; 
                    clearTimeout(imgTimeout);
                }, 300) 
            }
        }
        bbqs.style.left = bbqsleft;
        bbqs.style.top = bbqstop;
        bbqs.style.transform = "rotate(0deg)";
    };
    //解决有些时候,在鼠标松开的时候,元素仍然可以拖动;
    document.ondragstart = function(ev) {
        ev.preventDefault();
    };
    document.ondragend = function(ev) {
        ev.preventDefault();
    };
}
var burgerbtm = document.querySelector("#burgerbtm");
var burgerbtms = document.querySelector("#burgerbtms");
burgerbtm.onmousedown = function(e){
    count = count+1;
    var burgerbtm1 = document.createElement("li");
    burgerbtm1.style = "z-index:" + String(count);
    burgerbtm1.innerHTML = '<div class="burgerbtm1"> <img src="image/burgerbtm.png"></div>';
    burgerbtms.appendChild(burgerbtm1);
    var event = e || window.event; //兼容性写法
    //鼠标相对于图片的位置
    var dx = event.clientX - burgerbtm1.offsetLeft;
    var dy = event.clientY - burgerbtm1.offsetTop;
    mousedownMusic.play();
    //鼠标移动时
    document.onmousemove = function(e) {
        var event = e || window.event; 
        burgerbtm1.style.left = event.clientX - dx + 'px';
        burgerbtm1.style.top = event.clientY - dy + 'px';
    };
    //鼠标抬起时
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        var list = burger.getElementsByTagName("li");
        mouseupMusic.play();
        if(list.length > 0) //第一个只能取汉堡底
        {
            var li = list[list.length - 1];
            burgerbtm1.style.top = li.offsetTop - 11 + 'px';
            if(burgerbtm1.offsetLeft - li.offsetLeft <= 35 && burgerbtm1.offsetLeft - li.offsetLeft >= -35) 
                burger.appendChild(burgerbtm1);
            else
                burgerbtm1.style.display = "none";
        }
        else
        {
            if(burgerbtm1.offsetLeft >= 300 && burgerbtm1.offsetLeft <= 350)
            {
                burgerbtm1.style.top = 320+'px';
                burger.appendChild(burgerbtm1);
            }
            else
                burgerbtm1.style.display="none";
        }
    };
    //解决有些时候,在鼠标松开的时候,元素仍然可以拖动;
    document.ondragstart = function(ev) {
        ev.preventDefault();
    };
    document.ondragend = function(ev) {
        ev.preventDefault();
    };
}
var cheese = document.querySelector("#cheese");
var cheeses = document.querySelector("#cheeses");
cheese.onmousedown = function(e){
    count = count+1;
    var cheese1 = document.createElement("li");
    cheese1.style = "z-index:" + String(count);
    cheese1.innerHTML = '<div class="cheese1"> <img src="image/cheese.png"></div>';
    cheese1.src = "image/cheese.png";
    cheeses.appendChild(cheese1);
    var event = e || window.event; //兼容性写法
    //鼠标相对于图片的位置
    var dx = event.clientX - cheese1.offsetLeft;
    var dy = event.clientY - cheese1.offsetTop;
    mousedownMusic.play();
    //鼠标移动时
    document.onmousemove = function(e) {
        var event = e || window.event; 
        cheese1.style.left = event.clientX - dx + 'px';
        cheese1.style.top = event.clientY - dy + 'px';
    };
    //鼠标抬起时
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        var list = burger.getElementsByTagName("li");
        if(list.length > 0) //第一个只能取汉堡底
        {
            mouseupMusic.play();
            var li = list[list.length - 1];
            cheese1.style.top = li.offsetTop - 11 + 'px';
            if(cheese1.offsetLeft - li.offsetLeft <= 35 && cheese1.offsetLeft - li.offsetLeft >= -35)    
                burger.appendChild(cheese1);
            else
                cheese1.style.display = "none";
        }
        else
        {
            cheese1.style.left = cheese.style.left;
            cheese1.style.top = cheese.style.top;
            cheese1.style.display = "none";
            list.removeChild(list[list.length - 1]); 
        }
    };
    //解决有些时候,在鼠标松开的时候,元素仍然可以拖动;
    document.ondragstart = function(ev) {
        ev.preventDefault();
    };
    document.ondragend = function(ev) {
        ev.preventDefault();
    };
}
var cucumber = document.querySelector("#cucumber");
var cucumbers = document.querySelector("#cucumbers");
cucumber.onmousedown = function(e){
    count = count+1;
    var cucumber1 = document.createElement("li");
    cucumber1.style = "z-index:" + String(count);
    cucumber1.innerHTML = '<div class="cucumber1"> <img src="image/cucumber.png"></div>';
    cucumber1.src = "image/cucumber.png";
    cucumbers.appendChild(cucumber1);
    var event = e || window.event; //兼容性写法
    //鼠标相对于图片的位置
    var dx = event.clientX - cucumber1.offsetLeft;
    var dy = event.clientY - cucumber1.offsetTop;
    mousedownMusic.play();
    //鼠标移动时
    document.onmousemove = function(e) {
        var event = e || window.event; 
        cucumber1.style.left = event.clientX - dx + 'px';
        cucumber1.style.top = event.clientY - dy + 'px';
    };
    //鼠标抬起时
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        var list = burger.getElementsByTagName("li");
        if(list.length > 0) //第一个只能取汉堡底
        {
            mouseupMusic.play();
            var li = list[list.length - 1];
            cucumber1.style.top = li.offsetTop - 11 + 'px';
            if(cucumber1.offsetLeft-li.offsetLeft <= 35 && cucumber1.offsetLeft - li.offsetLeft >= -35) 
                burger.appendChild(cucumber1);
            else
                cucumber1.style.display = "none";
        }
        else
        {
            cucumber1.style.left = cucumber.style.left;
            cucumber1.style.top = cucumber.style.top;
            cucumber1.style.display = "none";
            list.removeChild(list[list.length - 1]); 
        }
    };
    //解决有些时候,在鼠标松开的时候,元素仍然可以拖动;
    document.ondragstart = function(ev) {
        ev.preventDefault();
    };
    document.ondragend = function(ev) {
        ev.preventDefault();
    };
}
var onion = document.querySelector("#onion");
var onions = document.querySelector("#onions");
onion.onmousedown = function(e){
    count = count + 1;
    var onion1 = document.createElement("li");
    onion1.style = "z-index:" + String(count);
    onion1.innerHTML = '<div class="onion1"> <img src="image/onion.png"></div>';
    onion1.src = "image/onion.png";
    onions.appendChild(onion1);
    var event = e || window.event; //兼容性写法
    //鼠标相对于图片的位置
    var dx = event.clientX - onion1.offsetLeft;
    var dy = event.clientY - onion1.offsetTop;
    mousedownMusic.play();
    //鼠标移动时
    document.onmousemove = function(e) {
        var event = e || window.event; 
        onion1.style.left = event.clientX - dx + 'px';
        onion1.style.top = event.clientY - dy + 'px';
    };
    //鼠标抬起时
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        var list = burger.getElementsByTagName("li");
        if(list.length > 0) //第一个只能取汉堡底
        {
            mouseupMusic.play();
            var li = list[list.length - 1];
            onion1.style.top = li.offsetTop - 11 + 'px';
            if(onion1.offsetLeft - li.offsetLeft <= 35 && onion1.offsetLeft - li.offsetLeft >= -35)
                burger.appendChild(onion1);
            else
                onion1.style.display = "none";
        }
        else
        {
            onion1.style.left = onion.style.left;
            onion1.style.top = onion.style.top;
            onion1.style.display = "none";
            list.removeChild(list[list.length - 1]); 
        }
    };
    //解决有些时候,在鼠标松开的时候,元素仍然可以拖动;
    document.ondragstart = function(ev) {
        ev.preventDefault();
    };
    document.ondragend = function(ev) {
        ev.preventDefault();
    };
}
var veg = document.querySelector("#veg");
var vegs = document.querySelector("#vegs");
veg.onmousedown = function(e){
    count = count + 1;
    var veg1 = document.createElement("li");
    veg1.style = "z-index:" + String(count);
    veg1.innerHTML = '<div class="veg1"> <img src="image/veg.png"></div>';
    veg1.src = "image/veg.png";
    vegs.appendChild(veg1);
    var event = e || window.event; //兼容性写法
    //鼠标相对于图片的位置
    var dx = event.clientX - veg1.offsetLeft;
    var dy = event.clientY - veg1.offsetTop;
    mousedownMusic.play();
    //鼠标移动时
    document.onmousemove = function(e) {
        var event = e || window.event; 
        veg1.style.left = event.clientX - dx + 'px';
        veg1.style.top = event.clientY - dy + 'px';
    };
    //鼠标抬起时
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        var list = burger.getElementsByTagName("li");
        if(list.length > 0) //第一个只能取汉堡底
        {
            mouseupMusic.play();
            var li = list[list.length - 1];
            veg1.style.top = li.offsetTop - 11 + 'px';
            if(veg1.offsetLeft - li.offsetLeft <= 35 && veg1.offsetLeft - li.offsetLeft >= -35)
                burger.appendChild(veg1);
            else
                veg1.style.display = "none";
        }
        else
        {
            veg1.style.left = veg.style.left;
            veg1.style.top = veg.style.top;
            veg1.style.display = "none";
            list.removeChild(list[list.length - 1]); 
        }
    };
    //解决有些时候,在鼠标松开的时候,元素仍然可以拖动;
    document.ondragstart = function(ev) {
        ev.preventDefault();
    };
    document.ondragend = function(ev) {
        ev.preventDefault();
    };
}
var tomato = document.querySelector("#tomato");
var tomatos = document.querySelector("#tomatos");
tomato.onmousedown = function(e){
    count = count + 1;
    var tomato1 = document.createElement("li");
    tomato1.style = "z-index:" + String(count);
    tomato1.innerHTML = '<div class="tomato1"> <img src="image/tomato.png"></div>';
    tomato1.src = "image/tomato.png";
    tomatos.appendChild(tomato1);
    var event = e || window.event; //兼容性写法
    //鼠标相对于图片的位置
    var dx = event.clientX - tomato1.offsetLeft;
    var dy = event.clientY - tomato1.offsetTop;
    mousedownMusic.play();
    //鼠标移动时
    document.onmousemove = function(e) {
        var event = e || window.event; 
        tomato1.style.left = event.clientX - dx + 'px';
        tomato1.style.top = event.clientY - dy + 'px';
    };
    //鼠标抬起时
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        var list = burger.getElementsByTagName("li");
        if(list.length > 0) //第一个只能取汉堡底
        {
            mouseupMusic.play();
            var li = list[list.length - 1];
            tomato1.style.top = li.offsetTop - 11 + 'px';
            if(tomato1.offsetLeft - li.offsetLeft <= 35 && tomato1.offsetLeft - li.offsetLeft >= -35)   
                burger.appendChild(tomato1);
            else
                tomato1.style.display = "none";
        }
        else
        {
            tomato1.style.left = tomato.style.left;
            tomato1.style.top = tomato.style.top;
            tomato1.style.display = "none";
            list.removeChild(list[list.length - 1]); 
        }
    };
    //解决有些时候,在鼠标松开的时候,元素仍然可以拖动;
    document.ondragstart = function(ev) {
        ev.preventDefault();
    };
    document.ondragend = function(ev) {
        ev.preventDefault();
    };
}
/*HERE */
var meatfired = document.querySelector("#meatfired");
var meatfireds = document.querySelector("#meatfireds");
meatfired.onmousedown = function(e){
    count = count + 1;
    if(cookedMeat > 0)
    {
        if(cookedMeat == 1)
            meatfired.style.display = "none";
        else {
            if(cookedMeatArr[1] == 2)
                meatfired.src = "image/meat2.png";
            else if(cookedMeatArr[1] == 3)
                meatfired.src = "image/meat3.png";
            else if(cookedMeatArr[1] == 4)
                meatfired.src = "image/meat4.png";
        }
        var meatfired1 = document.createElement("li");
        meatfired1.style = "z-index:" + String(count);
        if(cookedMeatArr[0] == 2) {
            meatfired1.innerHTML = '<div class="meatfired1"> <img src="image/meat2.png"></div>';
            meatfired1.src = "image/meat2.png";
        }
        else if(cookedMeatArr[0] == 3) {
            meatfired1.innerHTML = '<div class="meatfired1"> <img src="image/meat3.png"></div>';
            meatfired1.src = "image/meat3.png";
        }
        else if(cookedMeatArr[0] == 4) {
            meatfired1.innerHTML = '<div class="meatfired1"> <img src="image/meat4.png"></div>';
            meatfired1.src = "image/meat4.png";
        }
        meatfireds.appendChild(meatfired1);
        var event = e || window.event; //兼容性写法
        //鼠标相对于图片的位置
        var dx = event.clientX - meatfired1.offsetLeft;
        var dy = event.clientY - meatfired1.offsetTop;
        mousedownMusic.play();
        //鼠标移动时
        document.onmousemove = function(e) {
            var event = e || window.event; 
            meatfired1.style.left = event.clientX - dx + 'px';
            meatfired1.style.top = event.clientY - dy + 'px';
        };
        //鼠标抬起时
        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
            var list = burger.getElementsByTagName("li");
            if(list.length > 0) //第一个只能取汉堡底
            {
                mouseupMusic.play();
                var li = list[list.length - 1];
                meatfired1.style.top = li.offsetTop - 11 + 'px';
                if(meatfired1.offsetLeft - li.offsetLeft <= 35 && meatfired1.offsetLeft - li.offsetLeft >= -35) 
                {
                    cookedMeat--;
                    cookedMeatArr.shift();
                    burger.appendChild(meatfired1);
                }
                else //回到原来的位置
                {
                    meatfired1.remove();
                    meatfired.style.display = "block";
                    if(cookedMeatArr[0] == 2)
                        meatfired.src = "image/meat2.png";
                    else if(cookedMeatArr[0] == 3)
                        meatfired.src = "image/meat3.png";
                    else if(cookedMeatArr[0] == 4)
                        meatfired.src = "image/meat4.png";
                }
            }
            else
            {
                meatfired1.style.left = meatfired.style.left;
                meatfired1.style.top = meatfired.style.top;
                meatfired1.style.display = "none";
                list.removeChild(list[list.length - 1]); 
            }
        };
        //解决有些时候,在鼠标松开的时候,元素仍然可以拖动;
        document.ondragstart = function(ev) {
            ev.preventDefault();
        };
        document.ondragend = function(ev) {
            ev.preventDefault();
        };
    }
}
var burgertop = document.querySelector("#burgertop");
var burgertops = document.querySelector("#burgertops");
var plate = document.querySelector("#plate");
var judge = document.querySelector("#judge");
var stickticket = document.querySelector("#stickticket");
var stickbg = document.querySelector("#stickbg");
var ingredient = document.querySelector("#ingredient");
var order = document.querySelector("#order");
var tickethere = document.querySelector("#tickethere");
var judger1 = document.querySelector("#judger1");
var judgeman = document.querySelector("#judgeman");
var money = document.querySelector("#money");
var coins = document.querySelector("#coins");

burgertop.onmousedown = function(e){
    count = count + 1;

    var burgertop1 = document.createElement("li");
    burgertop1.style = "z-index:" + String(count);
    burgertop1.innerHTML = '<div class="burgertop1"> <img src="image/burgertop.png"></div>';
    burgertops.appendChild(burgertop1);

    var event = e || window.event; //兼容性写法
    //鼠标相对于图片的位置
    var dx = event.clientX - burgertop1.offsetLeft;
    var dy = event.clientY - burgertop1.offsetTop;

    mousedownMusic.play();
    //鼠标移动时
    document.onmousemove = function(e) {
        var event = e || window.event; 
        burgertop1.style.left = event.clientX - dx + 'px';
        burgertop1.style.top = event.clientY - dy + 'px';
    };
    //鼠标抬起时
    var score = 0;
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        var list = burger.getElementsByTagName("li");
        if(list.length > 0) //第一个只能取汉堡底
        {
            mouseupMusic.play();
            var li = list[list.length - 1];
            burgertop1.style.top = li.offsetTop - 11 + 'px';
            if(burgertop1.offsetLeft - li.offsetLeft <= 35 && burgertop1.offsetLeft - li.offsetLeft >= -35)
            {
                burger.appendChild(burgertop1);

                stickticket.style.display = "block";
                buildbg.style.display = "none";
                ingredient.style.display = "none";
                saucebottle.style.display = "none";
                order.style = "z-index:999";

                tickethere.onclick = function (){
                    ticketMusic.play();
                    order.style = "z-index:802";
                    order.style.left = '280px';
                    order.style.top = '270px';
                    order.style.transform = "scale(0.4)";
                    let ticketTimeout = setTimeout(function(){
                        stickbg.style.display = "none";
                        judger1.src = bodyBgs[CusRandom];
                        judge.style.display = "block";
                        money.style.display = "none";
                        coins.style.display = "none";
                        judgeman.style = "z-index:803"
                        plate.style = "z-index:800";
                        plate.style.top = '250px';
                        tickethere.style = "z-index:801";
                        tickethere.style.top = '220px';
                        score = 5; //评分机制
                        for(var i = 0; i < list.length; ++i)
                        {
                            //alert(list[i].src+','+ingredients[ingredientsRandom[5 - i]]);
                            if(i > 0 && i < list.length - 1 && score > 0 && 
                                list[i].src != ingredients[ingredientsRandom[5 - i]])
                            {
                                score -= 1;
                            }
                            list[i].style.top = list[i].offsetTop - 50 + 'px';
                            list[i].style.left = list[i].offsetLeft - 170 + 'px';
                        }
                        money.src = "image/money"+String(score)+".png";
                        order.style.top = '220px';
                        order.style.left = '110px';
                        plate.style.left = plate.offsetLeft - 170 + 'px';
                        tickethere.style.left = tickethere.offsetLeft - 170 + 'px';
                        buildscreenMusic.pause();
                        waitMusic.play();
                        coins.src = "image/coins.gif";
                        let musicTimeout = setTimeout(function(){
                            if(score == 5)
                            {
                                if(CusRandom == 0)
                                    judger1.src = "image/customer1_5.png";
                                else if(CusRandom == 1)
                                    judger1.src = "image/customer2_5.png";
                                else
                                    judger1.src = "image/customer3_5.png";
                                judge5Music.play();
                                money.style.display = "block";
                                tips.src = "image/tips.gif";
                                coins.style.display = "block";
                                multicoinMusic.play();
                            }
                            else if(score == 4)
                            {
                                if(CusRandom == 0)
                                    judger1.src = "image/customer1_4.png";
                                else if(CusRandom == 1)
                                    judger1.src = "image/customer2_4.png";
                                else
                                    judger1.src = "image/customer3_4.png";
                                judge4Music.play();
                                money.style.display = "block";
                                tips.src = "image/tips.gif";
                                coins.style.display = "block";
                                multicoinMusic.play();
                            }
                            else if(score == 3)
                            {
                                if(CusRandom == 0)
                                    judger1.src = "image/customer1_3.png";
                                else if(CusRandom == 1)
                                    judger1.src = "image/customer2_3.png";
                                else
                                    judger1.src = "image/customer3_3.png";
                                judge3Music.play();
                                money.style.display = "block";
                                tips.src = "image/tips.gif";
                                coins.style.display = "block";
                                multicoinMusic.play();
                            }
                            else if(score == 2)
                            {
                                if(CusRandom == 0)
                                    judger1.src = "image/customer1_12.png";
                                else if(CusRandom == 1)
                                    judger1.src = "image/customer2_12.png";
                                else
                                    judger1.src = "image/customer3_12.png";
                                judge2Music.play();
                                money.style.display = "block";
                                tips.src = "image/tips.gif";
                                coins.style.display = "block";
                                singlecoinMusic.play();
                            }
                            else if(score == 1)
                            {
                                if(CusRandom == 0)
                                    judger1.src = "image/customer1_12.png";
                                else if(CusRandom == 1)
                                    judger1.src = "image/customer2_12.png";
                                else
                                    judger1.src = "image/customer3_12.png";
                                judge1Music.play();
                                money.style.display = "block";
                                tips.src = "image/tips.gif";
                                coins.style.display = "block";
                                singlecoinMusic.play();
                            }
                            else
                            {
                                if(CusRandom == 0)
                                    judger1.src = "image/customer1_0.png";
                                else if(CusRandom == 1)
                                    judger1.src = "image/customer2_0.png";
                                else
                                    judger1.src = "image/customer3_0.png";
                                judge0Music.play();
                                money.style.display = "block";
                            }
                            clearTimeout(musicTimeout);
                            nextBtn.src = "image/next.png";
                            changePage = 1;
                        }, 3000)
                    },1000);
                }
            }
            else
                burgertop1.style.display = "none";
        }
        else
        {
            burgertop1.style.left = burgertop.style.left;
            burgertop1.style.top = burgertop.style.top;
            burgertop1.style.display = "none";
            list.removeChild(list[list.length - 1]); 
        }
    };
    //解决有些时候,在鼠标松开的时候,元素仍然可以拖动;
    document.ondragstart = function(ev) {
        ev.preventDefault();
    };
    document.ondragend = function(ev) {
        ev.preventDefault();
    };
}
