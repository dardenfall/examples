
var toBeSorted = [8,5,6,1,4,2,3];
var result = [1,2,3,4,5,6,8];

function test()
{
    for (var i = 0; i < toBeSorted.length; i++) {
        if(toBeSorted[i] !== result[i]){
            return "" + toBeSorted[i] + " not equal to " + result[i];
        }
    };

    return "works!";
}

function mergeSort(splitTarget1, splitTarget2){
    debug(splitTarget1);
    debug(splitTarget2);
    
    if(splitTarget1.length === 0){
        return splitTarget2;
    } 
    else if(splitTarget2.length === 0){
        return splitTarget1;
    }
    else if(splitTarget1.length === 1){
        var retval = [],
        tar1 = splitTarget1[0],
        tar2 = splitTarget2[0];
        if(tar1 > tar2){
            return [tar1,tar2];
        }
        else{
            return [tar2,tar1];  
        } 
    }
    else return mergeSort(splitTarget1.slice(0, splitTarget1.length/2),
        splitTarget2.slice(splitTarget2.length/2, splitTarget2.length));
}

debug(toBeSorted);
debug(result);

(function(){
    debug(toBeSorted);
    mergeSort(toBeSorted.slice(0, toBeSorted.length/2),
        toBeSorted.slice(toBeSorted.length/2, toBeSorted.length)); 
    debug(test());
})();