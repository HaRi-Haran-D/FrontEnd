const mainTitle = document.getElementById('main-title');
const highlightedItems=document.getElementsByClassName('highlight');
const paragraphs = document.getElementsByTagName('p');

console.log(mainTitle);
console.log(highlightedItems);
console.log(paragraphs);

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

const num = (a,b)=>{
    return a+b
}

console.log(num(10,20))