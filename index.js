window.addEventListener("load", async () => {
    let usernamedetail=JSON.parse(localStorage.getItem('usernamedetail'));
    let username=usernamedetail.username;
    let usernamevalue=document.getElementById("usernamevalue");
    usernamevalue.textContent=username;
    let osmenu = document.getElementById("osmenu");
    osmenu.style.display = "none";
    let togglearrow = document.getElementById("arrow");
    togglearrow.addEventListener("click", () => {
        if (togglearrow.style.transform === "rotate(0deg)") {
            togglearrow.style.transform = "rotate(180deg)";
            osmenu.style.display = "block";
        } else {
            togglearrow.style.transform = "rotate(0deg)";
            osmenu.style.display = "none";
        }
    })
    let latestphonedata = await (await fetch("http://localhost/PHONEAPIBACKEND/displayphoneinfo.php")).json();
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