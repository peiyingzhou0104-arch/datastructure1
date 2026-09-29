function min(A){//宣告函式，接收參數A(代表要傳入的陣列)
    var Min=A[0];//宣告名字叫Min的變數、陣列的第一個數指定給它，作為初始的最小值
    for (var I=1;I<A.length;I++){
        //A陣列名稱，".length"是js內建給陣列使用的屬性，自動計算陣列裡面裝了幾個
        //I 是一個變數名稱，代表陣列的 index，迴圈執行的時候I會變成陣列中第 I 個位置
        if(A[I]<Min){
            Min=A[I]
        }
    }
    return Min;
}

var Ary=[5,0,3,9,6,7,2,1];

console.log("Min="+min(Ary))

///找位置