
window.addEventListener("load",async()=>{
    let latestphonedata= await(await fetch("http://localhost/MYPROJECTLOGINPAGE/phonedata/phoneapi.php")).json();
    console.log(latestphonedata);

let divforcard=document.createElement("div");
divforcard.style.display="grid";
divforcard.style.gridTemplateColumns="repeat(3,1fr)"
divforcard.style.gap="3px";
document.body.appendChild(divforcard)

latestphonedata.forEach(obj => {
    let cardforeachphone=document.createElement("div");
    cardforeachphone.style.height="260px";
    cardforeachphone.style.width="350px";
    cardforeachphone.style.border="2px solid black";
    cardforeachphone.style.display="flex";
    cardforeachphone.style.flexDirection="row"
    divforcard.appendChild(cardforeachphone);
    let phoneimage=document.createElement("img");
    phoneimage.src=obj.PhoneImageUrl;
    cardforeachphone.appendChild(phoneimage);
    console.log(obj.PhoneImageUrl);
    let phonename=document.createElement("h2");
    phonename.innerHTML=obj.PhoneName;
    cardforeachphone.appendChild(phonename);
    let phoneram=document.createElement("h2");
    phoneram.innerHTML=obj.Ram;
    cardforeachphone.appendChild(phoneram);

});

});