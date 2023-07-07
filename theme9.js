// 配列の中身が全て同じならTrue, そうでないならFalseを返却するコードを記述せよ
let array = [2, 2, 2, 2];

function same_array(array){
    let i = 0;
    let count = array.length;

    do{
        if(array[0] == array[i]){
            i++;
            if(i == count){
                return true;
            }
        }else{
            return false;
        }
    }while(i < count)
}

console.log(same_array(array));
