function double(ops){
    var results = null;
    let temp = [];

    for(let i = 0;i<ops.length;i++){
        if(ops[i] =="C"){
            temp.pop();
        }else if(ops[i]=="+"){
            let sumInt = parseInt(temp[temp.length-1]) + parseInt(temp[temp.length-2]);
            temp.push(sumInt)
        }else if(ops[i]=="D"){
            let doubleInt = temp[temp.length-1] *2;
            temp.push(doubleInt);
        }else{
            temp.push(parseInt(ops[i]));
        }
    }
    results = temp.reduce((acc,calc)=>acc + calc,0)
    return results;

}
console.log(double(["5","2","C","D","+"]))