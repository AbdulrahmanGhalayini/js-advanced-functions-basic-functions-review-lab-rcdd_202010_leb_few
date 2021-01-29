// Your code here

function saturdayFun (act = "roller-skate"){
  let s= "This Saturday, I want to " + act + "!";
  return s;
}

function mondayWork (act = "go to the office"){
  let s= "This Monday, I will " + act + ".";
  return s;
}

function wrapAdjective(mark ="*"){
  
    let innerFunction =  function(act){
          let s = "You are " + mark +act+mark+"!";

    return s;
  }
  return innerFunction
  
 
}

let Calculator = {
add: function  (a ,b){ return a+b;},
subtract :  function  (a ,b){return a-b;}, 
multiply:  function  (a ,b){return a*b;},
divide:  function  (a ,b){return a/b;}
}


function actionApplyer(s, b){
<<<<<<< HEAD
  if(b.length ===0 ){
    return s;
  }
  else{
         let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result to equal"
 
   let res = s;
   for(let i=0 ; i<b.length; i++){
     res= b[i](res);
   }
  return res  ;

  }
=======
  if(b = [] )
  return s;
  else
  {
   
   let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
   let res = s;
   for(int i= ; i<b.length; i++){
     res= b[i](res);
   }
   console.log(res);

return res  ;
  }
  
  
  
>>>>>>> 279c7fc3fed33c4b06c2086b79882952f1f8e17c
}

