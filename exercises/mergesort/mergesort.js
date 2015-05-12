var calls = 0;
var toBeSorted = [8,5,6,1,4,2,3];
var gold = [1,2,3,4,5,6,8];

function test(result)
{
    console.log("----------->" + result)
    for (var i = 0; i < result.length; i++) {
        if(result[i] !== gold[i]){
            return "" + result[i] + " not equal to " + gold[i];
        }
    };

    return "works!";
}

function mergeSort(array, tabs){
    var string = "",
        left = [],
        right = [];

    for (var i = 0; i < tabs; i++) {
        string += "/t";
    };
    console.log(string + array);

    if(array.length > 1){
        var left = mergeSort(array.slice(0, array.length/2), tabs++);
        var right = mergeSort(array.slice(array.length/2, array.length), tabs++);
        return merge (left, right);
    }
    else{
        return array;
    }
}

function merge(left, right){
    

    if(!left || left.length === 0){
        return right;
    } 
    else if(!right || right.length === 0){
        return left;
    }
    else {
        var result = [];

        while(left.length || right.length){
            var leftVal = null, rightVal = null;
            if(left.length){
                leftVal = left[0];
            }
            if(right.length){
                rightVal = right[0];
            }

            if(rightVal === null || left[0] < right[0]){
                result.push(left.shift());
            }
            else{
                result.push(right.shift())
            }
        }

        return result;
    }

}


(function(){
    debug(toBeSorted);
    var result = mergeSort(toBeSorted, 0); 
    console.log(test(result));
})();