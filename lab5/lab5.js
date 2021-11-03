
  /**
   * testing the number is prime or not in Asynchronous(promise)
   * @param {*} num 
   * @returns 
   */

const isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}


               
let promise = new Promise(function(resolve, reject) {
              if (isPrime(7)) {
            setTimeout(() => resolve(`'{prime:true}'`), 5000);
              } else {
                       setTimeout(() => reject(new Error(`'{prime:false}'`)), 5000);
                    }
                  });
         
         console.log('start');
        promise.then(result => console.log(result))
        .catch(error => console.log(error));
         console.log('end');
         
       //Q2  removes all duplicates for any array asynchornously
         function removeDuplication(array){
             let uniquAarry=[];
             for(let i=0;i<array.length;i++){
                 if(!uniquAarry.includes(array[i])){
                     uniquAarry.push(array[i]);
                 }
             }

             console.log(`[${uniquAarry}]`);
         }

         let arr=[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2]
         console.log(`start`);
         setTimeout(removeDuplication,7000,arr);
         console.log(`end`);
      

         

  
