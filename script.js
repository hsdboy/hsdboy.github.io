let i = 1;

//云
{
    let floa = document.querySelectorAll(".float");
    let box2 = document.querySelector(".box2");
    let widthbox2 = box2.offsetWidth;
    let pos = [];
    for (let i = 0; i < floa.length; i++) {
        let floatwidth = floa[i].offsetWidth;
        let floatheight = floa[i].offsetHeight;
        let rleft;
        let rtop;
        do {
            rleft = Math.floor(Math.random() * (widthbox2 - floatwidth));
            rtop = Math.floor(Math.random() * 100);
        } while (checkpos(rleft, rtop));
        floa[i].style.cssText = `left:${rleft}px;top:${rtop}px`;
        pos.push({l: rleft, t: rtop, w: floatwidth, h: floatheight})
    }

    function checkpos(l, t) {
        for (let i = 0; i < pos.length; i++) {
            if (l < pos[i].l + pos[i].w && l > pos[i].l - pos[i].w && t < pos[i].t + pos[i].h && t > pos[i].t - pos[i].h) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < 3; i++) {
        let speed = 1;
        let left = pos[i].l;
        setInterval(function () {
            left += speed;
            if (left >= (widthbox2 - pos[i].w) || left <= 0) {
                speed *= -1;
            }
            floa[i].style.left = left + "px";
        }, 50)
    }
}

//时钟
{
    let clock = document.querySelector(".clock");
    let shadow = document.querySelector(".shadow")
    for (let i = 0; i < 60; i++) {
        let point = document.createElement("div");
        let point2 = document.createElement("div");
        point.style.cssText = `width:2px;height:${i % 5 === 0 ? 14 : 7}px;background:#000;
    transform:rotate(${i * 6}deg);position:absolute;left:98.5px;top:1px;transform-origin:2px 98px`;
        point2.style.cssText = `width:2px;height:${i % 5 === 0 ? 14 : 7}px;background:#fff;
    transform:rotate(${i * 6}deg);position:absolute;left:98.5px;top:1px;transform-origin:2px 98px`;
        clock.appendChild(point);
        shadow.appendChild(point2);
    }

    let hours = document.createElement("div");
    let hours2 = document.createElement("div");
    hours.style.cssText = `width:6px;height:50px;background:#000;position:absolute;left:97px;top:50px;
   transform-origin:center bottom;`;
    hours2.style.cssText = `width:6px;height:50px;background:#fff;position:absolute;left:97px;top:50px;
   transform-origin:center bottom;`;
    clock.appendChild(hours);
    shadow.appendChild(hours2);

    let minutes = document.createElement("div");
    let minutes2 = document.createElement("div");
    minutes.style.cssText = `width:4px;height:70px;background:#000;position:absolute;left:98px;top:30px;
     transform-origin:center bottom;`;
    minutes2.style.cssText = `width:4px;height:70px;background:#fff;position:absolute;left:98px;top:30px;
     transform-origin:center bottom;`;
    clock.appendChild(minutes);
    shadow.appendChild(minutes2);

    let seconds = document.createElement("div");
    let seconds2 = document.createElement("div");
    seconds.style.cssText = `width:2px;height:90px;background:#000;position:absolute;left:99px;top:30px;
     transform-origin:center 70px;`;
    seconds2.style.cssText = `width:2px;height:90px;background:#fff;position:absolute;left:99px;top:30px;
     transform-origin:center 70px;`;
    clock.appendChild(seconds);
    shadow.appendChild(seconds2);

    function time() {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        hours.style.transform = `rotate(${hour * 30 + minute / 2}deg)`;
        minutes.style.transform = `rotate(${minute * 6}deg)`;
        seconds.style.transform = `rotate(${second * 6}deg)`
    }

    function time2() {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        hours2.style.transform = `rotate(${hour * 30 + minute / 2}deg)`;
        minutes2.style.transform = `rotate(${minute * 6}deg)`;
        seconds2.style.transform = `rotate(${second * 6}deg)`
    }

    time();
    time2();
    setInterval(time, 1000);
    setInterval(time2, 1000);


    $(function () {
        var oldY = null;
        var oldX = null;
        var isdown = false;
        $(".clock").mousedown(function (e) {
            isdown = true;
            oldY = e.clientY;
            oldX = e.clientX;
        });
        $(".clock").mousemove(function (e) {
            if (isdown) {
                $(".clock").css("transform", "rotateX(" + (-e.clientY + oldY) + "deg) rotateY(" + (e.clientX - oldX) + "deg)");
                console.log(-(e.clientY - oldY) / 2)
            }
        });
        $("html").mouseup(function (e) {
            isdown = false;
            oldY = null;
            oldX = null;
        });
    });
}

//图片
{
    let box3 = document.querySelector(".box3")
    let pic = document.querySelectorAll(".box3 .pic")
    let color = document.querySelectorAll(".color")
    for (let i = 0; i < 9; i++) {
        pic[i].onclick = function () {
            this.classList.toggle("act")
            color[i].style.opacity = "0"
        }
    }
    let i = 0;
    setInterval(function () {
        if (i === 9) {
            i = 0
            color[8].style.opacity = "1";
        }
        color[i].style.opacity = "0";
        if (i > 0) {
            color[i - 1].style.opacity = "1";
        }
        i++
    }, 2000)
}

//分割线
{
    let line = document.querySelector(".bottom")
    line.onmousedown = function () {
        let flag = false;
        line.onmouseover = function () {
            flag = true;
            setTimeout(function () {
                if (flag) {
                    line.classList.add("lineheight")
                    line.innerHTML = "Here is my secret area"
                }
            }, 2000)

            line.onmouseleave = function () {
                flag = false;
                line.classList.remove("lineheight")
            }
        }
    }

}
