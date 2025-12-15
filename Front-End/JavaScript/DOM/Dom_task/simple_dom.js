//1. Change the text of a paragraph when a button is clicked.
const para = document.getElementById("para");
const btn = document.getElementById("btn");

btn.addEventListener('click', ()=>{
    if(para.innerText === "Hi Monkey D Luffy"){
        para.innerHTML = "Hello there Mugiwara";
        para.style.color = "blue";
    }
    else{
        para.innerHTML = "Hi Monkey D Luffy";
        para.style.color = "coral";
    }
});


//2. Create a box and toggle its visibility using one button (hide/show).
const box =document.getElementById('box');
const bttn = document.getElementById('bttn');

bttn.addEventListener('click', ()=>{
    if(box.style.display === "flex"){
        box.style.display = "none";
        bttn.innerHTML = "Show";
    }
    else{
        box.style.display = "flex";
        bttn.innerHTML = "Hide";
    }
})

//3. Change background color of a div randomly when a button is pressed.
const color = document.getElementById('color');
const bun = document.getElementById('bun');

bun.addEventListener('click', ()=>{
    if(color.style.backgroundColor === "lightgray"){
        color.style.backgroundColor = "lightblue";
    }
    else if(color.style.backgroundColor === "lightblue"){
        color.style.backgroundColor = "darkblue";
    }
    else if(color.style.backgroundColor === "darkblue"){
        color.style.backgroundColor = "coral";
    }
    else if(color.style.backgroundColor === "coral"){
        color.style.backgroundColor = "bisque";
    }
    else if(color.style.backgroundColor === "bisque"){
        color.style.backgroundColor = "cyan";
    }
    else if(color.style.backgroundColor === "cyan"){
        color.style.backgroundColor = "chartreuse";
    }
    else{
        color.style.backgroundColor = "lightgray";
    }
})

// 4. On hover over an image, replace it with another image.
const img = document.getElementById('img');

img.addEventListener('mouseover', ()=>{
        img.src = "../../../HTML/img/rocks.jpg";
})

img.addEventListener('mouseout', ()=>{
    img.src = "../../../HTML/Onepiece/img/logo.png"
})

// 5. Create a counter with + and - buttons to increase/decrease value in DOM.
let count = 0;

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const num = document.getElementById('count');

plus.addEventListener('click', ()=>{
    count++;
    num.textContent = count;
});

minus.addEventListener('click', ()=>{
    count--;
    num.textContent = count;
});