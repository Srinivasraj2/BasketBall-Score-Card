let HsEle = document.getElementById("home-score");
let GsEle = document.getElementById("guest-score");
function makezero() {
    HsEle.textContent = 0;
    GsEle.textContent = 0;
    lead()
}
function hinc1() {
    let count = parseInt(HsEle.textContent);;
    count++;
    HsEle.textContent = count; lead()
}
function hinc2() {
    let count = parseInt(HsEle.textContent);;
    count += 2;
    HsEle.textContent = count; lead()
}
function hinc3() {
    let count = parseInt(HsEle.textContent);;
    count += 3;
    HsEle.textContent = count; lead()
}
function ginc1() {
    let count = parseInt(GsEle.textContent);
    count += 1;
    GsEle.textContent = count; lead()
}

function ginc2() {
    let count = parseInt(GsEle.textContent);
    count += 2;
    GsEle.textContent = count; lead()
}

function ginc3() {
    let count = parseInt(GsEle.textContent);
    count += 3;
    GsEle.textContent = count; lead()
}
leaderEle = document.getElementById("leader");
leaderEle.textContent = "Draw!!!";
function lead() {

    if (parseInt(HsEle.textContent) > parseInt(GsEle.textContent)) {
        leaderEle.textContent = "Home is Leading";
    }
    else if (parseInt(HsEle.textContent) < parseInt(GsEle.textContent)) {
        leaderEle.textContent = "Guest is Leading";
    }
    else {
        leaderEle.textContent = "Draw!!!";
    }
}