window.addEventListener("load", async () => {
    let accessing_username = JSON.parse(localStorage.getItem('usernamedetail'));
    let username = accessing_username.username;
    if (username == "User") {
        window.alert("Please signUp to our platform to access this feature");
        window.location.href = "landing.html";
    } else {
        let usernameObject = { username: username };
        let sendingusernametobackendforaccessingfavphones = "http://localhost/phonerecommendapp(Backend)/favouritelistdisplaying.php";
        let response = await (await fetch(sendingusernametobackendforaccessingfavphones, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usernameObject),
        })).json();
        console.log(response);
    }
})


