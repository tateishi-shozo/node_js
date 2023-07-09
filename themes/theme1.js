// 1:配列[1, 2, 3]を用意して、合計値を出すコードを記述せよ
let array = [1,2,3];
let i = 0;
let array_sum = 0;

do{
    array_sum += array[i];
    i ++;
}while(i < 3)

console.log(array_sum);