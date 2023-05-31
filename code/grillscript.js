//烤肉界面


//烤肉涉及的变量
var somemeat = document.querySelector("#somemeat");
var meats = document.querySelector("#meats");

var meatli = document.getElementById("meatPosition").getElementsByTagName("li");
var juiceli = document.getElementById("meatJuice").getElementsByTagName("li");
var clockli = document.getElementById("clock").getElementsByTagName("li");
var pointerli = document.getElementById("pointer").getElementsByTagName("li");

for(var i = 0; i < meatli.length; ++i) {
    //初始化12个肉饼位置
    meatli[i].innerHTML = '<div> <img src="../image/meat1.png" id="meatImg'+String(i)+'"></div>';
    meatli[i].style.left = 130 + i % 3 * 120 + 'px';
    meatli[i].style.top = 105 + parseInt(i/3) * 80 +'px';
    meatli[i].style.display = 'none';
    meatli[i].state = 0; //0：没有肉饼 1：未熟 2：熟一半 3：全熟 4：糊了
    meatli[i].second = 0; //肉饼烤的秒数
    //初始化12个肉汁位置
    juiceli[i].innerHTML = '<div> <img src="../image/meatjuice.gif" id="juiceImg'+String(i)+'"></div>';
    juiceli[i].style.left = 116 + i % 3 * 120 + 'px';
    juiceli[i].style.top = 110 + parseInt(i/3) * 80 +'px';
    juiceli[i].style.display = 'none';
    //初始化12个钟表位置
    clockli[i].innerHTML = '<div> <img src="../image/clock.png" id="clockImg'+String(i)+'"></div>';
    clockli[i].style.left = 235 + i % 3 * 120 + 'px';
    clockli[i].style.top = 110 + parseInt(i/3) * 80 +'px';
    clockli[i].style.display = 'none';
    //初始化12个钟表指针的位置
    pointerli[i].innerHTML = '<div> <img src="../image/pointer.png" id="pointerImg'+String(i)+'"></div>';
    pointerli[i].style.left = 235 + i % 3 * 120 + 'px';
    pointerli[i].style.top = 110 + parseInt(i/3) * 80 +'px';
    pointerli[i].style.display = 'none';
    pointerli[i].angle = 0; //指针的角度
}


var cookedMeat = 0; //记录有多少熟肉饼
var cookedMeatArr = new Array();
var cookingMeat = 0; //记录有多少在烤肉饼

//为meatPosition中每个li节点添加鼠标事件
for(var i = 0; i < meatli.length; ++i) {
    (function(j){
        meatli[j].onmousedown = function(e) { if(meatli[j].state >= 2){ //熟了才能移动
            for(var k = 0; k < meatli.length; ++k)
                if(meatli[k].state == 0)
                    juiceli[k].style.display = 'none';
            //记录原位置
            var originLeft = meatli[j].offsetLeft;
            var originTop = meatli[j].offsetTop;
            //将位置上的肉饼还原
            var event = e || window.event; 
            var dx = event.clientX - meatli[j].offsetLeft;
            var dy = event.clientY - meatli[j].offsetTop;
            document.onmousemove = function(e) {
                var event = e || window.event; 
                meatli[j].style.left = event.clientX - dx + 'px';
                meatli[j].style.top = event.clientY - dy + 'px';
            };
            document.onmouseup = function() {
                if((meatli[j].offsetLeft <= 80 && meatli[j].offsetTop <= 150) || //垃圾桶处
                    (meatli[j].offsetLeft >= 480 && meatli[j].offsetTop >= 330)) { //熟肉处
                    cookingMeat--;
                    if(meatli[j].offsetLeft >= 480 && meatli[j].offsetTop >= 330) { //熟肉处
                        cookedMeat++;
                        cookedMeatArr.push(meatli[j].state); //2：熟一半 3：全熟 4：糊了
                    }
                    if(cookingMeat == 0) {
                        grillburgerMusic.pause();
                        if(cookedMeat > 0) {
                            nextBtn.src = "../image/next.png";
                            changePage = 1;
                        }
                    }
                    //将位置上的肉饼还原
                    meatli[j].style.left = originLeft + 'px';
                    meatli[j].style.top = originTop + 'px';
                    meatli[j].style.display = 'none';
                    meatli[j].state = 0, meatli[j].second = 0;
                    clearInterval(meatli[j].timeId);
                    document.getElementById("meatImg"+String(j)).src = "../image/meat1.png";
                    document.getElementById("juiceImg"+String(j)).src = "../image/juicedisappear.gif";
                    pointerli[j].angle = 0;
                    pointerli[j].style.transform = `rotate(0deg)`;
                }
                else { //肉饼需要回退至原来位置
                    meatli[j].style.left = originLeft + 'px';
                    meatli[j].style.top = originTop + 'px';
                    //animateMove(meatli[j], originLeft, originTop);
                }
                document.onmousemove = null;
                document.onmouseup = null;
            };
            //解决有些时候,在鼠标松开的时候,元素仍然可以拖动
            document.ondragstart = function(ev) {
                ev.preventDefault();
            };
            document.ondragend = function(ev) {
                ev.preventDefault();
            };
        }};
        meatli[j].onmouseover = function() {
            clockli[j].style.display = 'block';
            pointerli[j].style.display = 'block';
        }
        meatli[j].onmouseout = function() {
            clockli[j].style.display = 'none';
            pointerli[j].style.display = 'none';
        }
    })(i)
}


