const employee = [{name:"hari",emp_Id: 1,salary:30000},
        {name:"jagath",emp_Id: 2,salary:80000},
        {name:"suriya",emp_Id: 3,salary:50000},
        {name:"jk",emp_Id: 4,salary:70000},]

const btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    const emp = document.getElementById('emp')
   console.log(employee.salary >= 50000)
    if(employee.salary >= 50000){
        emp.innerHTML= employee   
        console.log('if')
    }else{
        console.log('else')
    }
})