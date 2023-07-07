// 8:配列[1, 2, 3, 4, 5, 6]を用意して、偶数ならtrue, 奇数ならfalseに変換するコードを記述せよ
let array = [1, 2, 3, 4, 5, 6];
let i = 0;
let count = array.length;
let return_array=[];

do{
    if(array[i] % 2 == 0){
        return_array.push(true);
    }else{
        return_array.push(false);
    }
    i++;
}while(i < count)

console.log(return_array);