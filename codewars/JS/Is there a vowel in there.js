
function isVow(a){
    const arrVowels = ["a", "e", "i", "o", "u"]
    return a.map(el => {
        for(prop of arrVowels){
            if(el === prop.charCodeAt()){
               return el = prop
            }
            
        }
        return el
    })

}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));