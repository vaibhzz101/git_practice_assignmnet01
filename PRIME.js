function prime(number){
    let factors=0;
     for(let i=1; i<=number; i++){
              if(number%i==0){
                  factors++;
                }
             }
               if(factors==2){
                 return true;
          }
             return false;
        }

  let answer=prime(17);
  if(answer==true){
            console.log("prime");
}  else {
          console.log("not prime");
}