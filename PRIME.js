function prime_number(num)
{
let temp=0;
for(i=2;i<=num-1;i++)
  { 
   if(num%2==0)
   {
    temp=temp+1;
   }
  }
if(temp==0)
{
 console.log("Prime number");
}
else
{
console.log("Not a prime number");
}
}
prime_number(17)