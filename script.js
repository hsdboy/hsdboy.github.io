let i = 1;

{
    $(".red").on("click", function () {

            if (i % 2 === 0) {
                $(".black").css("display", "none")

            }
            else if (i % 2 === 1) {
                $(".black").css("display", "block");

            }
            i++;
        }
    )
    let cons = 10;
    do {
        $(".black").empty()
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let isbomb = Math.random() > 0.9
                $("<div>")
                    .attr("id", i + "-" + j)
                    .addClass(function () {
                        return "block " + (isbomb ? "bomb" : "")
                    })
                    .appendTo($(".black"))

            }
        }
    } while ($(".bomb").length != cons)

    $(".black").on("click", ".block", clickhead);
    $(".black").on("contextmenu", ".block:not(.number)", rightclick);

    function rightclick(e) {
        e.preventDefault();
        $(this).toggleClass("flag")
        if ($(".bomb").filter(".flag").length === cons) {
            alert("finish")
        }
    }

    function clickhead() {
        if ($(this).hasClass("bomb")) {
            $(".bomb").addClass("show")
            alert("game over")
            return;
        }
        if ($(this).hasClass("number")) {
            return;
        }
        if ($(this).hasClass("flag")) {
            return;
        }
        $(this).addClass("number")
        let n = 0;
        let id = $(this).attr("id");
        let x = parseInt(id.charAt(0))
        let y = parseInt(id.charAt(2))
        for (let i = x - 1; i <= x + 1; i++) {
            for (let j = y - 1; j <= y + 1; j++) {
                if ($("#" + i + "-" + j).hasClass("bomb")) {
                    n++;
                }
            }
        }
        $(this).html(n).addClass("back")
        if (n === 0) {
            for (let i = x - 1; i <= x + 1; i++) {
                for (let j = y - 1; j <= y + 1; j++) {
                    let obj = $("#" + i + "-" + j);
                    if (!obj.hasClass("number") && obj.length === 1) {
                        clickhead.call(obj[0]);
                    }
                }
            }
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