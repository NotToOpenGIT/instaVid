let sourin = document.getElementById("element");
console.clear();
let inputs = document.querySelectorAll("input");
function set() {
    let perspective = inputs[0].value;
    let x = inputs[1].value;
    let y = inputs[2].value;
    let z = inputs[3].value;
    let deg = inputs[4].value;
    console.log(perspective, x, y, z, deg, inputs, sourin);
    sourin.style.transform = `perspective(${perspective}px) rotate3d(${x} ,${y} ,${z} ,${deg}deg)`
}
inputs[5].addEventListener("click",set);
