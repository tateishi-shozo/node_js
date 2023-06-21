// 6:配列[1, 2, 3]の累積を求め、[1, 3, 6]に変換するコードを記述せよ
let array_1 = [1, 2, 3, 4, 5];
let accumulation_array = [array[0]];
let i = 1;
let count = array.length;
let sum_array = 0;

do{
    sum_array = array[i-1] + array[i];
    accumulation_array.push(sum_array);
    i++;
}while(i < count)

console.log(accumulation_array);