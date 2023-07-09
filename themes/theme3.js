// 3:配列[1, 2, 3, 4, 5, 6]を用意して、一番大きい数値を返却するコードを記述せよ
let array = [1,2,3,4,5,6];
let i = 0;
let k = 1;
let count = array.length;
let max = 0;

do{
    if(array[i] < array[k]){
        max = array[k];
        i = k;
        k ++;
    }else{
        max = array[i];
        k ++;
    }
}while(k < count)

console.log(max);