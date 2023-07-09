// 7:配列[1, 2, 3, true, false, "xx", "dff"]を用意して、数値だけに変換し合計値を出すコードを記述せよ
var array = [1, 2, 3, true, false, "xx", "dff"];
var i = 0;
var count = array.length;
var sum_array = 0;
do {
    if (typeof array[i] == "number") {
        sum_array += array[i];
    }
    i++;
} while (i < count);
console.log(sum_array);
