function solution(n, times) {
    var answer = 0;
    let left = 1;
    let right = times.at(-1)*n;
    while(left <= right){
        const mid = parseInt((left+right)/2);
        let count = 0;
        for (let time of times){
            count += parseInt(mid/time)
        }
        if(count >= n){
            right = mid -1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}