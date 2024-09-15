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

const answ = divide(10,5)
console.log("Answer"+answ)