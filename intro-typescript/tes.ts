const arr: number[] = [20, 19, 95, 12, 5];

function FindLowestHighestAvg(arr: number[]){
    let lowest = arr[0]? arr[0] : 0;

    for(let item of arr){
        if(item < lowest) lowest = item;
    }
}

FindLowestHighestAvg(arr);