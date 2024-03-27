let signupbtn=document.getElementById("loginbutton");
signupbtn.addEventListener("click",()=>{
    let username = document.getElementById("username").value;
    let storingusernamedetail={'username':username};
    localStorage.setItem('usernamedetail',JSON.stringify(storingusernamedetail));

})