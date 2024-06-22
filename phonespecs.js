window.addEventListener("load", async () => {
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
    let phoneDetails = JSON.parse(localStorage.getItem('phoneDetails'));
    let accessing_username_from_localstorage = JSON.parse(localStorage.getItem('usernamedetail'));
    let username = accessing_username_from_localstorage.username;
    let usernameandphoneId = {
        username: username,
        phoneId: phoneDetails.phoneId,
    };
    let divforallcontent = document.createElement('div');
    divforallcontent.style.display = "flex";
    divforallcontent.style.flexDirection = "column";
    divforallcontent.id = "divforallcontent";
    document.body.appendChild(divforallcontent);
    let divforPhoneDetails = document.createElement('div');
    divforPhoneDetails.style.display = "flex";
    divforPhoneDetails.style.flexDirection = "row";
    divforallcontent.appendChild(divforPhoneDetails);
    let divforphoneImage = document.createElement('div');
    let phoneimage = document.createElement("img");
    phoneimage.src = phoneDetails.PhoneImageUrl;
    phoneimage.style.height = "350px";
    phoneimage.style.width = "250px";
    divforphoneImage.appendChild(phoneimage);
    divforPhoneDetails.appendChild(divforphoneImage);
    let divforphoneSpecs = document.createElement('div');
    divforphoneSpecs.style.display = "flex";
    divforphoneSpecs.style.flexDirection = "column";
    let phonename = document.createElement("p");
    phonename.innerHTML = "Phone Name&nbsp;:&nbsp;" + "<b>" + phoneDetails.phoneName + "</b>";
    phonename.className = "phoneSpecs";
    divforphoneSpecs.appendChild(phonename);
    let phoneram = document.createElement("p");
    phoneram.innerHTML = "Ram &nbsp;: " + "<b>" + phoneDetails.Ram + "</b>";
    phoneram.className = "phoneSpecs";
    divforphoneSpecs.appendChild(phoneram);
    let phoneprocessor = document.createElement('p');
    phoneprocessor.innerHTML = "Processor&nbsp;:&nbsp;" + "<b>" + phoneDetails.Processor + "</b>";
    phoneprocessor.className = "phoneSpecs";
    divforphoneSpecs.appendChild(phoneprocessor);
    let phonePrice = document.createElement('p');
    phonePrice.innerHTML = "Price&nbsp;:&nbsp;" + "<b>" + phoneDetails.Price + "</b>";
    phonePrice.className = "phoneSpecs";
    divforphoneSpecs.appendChild(phonePrice);
    let phoneBattery = document.createElement('p');
    phoneBattery.className = "phoneSpecs";
    phoneBattery.innerHTML = "Battery&nbsp;:&nbsp;" + "<b>" + phoneDetails.Battery + "</b>";
    divforphoneSpecs.appendChild(phoneBattery);
    let phoneDisplay = document.createElement('p');
    phoneDisplay.className = "phoneSpecs";
    phoneDisplay.innerHTML = "Display&nbsp;:&nbsp;" + "<b>" + phoneDetails.Display + "</b>";
    divforphoneSpecs.appendChild(phoneDisplay);
    let phoneOS = document.createElement('p');
    phoneOS.className = "phoneSpecs";
    phoneOS.innerHTML = "OS&nbsp;:&nbsp;" + "<b>" + phoneDetails.OS + "</b>";
    divforphoneSpecs.appendChild(phoneOS);
    let phoneStorage = document.createElement('p');
    phoneStorage.className = "phoneSpecs";
    phoneStorage.innerHTML = "Storage&nbsp;:&nbsp;" + "<b>" + phoneDetails.Storage + "</b>";
    divforphoneSpecs.appendChild(phoneStorage);
    let phoneFrontCam = document.createElement('p');
    phoneFrontCam.className = "phoneSpecs";
    phoneFrontCam.innerHTML = "FrontCamera&nbsp;:&nbsp;" + "<b>" + phoneDetails.frontCamera + "</b>";
    divforphoneSpecs.appendChild(phoneFrontCam);
    let phonerearCam = document.createElement('p');
    phonerearCam.className = "phoneSpecs";
    phonerearCam.innerHTML = "RearCamera&nbsp;:&nbsp;" + "<b>" + phoneDetails.rearCamera + "</b>";
    divforphoneSpecs.appendChild(phonerearCam);
    divforPhoneDetails.appendChild(divforphoneSpecs);
    let divforbutton = document.createElement('div');
    divforbutton.style.display = "flex";
    divforbutton.style.flexDirection = "row";
    divforbutton.style.marginTop = "10px";
    divforbutton.style.marginBottom = "10px";

    divforallcontent.appendChild(divforbutton);
    let addtoFavouritelistbutton = document.createElement('button');
    addtoFavouritelistbutton.innerText = "Add to Wish list";
    addtoFavouritelistbutton.id = "Favouritelistbutton";
    divforbutton.appendChild(addtoFavouritelistbutton);
    let RemoveFavouritelistbutton = document.createElement('button');
    RemoveFavouritelistbutton.innerText = "Remove from Wish list";
    RemoveFavouritelistbutton.id = "RemoveFromFavButton";
    RemoveFavouritelistbutton.style.display = "none";
    divforbutton.appendChild(RemoveFavouritelistbutton);
    const sendusernameandphoneIdtobackend = "http://localhost/phonerecommendapp(Backend)/favlistverification.php";
    let verficationresponse = await (await fetch(sendusernameandphoneIdtobackend, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usernameandphoneId)
    })).json();
    console.log(verficationresponse.message);
    if (verficationresponse.message == "1") {
        const comparelistcontainer = document.querySelector(".comparelistcontainer");
        comparelistcontainer.classList.add("wishlistanimate");
        addtoFavouritelistbutton.style.display = "none";
        RemoveFavouritelistbutton.style.display = "block";
        RemoveFavouritelistbutton.addEventListener('click', async () => {
            let msgandbtncontainer = document.createElement('div');
            msgandbtncontainer.style.display = "flex";
            msgandbtncontainer.style.flexDirection = "column";
            msgandbtncontainer.style.alignItems = "center";
            msgandbtncontainer.style.padding = "20px";
            msgandbtncontainer.style.marginTop = "15px";
            let imgandmsgconatiner = document.createElement('div');
            imgandmsgconatiner.style.display = "flex";
            imgandmsgconatiner.style.alignItems = "center";
            let img = document.createElement('img');
            img.src = "exclamation-warning-round-black-yellow-icon.png";
            img.style.height = "35px";
            img.style.width = "40px";
            img.style.padding = "10px";
            imgandmsgconatiner.appendChild(img);
            let msg = document.createElement('p');
            msg.innerText = `Are you sure ${username} you want to remove ${phoneDetails.phoneName} from your wish list?`;
            msg.style.fontSize = "1.2rem";
            msg.style.color = "black";
            imgandmsgconatiner.appendChild(msg);
            let btncontainer = document.createElement('div');
            btncontainer.style.display = "flex";
            btncontainer.style.marginBottom = "30px";
            let okbtn = document.createElement('button');
            okbtn.innerHTML = "Ok";
            okbtn.className = "btn";
            okbtn.style.borderRadius = "18px";
            btncontainer.appendChild(okbtn);
            let cancelbtn = document.createElement('button');
            cancelbtn.style.marginLeft = "5px";
            cancelbtn.className = "btn";
            cancelbtn.style.borderRadius = "18px";
            cancelbtn.innerHTML = "cancel";
            btncontainer.appendChild(cancelbtn);
            msgandbtncontainer.appendChild(imgandmsgconatiner);
            msgandbtncontainer.appendChild(btncontainer);
            let confirmboxcontainer = document.getElementById('confirmbox');
            let message = document.createElement('div');
            message.appendChild(msgandbtncontainer);
            message.classList.add("confirmmessage");
            confirmboxcontainer.appendChild(message);
            okbtn.addEventListener('click', async () => {

                let accessing_username_from_localstorage = JSON.parse(localStorage.getItem('usernamedetail'));
                let username = accessing_username_from_localstorage.username;
                let accessing_phonedata_from_localstorage = JSON.parse(localStorage.getItem('phoneDetails'));
                let userandphonedatatodelete = {
                    username: username,
                    phoneId: accessing_phonedata_from_localstorage.phoneId,
                };
                const deletefavphonedatafrombackend = "http://localhost/phonerecommendapp(Backend)/removefavphone.php";
                let response = await (await fetch(deletefavphonedatafrombackend, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userandphonedatatodelete)
                })).json();
                console.log(response.message);
                if (response.message == "Deleted") {
                    window.location.href = "phonespecs.html";
                }

            })
            cancelbtn.addEventListener("click", () => {
                message.remove();
            })
        });

    }

    addtoFavouritelistbutton.addEventListener('click', async () => {
        let accessing_username_from_localstorage = JSON.parse(localStorage.getItem('usernamedetail'));
        let username = accessing_username_from_localstorage.username;
        let accessing_phonedata_from_localstorage = JSON.parse(localStorage.getItem('phoneDetails'));
        if (username == "User") {
            let signupimgsrc = "exclamation-warning-round-black-yellow-icon.png";
            let signupmsg = "Sorry cannot add to wish list please signup to our platform";
            let signupmsgclassname = "signup";
            notification(signupimgsrc, signupmsg, signupmsgclassname);
            setTimeout(() => {
                window.location.href = "landing.html";
            }, 3000);
        } else {
            let userandphonedata = {
                username: username,
                phoneId: accessing_phonedata_from_localstorage.phoneId,
            };
            const sendfavphonedatatobackend = "http://localhost/phonerecommendapp(Backend)/favouritelistinserting.php";
            let response = await (await fetch(sendfavphonedatatobackend, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userandphonedata)
            })).json();
            console.log(response.message);
            if (response.message == "phoneadded") {
                let invalidimgsrc = "confirm-icon.png";
                let invalidmsg = "Phone added to your wish list successfully";
                let invalidmsgclassname = "success";
                notification(invalidimgsrc, invalidmsg, invalidmsgclassname);
                setTimeout(() => {
                    window.location.href = "http://127.0.0.1:5502/phonespecs.html"

                }, 3000);
            }
        }
    });
    let div_for_note_and_star_img = document.createElement('div');

    div_for_note_and_star_img.style.display = "flex";
    div_for_note_and_star_img.style.alignItems = "center";
    div_for_note_and_star_img.style.justifyContent = "center";
    divforallcontent.appendChild(div_for_note_and_star_img);
    let starimage = document.createElement('img');
    starimage.src = "star-full-icon.png";
    starimage.id = "starimage";
    div_for_note_and_star_img.appendChild(starimage);

    let note = document.createElement('p');
    if (verficationresponse.message == "1") {
        let textforgoingtowishlist = "Go to your wish list section to avail the feature.";
        note.innerText = textforgoingtowishlist;
    } else {
        note.innerText = `Add ${phoneDetails.phoneName} to your wish list to get special features`;
    }
    note.id = "note";
    div_for_note_and_star_img.appendChild(note);

    let usernamedetail = JSON.parse(localStorage.getItem('usernamedetail'));
    username = usernamedetail.username;
    if (username == "User") {
        note.innerText = "Please signup to our platform before adding to your wish list";
        let logouthiding = document.querySelector(".logoutcontainer");
        logouthiding.style.display = "none";
        let signup_inhiding = document.querySelector(".signup-incontainer");
        signup_inhiding.style.display = "flex";
    } else {
        let logouthiding = document.querySelector(".logoutcontainer");
        logouthiding.style.display = "flex";
        let signup_inhiding = document.querySelector(".signup-incontainer");
        signup_inhiding.style.display = "none";
    }
    let logout = document.querySelector(".logoutcontainer");
    logout.addEventListener("click", () => {
        window.location.href = "landing.html";
    })
    let signup_in = document.querySelector(".signup-incontainer");
    signup_in.addEventListener("click", () => {
        window.location.href = "loginsystem/signup.html";
    })
    let go_Back = document.querySelector(".gobackbutton");
    go_Back.addEventListener("click", () => {
        window.location.href = "index.html";
    })
    let comparelistcontainer = document.querySelector(".comparelistcontainer");
    comparelistcontainer.addEventListener("click", () => {
        window.location.href = "comparelist.html";
    })

});