//拖拽出一个新肉饼
somemeat.onmousedown = function(e) {
    //var index = 0; //meatImg下标
    var flag = 0; //是否有肉饼放下的标志
    //鼠标按下时
    somemeat.src = "../image/meatup.gif";
    var newMeat = document.createElement("li");
    newMeat.innerHTML = '<div> <img src="../image/meat1.png"></div>';
    meats.appendChild(newMeat);
    newMeat.style.left = '10px';
    newMeat.style.top = '310px';
    newMeat.style.animationPlayState = "paused";
    var event = e || window.event; //兼容性写法
    //鼠标相对于图片的位置
    var dx = event.clientX - newMeat.offsetLeft;
    var dy = event.clientY - newMeat.offsetTop;
    //鼠标移动时
    document.onmousemove = function(e) {
        var event = e || window.event; 
        newMeat.style.left = event.clientX - dx + 'px';
        newMeat.style.top = event.clientY - dy + 'px';
    };
    //鼠标抬起时
    document.onmouseup = function() {
        if(newMeat.offsetLeft <= 80 && newMeat.offsetTop <= 150) //垃圾桶处
            flag = 0;
        else if(newMeat.offsetLeft >= 480 && newMeat.offsetTop >= 330) //熟肉处
            flag = 0;
        else { //放下肉饼至固定位置，位置上无肉饼时才可以放下
            if(newMeat.offsetLeft <= 200) {
                if(newMeat.offsetTop <= 160) {
                    if(meatli[0].state == 0) {
                        meatli[0].style.display = 'block', meatli[0].state = 1;
                        flag = 1; addTimer(0);
                    }
                } else if(newMeat.offsetTop <= 240) {
                    if(meatli[3].state == 0) {
                        meatli[3].style.display = 'block', meatli[3].state = 1;
                        flag = 1; addTimer(3);
                    }
                } else if(newMeat.offsetTop <= 320) {
                    if(meatli[6].state == 0) {
                        meatli[6].style.display = 'block', meatli[6].state = 1;
                        flag = 1; addTimer(6);
                    }
                } else {
                    if(meatli[9].state == 0) {
                        meatli[9].style.display = 'block', meatli[9].state = 1;
                        flag = 1; addTimer(9);
                    }
                }
            }
            else if(newMeat.offsetLeft <= 320) {
                if(newMeat.offsetTop <= 160) {
                    if(meatli[1].state == 0) {
                        meatli[1].style.display = 'block', meatli[1].state = 1;
                        flag = 1; addTimer(1);
                    }
                } else if(newMeat.offsetTop <= 240) {
                    if(meatli[4].state == 0) {
                        meatli[4].style.display = 'block', meatli[4].state = 1;
                        flag = 1; addTimer(4);
                    }
                } else if(newMeat.offsetTop <= 320) {
                    if(meatli[7].state == 0) {
                        meatli[7].style.display = 'block', meatli[7].state = 1;
                        flag = 1; addTimer(7);
                    }
                } else {
                    if(meatli[10].state == 0) {
                        meatli[10].style.display = 'block', meatli[10].state = 1;
                        flag = 1; addTimer(10);
                    }
                }
            }
            else {
                if(newMeat.offsetTop <= 160) {
                    if(meatli[2].state == 0) {
                        meatli[2].style.display = 'block', meatli[2].state = 1;
                        flag = 1; addTimer(2);
                    }
                } else if(newMeat.offsetTop <= 240) {
                    if(meatli[5].state == 0) {
                        meatli[5].style.display = 'block', meatli[5].state = 1;
                        flag = 1; addTimer(5);
                    }
                } else if(newMeat.offsetTop <= 320) {
                    if(meatli[8].state == 0) {
                        meatli[8].style.display = 'block', meatli[8].state = 1;
                        flag = 1; addTimer(8);
                    }
                } else {
                    if(meatli[11].state == 0) {
                        meatli[11].style.display = 'block', meatli[11].state = 1;
                        flag = 1; addTimer(11);
                    }
                }
            }
        }
        if(flag == 0) //肉饼需要回退至somemeat处
        {
            //newMeat.remove();
            newMeat.style.animationPlayState = "running";
            newMeat.addEventListener("animationend", function () {
                newMeat.remove();
            });
            somemeat.src = "../image/meatdown.gif";
        }
        else //有肉在烤
        {
            newMeat.remove();
            landburgerMusic.play();
            cookingMeat++;
            nextBtn.src = "../image/next0.png";
            changePage = 0;
        }
        document.onmousemove = null;
        document.onmouseup = null;
    };
    //解决有些时候,在鼠标松开的时候,元素仍然可以拖动
    document.ondragstart = function(ev) {
        ev.preventDefault();
    };
    document.ondragend = function(ev) {
        ev.preventDefault();
    };
}

