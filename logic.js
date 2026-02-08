let btn = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");

let turn0=true;  //true if o turn - by default start o

const winpatterns = [
    [ 0,1 ,2 ],
    [ 0,3 ,6 ],
    [ 0, 4,8 ],
    [ 1,4 , 7],
    [2 ,5 ,8 ],
    [ 2, 4,6 ],
    [ 3, 4,5 ],
    [ 6,7 ,8 ],
];
 btn.forEach((val)=>{
  val.addEventListener("click", ()=>{
   if(turn0 === true)
   {
        val.innerText="O";
        turn0=false;
   }
   else{
      val.innerText="X";
        turn0=true;
   }
   val.disabled =true;

   checkwinner();
  })
 });

reset.addEventListener("click",()=>{
 for ( let i of btn)
 {
    i.innerText= null;
    i.disabled=false;
    wc.classList.add("hide");
 }  
 });

let wc = document.querySelector(".winner-container");
let wt =document.querySelector(".winner-text");

 let winner=( vv) =>{
      wt.innerText=`winner is ${vv}`;
    wc.classList.remove("hide");
 }

 let off = ()=> {
    for (let j of btn)
    {
       j.disabled=true; 
    }
 }

 const checkwinner=()=>{
    for(let pattern of winpatterns){
     let val1 = btn[pattern[0]].innerText;
     let val2 = btn[pattern[1]].innerText;
     let val3 = btn[pattern[2]].innerText;
     if(val1 != "" && val2 != "" && val3 != "" )
     {
             if( val1 === val2 && val2 === val3){
                console.log("winner");
                winner(val1);
                off();
             }
     }
 }
}
    


 

