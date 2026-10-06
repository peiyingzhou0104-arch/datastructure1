function average(s){
    //check data
    var sum=0;
    var avg;
    for(let i = 0; i < s.length; i++){
        sum += s[i];
    }
    avg = sum/s.length;
    return avg;
}
var ary=[];
var num=5;
var readline = require('readline-sync');
for (let i = 0; i < num; i++) {
    ary[i]=readline.questionFloat("input grade:"+i);   
}
console.log("average="+average(ary));