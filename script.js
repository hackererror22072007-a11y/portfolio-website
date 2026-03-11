const text = "ECE Student | Embedded Systems | AI & IoT Developer";
let index = 0;

function typing(){
if(index < text.length){
document.querySelector(".typing").innerHTML += text.charAt(index);
index++;
setTimeout(typing,100);
}
}

typing();