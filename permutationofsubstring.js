class Solution {
    search(txt, pat) {
        let subarrk = this.nlensub(txt,pat.length); // o(n) 
        let perms = this.perm(pat); // o( n * n! ) -> 120 * 5 -> 600
        for(let perm  of perms ){ // o(n ^ 2 ) -> 10^2 -> 100
           if(subarrk.includes(perm)){
               return true;
           }
        }
        return false;
    }
    
    perm(substr){
        if(substr.length <= 1){
            return substr;
        }
        let result = [];
        for(let i = 0 ; i < substr.length ; i++ ){
            let char = substr[i];
            if(substr.indexOf(char) != i){
                continue;
            }
            let rem = substr.slice(0,i) + substr.slice(i+1);
            for( let p of this.perm(rem)){
                result.push(char + p);
            }
        }
        return result;
    }
    
    nlensub(substr,k){
        let res = [];
        for(let i = 0 ; i <= substr.length - k ;  i++){
            res.push(substr.slice(i,i+k));
        }
        return res;
    }
}

class Solution {
    search(txt, pat) {
        let chars = new Array(26).fill(0);
        let k = pat.length;
        for(let i = 0 ; i < k ; i++ ){
            chars[txt.charCodeAt(i) - "a".charCodeAt(0)]  += 1;
            chars[pat.charCodeAt(i) - "a".charCodeAt(0)] -=1;
        }

        for(let j = k ; j < txt.length ; j++ ){
            let isvalid = true;
            for(let i = 0 ; i < 26; i++){
                if(chars[i] !=  0){
                    isvalid = false;
                    break;
                }
            }
            if(isvalid){
                return true; 
            }
            chars[txt.charCodeAt(j) - "a".charCodeAt(0)]+=1;
            chars[txt.charCodeAt( j - k  ) - "a".charCodeAt(0)]-=1;

        }
        return false;
    }

}
/*




Rules:
    - Read Question carefully + constraints
    - go to first Rule

BruteForce:
    - compare  all permutations of pat with  pat length subarrays of txt 
    - find perm() -> get all perms
    - too slow
    - tc: o(n * n!)
BruteForce:
    - use charArray and generate all subarrays and cancel with the pat
Advance Approach:
    - sliding Window:
    - approach: use char array
/*
    - abc
    a - abc,acb 
    b - bac,bca
    c - cab ,cba
*/
