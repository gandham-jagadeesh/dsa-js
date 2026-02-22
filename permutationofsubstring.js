//BruteForce

class Solution {
    search(txt, pat) {
        let subarrk = this.nlensub(txt,pat.length);
        let perms = this.perm(pat);
        for(let perm  of perms ){
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
``
/*




Rules:
    - Read Question carefully + constraints
    - go to first Rule

BruteForce:
    - compare  all permutations of pat with  pat length subarrays of txt 
    - find perm() -> get all perms
*/

/*
    - abc
    a - abc,acb 
    b - bac,bca
    c - cab ,cba
*/
