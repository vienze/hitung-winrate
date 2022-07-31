//Get Element
const tMatch = document.querySelector('#tMatch');
const tWr = document.querySelector('#tWr');
const reqWr = document.querySelector('#reqWr');
const hasil = document.querySelector('#hasil');
const tHasil = document.querySelector('#tHasil');

//set hasil display none
tHasil.style.display = "none";

//function rumus
const rumus = (tMatch, tWr, reqWr) => {
    let totalWin = tMatch * (tWr / 100);
    let totalLose = tMatch - totalWin;
    let sisaWr = 100 - reqWr;
    let wrResult = 100 / sisaWr;
    let seratus = totalLose * wrResult;
    let totalSemua = seratus - tMatch;
    return Math.round(totalSemua)
};

//function hasil
const showHasil = () => {
    const totalNum = rumus(tMatch.value, tWr.value, reqWr.value);
    const text = `Anda memerlukan sekitar<b>&nbsp;${totalNum}</b>&nbsp;win tanpa lose untuk mendapatkan win rate&nbsp;<b>${reqWr.value}%</b> `;
    tHasil.style.display = "block";
    tMatch.value = "";
    tWr.value = "";
    reqWr.value = "";
    tHasil.innerHTML = text
};

//event click for show hasil
hasil.addEventListener("click", showHasil);