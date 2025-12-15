const card = document.getElementById("card")
const btn = document.getElementById("btn")

let added = false;
btn.addEventListener('click',()=>{
    if(!added){
        card.style.backgroundColor = "green"
        btn.innerText = "Added to cart"
        btn.style.backgroundColor= "green"
        added = true
    }else{
        card.style.backgroundColor = "yellowgreen"
        btn.innerText = "Add to cart"
        btn.style.backgroundColor= "chocolate"
        added = false
    }
})