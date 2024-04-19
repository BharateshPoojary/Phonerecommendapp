

window.addEventListener("load", async () => {
    try {
        let usernamedetail = JSON.parse(localStorage.getItem('usernamedetail'));
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

    let osmenucontainer = document.getElementById("osmenu");
    osmenucontainer.style.display = "none";
    let OSselectioncontainer = document.querySelector(".OSselectioncontainer");
    OSselectioncontainer.addEventListener("click", () => {
        let togglearrow = document.getElementById("arrow");
        if (togglearrow.style.transform === "rotate(0deg)") {
            togglearrow.style.transform = "rotate(180deg)";
            osmenucontainer.style.display = "block";
        }
        else {
            togglearrow.style.transform = "rotate(0deg)";
            osmenucontainer.style.display = "none";
        }
    })
    let pricemenu = document.getElementById("pricemenu");
    pricemenu.style.display = "none";
    let priceselectioncontainer = document.querySelector(".priceselectioncontainer");
    priceselectioncontainer.addEventListener("click", () => {
        let togglepricearrow = document.getElementById("pricearrow");
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
        localStorage.clear();
        window.location.href = "landing.html";
    })
    let signup_in = document.querySelector(".signup-incontainer");
    signup_in.addEventListener("click", () => {
        window.location.href = "loginsystem/signup.html";
    })

    let phonedata = await (await fetch("http://localhost/phonerecommendapp(Backend)/displayphoneinfo.php")).json();
    console.log(phonedata);
    let divforcard = document.createElement("div");
    divforcard.style.display = "flex";
    divforcard.style.flexWrap = "wrap";
    divforcard.id = "mobilecontainer";
    divforcard.style.marginLeft = "230px";
    document.body.appendChild(divforcard)


    let phonecategoriesAvailable = ["Top SmartPhones", " Phones in Android", " Phones in IOS", "Phones Under Rs.10,000", "Phones Under Rs.20,000", "Phones Under Rs.40,000", "Phones Under Rs.70,000", "Phones Above Rs.80,000"];
    let currentCategoryIndex = 0;
    const divOfTitleNames = ["divForTopTitle", "divForAndroidTitle", "divForIOSTitle", "divForUnder10kPhones", "divForUnder20kPhones", "divForUnder40kPhones", "divForUnder70kPhones", "divForAbove80kPhones"];
    let currentTitleNameIndex = 0;
    phonedata.forEach(phonearray => {

        let divForTitle = document.createElement('div');
        divForTitle.id = divOfTitleNames[currentTitleNameIndex];
        divForTitle.style.display = "flex";
        divForTitle.style.width = "100%";
        divforcard.appendChild(divForTitle);

        let title = document.createElement('span');
        title.innerHTML = phonecategoriesAvailable[currentCategoryIndex];
        divForTitle.appendChild(title);
        currentTitleNameIndex++;
        currentCategoryIndex++;
        let onClickAndroid = document.getElementById("android");
        onClickAndroid.addEventListener("click", () => {
            const divForAndroidTitle = document.getElementById("divForAndroidTitle");
            divForAndroidTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        let onClickIOS = document.getElementById("ios");
        onClickIOS.addEventListener("click", () => {
            const divForIOSTitle = document.getElementById("divForIOSTitle");
            divForIOSTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        let onClick10kphones = document.getElementById("10kphones");
        onClick10kphones.addEventListener("click", () => {
            const divForUnder10kPhones = document.getElementById("divForUnder10kPhones");
            divForUnder10kPhones.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        let onClick20kphones = document.getElementById("20kphones");
        onClick20kphones.addEventListener("click", () => {
            const divForUnder20kPhones = document.getElementById("divForUnder20kPhones");
            divForUnder20kPhones.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        let onClick40kphones = document.getElementById("40kphones");
        onClick40kphones.addEventListener("click", () => {
            const divForUnder40kPhones = document.getElementById("divForUnder40kPhones");
            divForUnder40kPhones.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        let onClick70kphones = document.getElementById("70kphones");
        onClick70kphones.addEventListener("click", () => {
            const divForUnder70kPhones = document.getElementById("divForUnder70kPhones");
            divForUnder70kPhones.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        let onClick80kphones = document.getElementById("80kphones");
        onClick80kphones.addEventListener("click", () => {
            const divForAbove80kPhones = document.getElementById("divForAbove80kPhones");
            divForAbove80kPhones.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        phonearray.forEach(obj => {

            let cardforeachphone = document.createElement("div");
            cardforeachphone.style.height = "450px";
            cardforeachphone.style.width = "20rem";
            cardforeachphone.style.border = "2px solid black";
            cardforeachphone.style.display = "flex";
            cardforeachphone.style.marginTop = "5px";
            cardforeachphone.style.marginRight = "15px";
            cardforeachphone.style.marginLeft = "5px";

            cardforeachphone.style.flexDirection = "column"
            divforcard.appendChild(cardforeachphone);
            let phoneimage = document.createElement("img");
            phoneimage.src = obj.PhoneImageUrl;
            phoneimage.style.height = "296px";
            phoneimage.style.width = "200px";
            phoneimage.style.alignSelf = "center";
            cardforeachphone.appendChild(phoneimage);
            let phonename = document.createElement("h2");
            phonename.innerHTML = obj.PhoneName;
            cardforeachphone.appendChild(phonename);
            let phoneram = document.createElement("h2");
            phoneram.innerHTML = obj.Ram;
            cardforeachphone.appendChild(phoneram);
        })
    });
});

