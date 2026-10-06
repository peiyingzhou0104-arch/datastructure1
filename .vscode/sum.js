function sum(n){
    var result=0;//宣告一個變數初始值=0
    for(let index=1; index <= n; index++){
        result += index;
    }
    return result;
}
function sum2(n){  
    var sign=1;
    var result=0;
    for (let index=1;index <= n; index++){
        result=result + index*sign;
        sign  *=-1;
    }
    return result;
}
console.log("1+2+3+...100="+sum2(100));