// フィボナッチ数列を実装せよ 1,1,2,3,5,8,13,21,34,55
export class Theme10 {
    public fibonacci(n:number):number{
        let array = [0, 1];
        let i = 2;
        let sum_array = 0;
    
        if(n < 2){
            return array[n];
        }else{
            do{
                sum_array = array[i-2] + array[i-1];
                array.push(sum_array);
                i++;
            }while(i <= n)
            return array[n];
        }
    }
}