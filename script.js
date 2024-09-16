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
let a='';
let b='';
let operator=null;

const display=document.querySelector('.display')
const btns = document.querySelectorAll('.button')

const generateExp=(event)=>{
    const button=event.target
    if(button.classList.contains('num') && operator===null)
        {a+=button.textContent
        
        display.textContent=a
        
        }

    else if(button.classList.contains('num') && operator!==null)
    {
        b+=button.textContent
        display.textContent=b
    
    }

    else if(button.classList.contains('op') && operator===null)
       { operator=button.textContent
        
        display.textContent=operator
        }
    else if(button.classList.contains('equal') && (a!=='' && b!=='' && operator!==null) )
    {
       let answer = operate(a,b,operator)
       if(typeof answer !=='number')
        display.textContent=answer
     
       else{
       answer = parseFloat(answer.toFixed(2))
       a=answer
       operator=null
       b=''
       
       display.textContent=answer}
    }

    else if(button.classList.contains('clear')){
        a=''
        b=''
        operator=null
        display.textContent=''
    }

    else if(button.classList.contains('del')){
        if(operator===null)
        {
            a=a.slice(0,-1) 
            display.textContent=a
        }
        else
        {
            b=b.slice(0,-1)
            display.textContent=b
        }
    }

    else if(button.classList.contains('decimal')){
        if(operator===null && !a.includes('.'))
            {
                a+='.' 
                display.textContent=a
            }

            else if(!b.includes('.'))
            {
                b+='.'
                display.textContent=b
            }
    }


}


btns.forEach(btn=>{
    btn.addEventListener("click",generateExp)
})

function operate(a,b,operator){
    a=parseFloat(a)
    b=parseFloat(b)
    switch (operator) {
        case '+':
            return  add(a,b)
            
    
        case '-':
            return sub(a,b)
            
    
        case '*':
            return multiply(a,b)
            
    
        case '/':
            return divide(a,b)            
            
    
        default:
            return ("enter valid expression")
            
    }
}
