const header = document.getElementById("header");
const h = header.clientHeight;
const winH = window.innerHeight;
const docH = document.documentElement.scrollHeight;
const windBtm = docH - winH;

let pos = 0;
let lastPos = 0;

const onScroll = () => {
    if(pos > h && pos > lastPos){
        header.classList.add("header--unpinned");
    }
    if(pos < h || pos < lastPos || windBtm <= pos){
        header.classList.remove("header--unpinned");
    }
    lastPos = pos;
};

window.addEventListener("scroll",() => {
    pos = window.scrollY;
    onScroll();
});