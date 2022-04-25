const letter_colors = ["#e0bbe4ff", "#957dadff", "#d291bcff", "#fec8d8ff", "#fffef2ff", "#fff1d1ff", "#ffdecaff", "#aed7ebff", "#b8ebe9ff", "#e0bbe4ff", "#957dadff", "#d291bcff", "#fec8d8ff", "#fffef2ff"];
const numberOfletters = 14;
const timer = ms => new Promise(res => setTimeout(res, ms));

async function colorWheel(startNumber) {
    for (let i = 1; i <= numberOfletters; i++) {
        document.getElementById("fill_" + i).setAttribute("fill", letter_colors[startNumber-1]);
        await timer(100);
    }
}

async function lettersUp() {
    for (let i = 1; i <= numberOfletters; i++) {
        colorWheel(i);
        let letterCurrent = document.getElementById("letter_" + i);
        letterCurrent.style.transform ="translateY(-1px)";
        await timer(100);
        if (i == numberOfletters/2) {
            lettersDown();
        }
    }
}

async function lettersDown() {
    for (let i = 1; i <= numberOfletters; i++) {
        let letterCurrent = document.getElementById("letter_" + i);
        letterCurrent.style.transform ="translateY(1px)";
        await timer(100);
        if (i == numberOfletters/2) {
            lettersUp();
        }
    }
}

async function blinkyStars() {
    for (let i = 1; i <= 8; i++) {
        let star = document.getElementById("star" + i);
        star.style.animation = "show50percent 0.3s ease alternate infinite";
        await timer(10);
        if (i == 8) {
            i = 1;
        }
    }
}

window.addEventListener("load", initFunctions, true); 

function initFunctions(){  
    lettersUp();
    blinkyStars();
 };
