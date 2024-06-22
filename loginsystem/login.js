let signinbtn = document.getElementById("loginbutton");
//Top right bottom left
signinbtn.addEventListener("click", async () => {
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
    if (username == '' || password == '') {
        let fillimgsrc = "form-icon.png";
        let fillmsg = "Please fill all the fields";
        let fillmsgclassname = "fill";
        notification(fillimgsrc, fillmsg, fillmsgclassname);
    } else {
        let usercredentials = {
            username: username,
            password: password,
        };
        let signinverification = "http://localhost/phonerecommendapp(Backend)/login.php";
        let responseArray = await (await fetch(signinverification, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usercredentials),
        })).json();
        if (responseArray.login == "success") {
            let checkedimgsrc = "confirm-icon.png";
            let checkedmsg = "Logged in Successfully";
            let checkedclassname = "successfully";
            notification(checkedimgsrc, checkedmsg, checkedclassname);
            setTimeout(() => {
                window.location.href = "http://127.0.0.1:5502/index.html";
            }, 3000);
        }
        if (responseArray.credential == "invalid") {
            let invalidimgsrc = "cancel-icon.png";
            let invalidmsg = "Account does not exist";
            let invalidmsgclassname = "failure";
            notification(invalidimgsrc, invalidmsg, invalidmsgclassname);

        }
        if (responseArray.login == "failure") {
            let failureimgsrc = "cancel-icon.png";
            let failuremsg = "Error: Password incorrect";
            let failureclassname = "failure";
            notification(failureimgsrc, failuremsg, failureclassname);
        }
        let storingusernamedetail = { 'username': username };
        localStorage.setItem('usernamedetail', JSON.stringify(storingusernamedetail));
    }
})

