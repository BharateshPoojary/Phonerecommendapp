window.addEventListener("load", async () => {
    let phoneDetails = JSON.parse(localStorage.getItem('phoneDetails'));
    let accessing_username_from_localstorage = JSON.parse(localStorage.getItem('usernamedetail'));
    let username = accessing_username_from_localstorage.username;
    let usernameandphoneId = {
        username: username,
        phoneId: phoneDetails.phoneId,
    };
    let divforPhoneDetails = document.createElement('div');
    divforPhoneDetails.id = "divforPhoneDetails";
    document.body.appendChild(divforPhoneDetails);
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
    let addtoFavouritelistbutton = document.createElement('button');
    addtoFavouritelistbutton.innerText = "Add to favourite";
    addtoFavouritelistbutton.className = "Favouritelistbutton";
    document.body.appendChild(addtoFavouritelistbutton);
    let RemoveFavouritelistbutton = document.createElement('button');
    RemoveFavouritelistbutton.innerText = "Remove from favourite";
    RemoveFavouritelistbutton.className = "Favouritelistbutton";
    RemoveFavouritelistbutton.style.display = "none";
    document.body.appendChild(RemoveFavouritelistbutton);
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
        addtoFavouritelistbutton.disabled = true;
        RemoveFavouritelistbutton.style.display = "block";
        RemoveFavouritelistbutton.disabled = false;
        RemoveFavouritelistbutton.addEventListener('click', async () => {
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
                RemoveFavouritelistbutton.disabled = true;
                addtoFavouritelistbutton.disabled = false;
            }

        });

    }

    addtoFavouritelistbutton.addEventListener('click', async () => {
        let accessing_username_from_localstorage = JSON.parse(localStorage.getItem('usernamedetail'));
        let username = accessing_username_from_localstorage.username;
        let accessing_phonedata_from_localstorage = JSON.parse(localStorage.getItem('phoneDetails'));
        if (username == "User") {
            window.alert("Sorry cannot add to favourite list please SignUp to our platform");
            window.location.href = "landing.html";
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
                window.alert("Added to you favourite list successfully");
                window.location.href = "phonespecs.html";
            }
        }
    });
});