function sum(n){
    var result=0;//宣告一個變數初始值=0
    for(let index=1; index <= n; index++){
        result += index;
    }
    return result;
}
console.log("1+2+...+100="+sum(100));