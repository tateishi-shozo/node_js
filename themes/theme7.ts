// 7:配列[1, 2, 3, true, false, "xx", "dff"]を用意して、数値だけに変換し合計値を出すコードを記述せよ
let array = [1, 2, 3, true, false, "xx", "dff"];
let xi : number = 0;
let count :number = array.length;
let sum_array : number = 0;

do{
    if(typeof array[xi] === 'number' ){
        sum_array = sum_array + array[xi];
    }else{
    }
    xi++;
}while(xi < count)

console.log(sum_array);