
gsap.from("#img", {
    opacity: 0,
    duration: 1,
    y: -20,
    scale: 1.1,
});

let array = ["images/image copy 2.png", "images/image copy.png", "images/image.png"];
let img = document.getElementById("img");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let count = 0;
let slidefnc = () => {
    next.onclick = () => {
        count++;
        if (count >= array.length) {
            count = 0;
        }    
        img.src = array[count];
    }    
    prev.onclick = () => {
        count--;
        if (count < 0) {
            console.log(count);
            count = array.length - 1;
            console.log(count);
        }    
        img.src = array[count];
    }    
}    
slidefnc();
