// https://www.geeksforgeeks.org/dsa/find-maximum-minimum-sum-subarray-size-k/
/*
Cal max sub arr sum
 [ 100 , 200 , 300 , 400 ]


 k = 1
 [ 0 , 100 , 300 , 600 , 1000 ]
   
 traverse prefix  matrix array -> 

 find max of subarrays with  length 1
 pseudo code:
  go from 0 to n - k index
    
  4 - 1 -> 3 so 0 , 1 , 2 , 3
  (0 -> 0) pf[1] - pf[-1]
  (1 -> 1 ) pf[2] - pf[1]
  prefix[ i + 1 ] - prefix[ i -1 ]

  k = 2
  4 - 2 -> 2 so 0, 1 , 2 
   (0 - >1 ) [ 100 , 200 ] pf[2] - pf[-1] -> 300 - 0 -> 300
   (1 -> 2 ) [ 200 , 300 ] pf[3] - pf[0] -> 600 - 100 -> 500
   (2 -> 3)  [ 300 , 400 ] pf[4] - pf[1] -> 1000 - 300 -> 700 works well

 k = 3
 4 - 3 -> 0 , 1
 (0 -> 2) [100 , 200 , 300 ] -> prefix[3] - prefix[-1] -> 600
 (1 -> 3) [200 , 300 , 400 ] -> prefix[4] - prefix[0] -> 900
 
 k = 4
 4 -> 4
 (0 -> 4) [ 100 , 200 , 300 , 400 ] -> prefix[ 4 ] - prefix[ -1 ] -> 1000

*/
function prefix(arr,k){
    let maxSum = 0;
    let pref = [ 0 ];
    for(let i = 0 ; i < arr.length ; i++ ){
        pref.push( pref[i] + arr[i] );
    }
    for(let i = 0 ; i <= arr.length - k ; i++ ){
        maxSum = Math.max(maxSum , pref[i+k] - pref[i] );
    }
    return maxSum;
}



function slidingWindow_queue(arr,k){
    let queue = [];
    let sum = 0;
    let maxsum = 0;
    for(let item of arr){
      queue.push(item);
      sum+=item;
      if(queue.length > k){
      	sum -= queue.shift();
      }
      if(queue.length == k){
      	maxsum = Math.max(sum,maxsum);
      }
    }
    return maxsum;
}

function slidingWindow_optimized(arr,k){
 let sum = 0;
 let maxsum = 0;
 for(let i = 0 ; i  < k ; i++){
   sum+=arr[i];
 }
 maxsum = sum;
 for(let i = 0 ;  i < arr.length - k ; i++){
    sum = sum - arr[i] + arr[ i + k ]; 
   maxsum = Math.max(maxsum,sum);
  }
 return maxsum;
}

let r = slidingWindow_optimized([100,200,300,400,500],2);
let k = prefix([100,200,300,400,500],2);
let o = slidingWindow_queue([100,200,300,400,500],2);
console.log(r,k,o);

