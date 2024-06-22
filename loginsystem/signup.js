let signupbtn = document.getElementById("signupbutton");
//Top right bottom left
signupbtn.addEventListener("click", async () => {
    const notification = (imgsrc, notifymsg, msgclassname) => {
        let msgcontainer = document.createElement('div');
        msgcontainer.style.display = "flex";
        msgcontainer.style.flexDirection = "row";
        msgcontainer.style.alignItems = "center";
        msgcontainer.style.padding = "20px";
        let img = document.createElement('img');
        img.src = imgsrc;
        img.style.height = "35px";
        img.style.width = "40px";
        img.style.padding = "10px";
        msgcontainer.appendChild(img);
        let msg = document.createElement('p');
        msg.innerText = notifymsg;
        msg.style.color = "black";
        msgcontainer.appendChild(msg);
        let toastboxcontainer = document.getElementById('toastbox');
        let message = document.createElement('div');
        message.appendChild(msgcontainer);
        message.classList.add("toastmessage");
        message.classList.add(msgclassname);
        toastboxcontainer.appendChild(message);
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
    if (username == '' || password == '' || cpassword == '') {
        let fillimgsrc = "form-icon.png";
        let fillmsg = "Please fill all the fields";
        let fillmsgclassname = "fill";
        notification(fillimgsrc, fillmsg, fillmsgclassname);
    } else {
        let usercredentials = {
            username: username,
            password: password,
            cpassword: cpassword
        };
        console.log(usercredentials.password);
        let signupverification = "http://localhost/phonerecommendapp(Backend)/signup.php";
        let responseArray = await (await fetch(signupverification, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usercredentials),
        })).json();
        if (responseArray.username == "exist") {
            let existimgsrc = "exclamation-warning-round-black-yellow-icon.png";
            let existmsg = "Username already exist";
            let existmsgclassname = "exist";
            notification(existimgsrc, existmsg, existmsgclassname);

        }
        if (responseArray.password == "mismatched") {
            let mismatchedimgsrc = "cancel-icon.png";
            let mismatchedmsg = "Error: Password mismatched";
            let mismatchedclassname = "mismatched";
            notification(mismatchedimgsrc, mismatchedmsg, mismatchedclassname);
        }
        if (responseArray.account == "created") {
            let checkedimgsrc = "confirm-icon.png";
            let checkedmsg = "Account Created Successfully";
            let checkedclassname = "successfully";
            notification(checkedimgsrc, checkedmsg, checkedclassname);
            setTimeout(() => {
                window.location.href = "http://127.0.0.1:5502/index.html";
            }, 3000);
        }
        let storingusernamedetail = { 'username': username };
        localStorage.setItem('usernamedetail', JSON.stringify(storingusernamedetail));
    }
})