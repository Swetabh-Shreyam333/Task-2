let button = document.querySelector('.button');

button.addEventListener('click',()=>{
    let arr = document.querySelectorAll(".inp2");
    arr.forEach((i)=>{
        console.log(i.value);
    })
})