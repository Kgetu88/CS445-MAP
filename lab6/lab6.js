
/**Q1
 *  create a new function named `isPrimeAsync` which use async&await keywords to resolve the `isPrime` function.
 */

let isprime =num=>new Promise((resolve, reject)=>{
             setTimeout(function(){
        
        for(let i=2;i<=num/2;i++)
          if(num%i==0)reject({prime:false});
         resolve({prime:num>1});
    },5000);
            
});

  async function isPrimeAsync(num){
      try{
          let result=await isprime(num);
          console.log(result);
      }catch(error) {
        console.log(error);
      }

  }

console.log('start');
isPrimeAsync(7);

console.log('end');


/*Q2
Create a method named `removeDuplicatesAsync` which works only for Array types and removes all duplicates for any array asynchornously. 
**You MUST use async & await** */
   
Array.prototype.removeDuplicatesAsync = async function() {
  const theArray = this;
  const processDupsRemoval = async (arr) => {
      const noDups = [];
      for(let e of theArray) {
          if(noDups.indexOf(e) === -1)
              noDups.push(e);
      }
      return noDups;
  }
  const output = await processDupsRemoval(theArray);
  console.log(output);
};

console.log("start");
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log("end");
