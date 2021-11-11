
'use strict'
const  employeedata=function(){
    fetch("https://randomuser.me/api/?results=5")
    .then((response)=>response.json())
     .then((result)=> employeesData(result));
};



const  employeesData=function(empCollection){
    const empImg=empCollection.results[0].picture.medium;
     document.getElementById("img1").src=empImg;
     const empfName=empCollection.results[0].name.first+" "+empCollection.results[0].name.last;
    
       document.getElementById("emp1").innerText=empfName;
          
                        
       const phone=empCollection.results[0].phone;
          document.getElementById("phone1").innerText= "Phone : "+ phone;

        const email=empCollection.results[0].email;
           document.getElementById("email1").innerText=email;
           ////////

        const empImg1=empCollection.results[1].picture.medium;
     document.getElementById("img2").src=empImg1;
     const empfName1=empCollection.results[1].name.first+" "+empCollection.results[1].name.last;
       document.getElementById("emp2").innerText=empfName1;
       const phone1=empCollection.results[1].phone;
          document.getElementById("phone2").innerText= "Phone : "+ phone1;

        const email1=empCollection.results[1].email;
           document.getElementById("email2").innerText=email1;
           
            //

            const empImg2=empCollection.results[2].picture.medium;
     document.getElementById("img3").src=empImg2;
     const empfName2=empCollection.results[2].name.first+" "+empCollection.results[2].name.last;
       document.getElementById("emp3").innerText=empfName2;
       const phone2=empCollection.results[2].phone;
          document.getElementById("phone3").innerText= "Phone : "+ phone2;

        const email2=empCollection.results[2].email;
           document.getElementById("email3").innerText=email2;

           //

           const empImg3=empCollection.results[3].picture.medium;
           document.getElementById("img4").src=empImg3;
           const empfName3=empCollection.results[3].name.first+" "+empCollection.results[3].name.last;
             let bold= document.getElementById("emp4").innerText=empfName3;
             const phone3=empCollection.results[3].phone;
                document.getElementById("phone4").innerText= "Phone : "+ phone3;
      
              const email3=empCollection.results[3].email;
                 document.getElementById("email4").innerText=email3;
                 //
                 const empImg4=empCollection.results[4].picture.medium;
           document.getElementById("img5").src=empImg4;
           const empfName4=empCollection.results[4].name.first+" "+empCollection.results[4].name.last;
             document.getElementById("emp5").innerText=empfName4;
             const phone4=empCollection.results[4].phone;
                document.getElementById("phone5").innerText= "Phone : "+ phone4;
      
              const email4=empCollection.results[4].email;
                 document.getElementById("email5").innerText=email4;
     
         }

        function  refersh(){
             employeedata();
        }

        employeedata();



