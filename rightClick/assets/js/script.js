let contextMenu = document.querySelector(".wrapper");

document.addEventListener("contextmenu", e=>{
    e.preventDefault();


    let x = e.offsetX;
    let y = e.offsetY;
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";
});

function generateRandomCode() {
    //random code generatoru internet vasitesi ile tapdim.
    var myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return myRandomColor;
}
//Function calling on button click.
function getRandom() {
    let wrap = document.getElementById("body");
    wrap.style.backgroundColor = generateRandomCode();
}