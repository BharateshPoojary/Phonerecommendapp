let loginbtn=document.getElementById("ex");
loginbtn.addEventListener("click",async()=>{
   let res= await(await fetch("http://localhost/MYPROJECTLOGINPAGE/login.php")).body;
   console.log(res);
})