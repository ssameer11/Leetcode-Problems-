Description
Numbers can be regarded as product of its factors. For example,

8 = 2 x 2 x 2;
  = 2 x 4.
Write a function that takes an integer n and return all possible combinations of its factors.


let helper = (n: number,start: number,currentResult: number[],result: number[][]) => {
        if(n == 1) {
            if(currentResult.length > 1) {
                result.push(currentResult.slice())
            }
            return ;
        }
        for(let i = start; i <= n; i++) {
            if(n%i === 0) {
                currentResult.push(i);
                helper(n/i,i,currentResult,result);
                currentResult.pop();
            }
        }
}
                                 
                                 
    function factorCombinations(number: number): number[] {
      let result: number[][] = [];
      helper(number,2,[],result);
      return result
}

