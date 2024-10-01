// Good Luck 💪🏾
function plusHashCount(str){
    let countplus=0;
    let counthash=0;
    for(let char of str){
        if(char==='+'){
            countplus++;
        }else if(char==='#'){
            counthash++;
        }
    } 
    return [countplus,counthash]

}

console.log(plusHashCount("###+")) 
console.log(plusHashCount("##+++#")) 
console.log(plusHashCount("#+++#+#++#")) 
console.log(plusHashCount("5667"))