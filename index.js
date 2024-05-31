

window.addEventListener("load", async () => {

    let usernamedetail = JSON.parse(localStorage.getItem('usernamedetail'));
    let username = usernamedetail.username;
    let usernamevalue = document.getElementById("usernamevalue");
    usernamevalue.textContent = username;
    if (username == "User") {
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
        console.log(phonearray);
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
            let phoneId = obj.PhoneId;
            // console.log(phoneId);
            let cardforeachphone = document.createElement("div");
            cardforeachphone.style.height = "450px";
            cardforeachphone.style.width = "20.5rem";
            cardforeachphone.style.border = "2px solid black";
            cardforeachphone.style.display = "flex";
            cardforeachphone.style.marginTop = "5px";
            cardforeachphone.style.marginRight = "2px";
            cardforeachphone.style.marginLeft = "2px";
            cardforeachphone.style.paddingRight = "35px";

            cardforeachphone.style.flexDirection = "column";
            divforcard.appendChild(cardforeachphone);
            let phoneimage = document.createElement("img");
            phoneimage.src = obj.PhoneImageUrl;
            phoneimage.style.height = "296px";

            phoneimage.style.width = "200px";
            phoneimage.style.alignSelf = "center";
            cardforeachphone.appendChild(phoneimage);
            let phonename = document.createElement("p");
            phonename.innerHTML = "Phone Name:&nbsp;" + "<b>" + obj.PhoneName + "</b>";
            phonename.style.marginLeft = "5px";
            phonename.style.marginTop = "5px";
            cardforeachphone.appendChild(phonename);
            let phoneram = document.createElement("p");
            phoneram.innerHTML = "Ram &nbsp;: " + "<b>" + obj.Ram + "</b>";
            phoneram.style.marginLeft = "5px";
            phoneram.style.marginTop = "5px";
            cardforeachphone.appendChild(phoneram);
            let phoneprocessor = document.createElement('p');
            phoneprocessor.style.marginTop = "5px";
            phoneprocessor.innerHTML = "Processor:" + "<b>" + obj.Processor + "</b>";
            phoneprocessor.style.marginLeft = "5px";
            cardforeachphone.appendChild(phoneprocessor);
            let phonePrice = document.createElement('p');
            phonePrice.innerHTML = "Price:" + "<b>" + obj.Price + "</b>";
            phonePrice.style.marginLeft = "5px";
            phonePrice.style.marginTop = "5px";
            cardforeachphone.appendChild(phonePrice);
            let fullSpecsButton = document.createElement('button');
            fullSpecsButton.innerHTML = "View Full Specs  &nbsp ->";
            fullSpecsButton.style.width = "100%";
            fullSpecsButton.style.height = "100%px;"
            fullSpecsButton.style.backgroundColor = "black";
            fullSpecsButton.style.color = "white";
            fullSpecsButton.style.marginLeft = "18px";
            fullSpecsButton.style.marginTop = "10px";
            fullSpecsButton.style.marginBottom = "10px";
            fullSpecsButton.style.paddingTop = "10px";
            fullSpecsButton.style.paddingBottom = "10px";
            fullSpecsButton.style.borderRadius = "15px";
            fullSpecsButton.id = "fullSpecsButton";
            fullSpecsButton.style.cursor = "pointer";
            cardforeachphone.appendChild(fullSpecsButton);
            const phoneSpecification = () => {
                let phoneName = obj.PhoneName;
                let Ram = obj.Ram;
                let Processor = obj.Processor;
                let Price = obj.Price;
                let PhoneImageUrl = obj.PhoneImageUrl;
                let Battery = obj.Battery;
                let Display = obj.Display;
                let frontCam = obj.FrontCamera;
                let OS = obj.OS;
                let rearCam = obj.RearCamera;
                let Storage = obj.Storage;
                let phoneDetails = { 'phoneId': phoneId, 'phoneName': phoneName, 'Ram': Ram, 'Processor': Processor, 'Price': Price, 'PhoneImageUrl': PhoneImageUrl, 'Battery': Battery, 'Display': Display, 'frontCamera': frontCam, 'OS': OS, 'rearCamera': rearCam, 'Storage': Storage };
                localStorage.setItem('phoneDetails', JSON.stringify(phoneDetails));
                let fullSpecsatag = document.createElement('a');
                fullSpecsatag.href = "phonespecs.html";
                fullSpecsatag.click();

            }
            fullSpecsButton.addEventListener('click', phoneSpecification);

        })
    });
});

