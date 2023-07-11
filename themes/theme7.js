// 7:配列[1, 2, 3, true, false, "xx", "dff"]を用意して、数値だけに変換し合計値を出すコードを記述せよ
var array = [1, 2, 3, true, false, "xx", "dff"];
var xi = 0;
var count = array.length;
var sum_array = 0;
do {
    if (typeof array[xi] === "number") {
        sum_array += array[xi];
    }
    else {
    }
    xi++;
} while (xi < count);
console.log(sum_array);
