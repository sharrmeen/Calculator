function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    if(b===0)
        return "Nice Try"
    return a/b
}
let a;
let b;
let operator=null;

const answ = add(10,5)
console.log("Answer"+answ)

const btns = document.querySelectorAll('.button')

const generateExp=(event)=>{
    const button=event.target
    if(button.classList.contains('num') && operator===null)
        {a+=button.textContent
        // console.log("Number is clicked "+button.textContent)
        console.log(a)
        }

    else if(button.classList.contains('num') && operator!==null)
    {
        b+=button.textContent
        console.log(b)
    }

    else if(button.classList.contains('op') && operator===null)
       { operator=button.textContent
        console.log(operator)
        }

        

}
btns.forEach(btn=>{
    btn.addEventListener("click",generateExp)
})

