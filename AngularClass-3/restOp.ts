function sumOfNum(...nums:number[]):number{
    var sum=0;
    for(let i:number=0;i<nums.length;i++){
        sum+=nums[i]
    }
    return sum
}

console.log(sumOfNum(1,2,3))