//放下肉饼，添加计时器
function addTimer(index) {
    clearInterval(meatli[index].timeId);
    meatli[index].timeId = setInterval(function () {
        meatli[index].second++;
        pointerli[index].angle += 18;
        pointerli[index].style.transform = `rotate(${pointerli[index].angle}deg)`;
        if(meatli[index].second == 5) {
            document.getElementById("meatImg"+String(index)).src = "../image/meat2.png";
            meatli[index].state = 2;
            document.getElementById("juiceImg"+String(index)).src = "../image/meatjuice.gif";
            juiceli[index].style.display = 'block';
            grillburgerMusic.play();
        }
        else if(meatli[index].second == 10) {
            document.getElementById("meatImg"+String(index)).src = "../image/meat3.png";
            meatli[index].state = 3;
        }
        else if(meatli[index].second == 15) {
            document.getElementById("meatImg"+String(index)).src = "../image/meat4.png";
            meatli[index].state = 4;
        }
    }, 1000);
}


//自动移动
// function animateMove(element, targetLeft, targetTop) {
//     //先清理定时器（为了保证每次调用的都是同一个定时器 或者说 无论点多少次按钮都只调用一个定时器）
//     clearInterval(element.timeId);
//     //启动一个定时器，定时器的Id值存储到了一个对象的属性中
//     element.timeId = setInterval(function () {
//         var currentLeft = element.offsetLeft;
//         var currentTop = element.offsetTop; //获取当前位置
//         var stepL = Math.abs(targetLeft - currentLeft) / 10;
//         var stepT = Math.abs(targetTop - currentTop) / 10;
//         stepL = targetLeft - currentLeft > 0 ? stepL : -stepL; //决定左右移动方向
//         stepT = targetTop - currentTop > 0 ? stepT : -stepT; //决定上下移动方向
//         currentLeft += stepL;
//         currentTop += stepT; //移动位置
//         if(Math.abs(targetLeft - currentLeft) > Math.abs(stepL)) { //与目标的距离>每次移动的step
//             element.style.left = currentLeft + 'px';
//             element.style.top = currentTop + 'px';
//         } else { //马上到达目标了（与目标的距离<step）
//             clearInterval(element.timeId);  //清理定时器
//             element.style.left = targetLeft + 'px';
//             element.style.top = targetTop + 'px'; //直接到达目标位置
//         }
//     }, 10);
// }