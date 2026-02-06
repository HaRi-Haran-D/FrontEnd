const firstHighlight=document.querySelector('.highlight');
const allParagraphs=document.querySelectorAll('p');

console.log(firstHighlight)

console.log(allParagraphs)


const para = document.getElementById('para')
        const btn = document.getElementById('btn')
        btn.addEventListener('click',()=>{
            if (para.style.backgroundColor === 'blueviolet'){
                para.style.backgroundColor = 'red'
            }
            else{
                para.style.backgroundColor = 'blueviolet'
            }
        })