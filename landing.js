let mainpageredirect = document.getElementById("mainpageredirectbtn");
mainpageredirect.addEventListener("click", () => {
    let username = "User";
    let storingusernamedetail = { 'username': username };
    localStorage.setItem('usernamedetail', JSON.stringify(storingusernamedetail));
    window.location.href = "index.html";
})

let signup_in_pageredirect = document.getElementById("signup_inbtn");
signup_in_pageredirect.addEventListener("click", () => {
    window.location.href = "loginsystem\\signup.html";
})