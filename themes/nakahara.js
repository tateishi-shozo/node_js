function binary(target){
    let tree = [
    [1],
    [0, 2, 4],
    [1, 3],
    [2],
    [1, 6],
    [6, 8],
    [4, 5, 7],
    [6, 9],
    [5],
    [7]
    ];

    let start = 0;
    let searched= new Array(tree.length).fill(false);
    let stack = tree[start];
    let step = 0;

    searched[start] = true;

    while(stack.length > 0){
        for( let i = 0; i < tree[step].length ; i++) {
            stack.push(tree[step][i]);
        };
        step += 1;

    let node = stack.pop();

    searched[node] = true;

    if(node === target){
        return true ;
    };

    let notSearched = [];
    for(let num = 0; num < searched.length ; num++){
      if(!searched[num]){
        notSearched.push(num);
      };
    };

    let nextNodes = [];
    let len = tree[node].length ;

    for(let j = 0; j < len ; j++){
      if(notSearched.includes(tree[node][j])){
        nextNodes.push(tree[node][j]);
      };
    };
    //push してループを継続
    nextNodes.forEach( function (value){
        stack.push(value) ;
    });
  };
};

binary(1);
