// 5:配列[1, 2, 3, 4, 5, 6]を[6, 5, 4, 3, 2, 1]に(逆順)並び替えるコードを記述せよ
let array = [1, 2, 3, 4, 5, 6];
let reverse_array = [];
let i = 0;
let count = array.length;

do{
    i ++;
    reverse_array.push(array[count - i]);
}while(i < count)

console.log(reverse_array);