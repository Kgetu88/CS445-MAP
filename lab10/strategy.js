/**
 * Implement Strategy pattern to choose between different logging algorithms, choosing between:

 */

 class Info{
   logging(text){
      console.log("This information come form Info class :"+text);

   }
 }
 class Warn{
   logging(text){
      console.log("This information come form Warrnig  class:"+ text);

   }
 }
 class Error{
   logging(message){
      console.log("This information come form Error class: "+message);

   }
}
 class Table{
   logging(array){
      for(let i=0;i<array.length;i++){
         
         console.log(array[i]);
       }

     }
   }

 class Strategy{
      stratagyinfo="";
      setStrategy(stratagyinfo){
         this.stratagyinfo=stratagyinfo;
      }

      logging(message){
         console.log(this.stratagyinfo.logging(message));
   
      }


 }

  



 const strategy = new Strategy();
   
strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);