
let btn1 = document.querySelectorAll('.one');
let btn2 = document.querySelectorAll('.two');

let bgC = () => {
    let hexvalue = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors = colors + hexvalue[Math.floor(Math.random() * 16)];
    }
    return colors;
};

let handle1 = () => {
     rgb1 = bgC();
    console.log(rgb1);
    document.body.style.backgroundImage =  `linear-gradient(to right , ${rgb1}, #555)`
};




let handle2 = () =>{
     rgb2 = bgC();
    console.log(rgb2);
    document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1}, #555)`
}

// Add event listener to each element matching '.one'
btn1.forEach(btn => {
    btn.addEventListener("click", handle1);
});

// Add event listener to each element matching '.two'
btn2.forEach(btn => {
    btn.addEventListener("click", handle1); // changed handle1 to handle2 if defined
});























