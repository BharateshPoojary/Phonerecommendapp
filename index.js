

window.addEventListener("load", async () => {
    try {
        let usernamedetail = JSON.parse(sessionStorage.getItem('usernamedetail'));
        let username = usernamedetail.username;
        let usernamevalue = document.getElementById("usernamevalue");
        usernamevalue.textContent = username;
        let sinup_inhiding = document.querySelector(".signup-incontainer")
        sinup_inhiding.style.display = "none";


    } catch (error) {
        let usernamevalue = document.getElementById("usernamevalue");
        usernamevalue.textContent = "User";
        let logouthiding = document.querySelector(".logoutcontainer")
        logouthiding.style.display = "none";
    }

    let osmenu = document.getElementById("osmenu");
    osmenu.style.display = "none";
    let OSselectioncontainer = document.querySelector(".OSselectioncontainer");
    OSselectioncontainer.addEventListener("click", () => {
        let togglearrow = document.getElementById("arrow");
        if (togglearrow.style.transform === "rotate(0deg)") {
            togglearrow.style.transform = "rotate(180deg)";
            osmenu.style.display = "block";
        } else {
            togglearrow.style.transform = "rotate(0deg)";
            osmenu.style.display = "none";
        }
    })
    let pricemenu = document.getElementById("pricemenu");
    pricemenu.style.display = "none";
    let priceselectioncontainer = document.querySelector(".priceselectioncontainer");
    priceselectioncontainer.addEventListener("click", () => {
        let togglepricearrow=document.getElementById("pricearrow");
        if (togglepricearrow.style.transform === "rotate(0deg)") {
            togglepricearrow.style.transform = "rotate(180deg)";
            pricemenu.style.display = "block";
        } else {
            togglepricearrow.style.transform = "rotate(0deg)";
            pricemenu.style.display = "none";
        }
    })
    let logout = document.querySelector(".logoutcontainer");
    logout.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "landing.html";
    })
    let signup_in = document.querySelector(".signup-incontainer");
    signup_in.addEventListener("click", () => {
        window.location.href = "loginsystem/signup.html";
    })

    let latestphonedata = await (await fetch("http://localhost/phonerecommendapp(Backend)/displayphoneinfo.php")).json();
    console.log(latestphonedata);

    let divforcard = document.createElement("div");
    divforcard.style.display = "flex";
    divforcard.style.flexDirection = "column";
    divforcard.id = "mobilecontainer";
    divforcard.style.marginLeft = "230px";
    document.body.appendChild(divforcard)

    latestphonedata.forEach(obj => {
        let cardforeachphone = document.createElement("div");
        cardforeachphone.style.height = "300px";
        cardforeachphone.style.width = "71rem";
        cardforeachphone.style.border = "2px solid black";
        cardforeachphone.style.display = "flex";
        cardforeachphone.style.marginTop = "5px";
        cardforeachphone.style.flexDirection = "row"
        divforcard.appendChild(cardforeachphone);
        let phoneimage = document.createElement("img");
        phoneimage.src = obj.PhoneImageUrl;
        phoneimage.style.height = "296px";
        cardforeachphone.appendChild(phoneimage);
        let phonename = document.createElement("h2");
        phonename.innerHTML = obj.PhoneName;
        cardforeachphone.appendChild(phonename);
        let phoneram = document.createElement("h2");
        phoneram.innerHTML = obj.Ram;
        cardforeachphone.appendChild(phoneram);
    });


});