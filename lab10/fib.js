
//Create a memoized version of the following `fibonacci()` recursive method to improve its performance.

    const fibonacci=(function(){
    const memo={};
    const calcFibo=function(n){
        let fib;
        if(n in memo){
            fib=memo[n];
        } else{
            if(n==0||n==1)
            fib=n;
            else 
             fib=calcFibo(n-1)+calcFibo(n-2);
            memo[n]=fib;
         }
         return fib;
    };
    return calcFibo;
    })();
    
    
     const n=8;
    console.time("Excution time")
    console.log(`Recursively:The ${n}th fibonacci number is :${fibonacci(n)}`);
    console.timeEnd("Excution time");