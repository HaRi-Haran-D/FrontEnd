const form = document.getElementById('form');

form.addEventListener('submit', (sub) =>{
    sub.preventDefault();
    const text = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log(`Your Name: ${text} Your Mail:${email}`);
});