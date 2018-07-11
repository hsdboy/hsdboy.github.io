let i = 1;

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

{
    let audio = document.querySelector("audio");
    let lyric = document.querySelector(".lyric");
    let ul = document.querySelector(".lyric ul");
    let bit = document.querySelector(".bit");
    let button = document.querySelector(".lyric-button");
    button.onclick = () => {
        if (i % 2 === 0) {
            setTimeout(function () {
                audio.play();
                ul.style.animationPlayState = "running";
            }, 1000);
            bit.classList.remove("bid");
        }
        else if (i % 2 === 1) {
            setTimeout(function () {
                audio.pause();
                ul.style.animationPlayState = "paused";
            }, 1000);
            bit.classList.add("bid")
        }
        i++;
    };

}
{
    let clock = document.querySelector(".clock");
    for (let i = 0; i < 60; i++) {
        let point = document.createElement("div");
        point.style.cssText = `width:2px;height:${i % 5 === 0 ? 14 : 7}px;background:#000;
    transform:rotate(${i * 6}deg);position:absolute;left:98.5px;top:1px;transform-origin:2px 98px`;
        clock.appendChild(point);
    }

    let hours = document.createElement("div");
    hours.style.cssText = `width:6px;height:50px;background:#000;position:absolute;left:97px;top:50px;
   transform-origin:center bottom;`;
    clock.appendChild(hours);

    let minutes = document.createElement("div");
    minutes.style.cssText = `width:4px;height:70px;background:#000;position:absolute;left:98px;top:30px;
     transform-origin:center bottom;`;
    clock.appendChild(minutes);

    let seconds = document.createElement("div");
    seconds.style.cssText = `width:2px;height:90px;background:#000;position:absolute;left:99px;top:30px;
     transform-origin:center 70px;`;
    clock.appendChild(seconds);

    function time() {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        hours.style.transform = `rotate(${hour * 30 + minute / 2}deg)`;
        minutes.style.transform = `rotate(${minute * 6}deg)`;
        seconds.style.transform = `rotate(${second * 6}deg)`
    }

    time();
    setInterval(time, 1000);
}