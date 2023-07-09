// 2:配列[1, 2, 3]を用意して、平均値を出すコードを記述せよ
let array = [1,2,3];
let i = 0;
let max = array.length;
let array_sum = 0;

console.log(max);

do{
    array_sum += array[i];
    i ++;
}while(i < max)

let array_average = array_sum/max;

console.log(array_average);