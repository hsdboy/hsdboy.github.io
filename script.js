let i = 1;
{
let black = document.querySelector(".black");
let red = document.querySelector(".red");
let float = document.querySelector(".float-font");

let star = document.querySelectorAll(".black div");
let black2 = document.querySelector(".black2");
let blackitem = document.querySelectorAll(".black2item");

red.onclick = () => {
    if (i % 3 === 0) {
        black.style.zIndex = -100;
        black.style.opacity = 0;
        black2.style.zIndex = -100;
        black2.style.opacity = 0;
        for (let j = 0; j < 6; j++) {
            star[j].className = "";
        }
    }
    else if (i % 3 === 1) {
        float.style.zIndex = 99;
        black.style.zIndex = 100;
        black.style.opacity = 1;
        for (let j = 0; j < 6; j++) {
            star[j].classList = ("star")
        }

    }
    if (i % 3 === 2) {
        black.style.zIndex = -100;
        black.style.opacity = 0;
        black2.style.zIndex = 101;
        black2.style.opacity = 1;
    }
    i++;
};
    for (let j = 0; j < 100; j++) {
        blackitem[j].onclick = () => {
            blackitem[j].style.opacity = 0;
        }
    }
}

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
let bit=document.querySelector(".bit");
let button=document.querySelector(".lyric-button");
button.onclick = () => {
    if (i % 2 === 0) {
       setTimeout(function () {
           audio.play();
           ul.style.animationPlayState = "running";
       },1000);
        bit.classList.remove("bid");
    }
    else if (i % 2 === 1) {
        setTimeout(function () {
            audio.pause();
            ul.style.animationPlayState = "paused";
        },1000);
        bit.classList.add("bid")
    }
    i++;
};

}