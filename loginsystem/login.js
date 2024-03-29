let signupbtn=document.getElementById("loginbutton");
signupbtn.addEventListener("click",()=>{
    let username = document.getElementById("username").value;
    let storingusernamedetail={'username':username};
    sessionStorage.setItem('usernamedetail',JSON.stringify(storingusernamedetail));

})