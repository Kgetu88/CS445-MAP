
  /**
   * testing the number is prime or not in Asynchronous(promise)
   * @param {*} num 
   * @returns 
   */

              let isprime =num=>new Promise((resolve, reject)=>{
                             setTimeout(function(){
                        // for(let i = 2, s = Math.sqrt(num); i <= s; i++)
                        for(let i=2;i<=num/2;i++)
                          if(num%i==0)reject({prime:false});
                         resolve({prime:num>1});
                    },5000);
                            
                });
                
         console.log('start');
        isprime(2)
        .then(result => console.log(result))
        .catch(error => console.log(error));
         console.log('end');
         
       //Q2  removes all duplicates for any array asynchornously
        //  function removeDuplication(array){
        //      let uniquAarry=[];
        //      for(let i=0;i<array.length;i++){
        //          if(!uniquAarry.includes(array[i])){
        //              uniquAarry.push(array[i]);
        //          }
        //      }

        //      console.log(`[${uniquAarry}]`);
        //  }

        //  let arr=[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2]
        //  console.log(`start`);
        //  setTimeout(removeDuplication,7000,arr);
        //  console.log(`end`);
          
        //  Array.prototype.removeDuplicatesAsync=async function(){
        //      console.log(await[...new Set[this]]);
        //  }
      
        //  [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
         

          //or in  promise 
         
Array.prototype.removeDuplicatesAsync=async function(){
    let arr=this;
       new promise(function(resolve,reject){
              resolve([...new Set(arr)]);
       }).then(console.log);
             
         }
         
         [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();


  
