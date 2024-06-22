window.addEventListener("load", async () => {

    let title = document.createElement('p');
    title.style.fontSize = "2rem";
    title.id = "title";
    document.body.appendChild(title);
    let accessing_username = JSON.parse(localStorage.getItem('usernamedetail'));
    let username = accessing_username.username;

    let usernameObject = { username: username };
    let sendingusernametobackendforaccessingfavphones = "http://localhost/phonerecommendapp(Backend)/favouritelistdisplaying.php";
    let responseArray = await (await fetch(sendingusernametobackendforaccessingfavphones, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usernameObject),
    })).json();
    console.log(responseArray);
    let divforcard = document.createElement("div");
    divforcard.style.display = "flex";
    divforcard.style.flexWrap = "wrap";
    divforcard.id = "mobilecontainer";
    divforcard.style.marginTop = "0.5rem";
    document.body.appendChild(divforcard);
    if (responseArray.message != "There is nothing in your Wish list") {
        title.innerText = "Your Wish List";
        responseArray.forEach(async (favphone) => {

            console.log(responseArray);
            let cardforeachphone = document.createElement("div");
            cardforeachphone.id = "cardforeachphone";
            cardforeachphone.style.height = "40rem";
            cardforeachphone.style.width = "20.5rem";
            cardforeachphone.style.border = "2px solid black";
            cardforeachphone.style.display = "flex";
            cardforeachphone.style.marginTop = "5px";
            cardforeachphone.style.marginRight = "2px";
            cardforeachphone.style.marginLeft = "2px";
            cardforeachphone.style.paddingRight = "35px";
            cardforeachphone.style.flexDirection = "column";
            divforcard.appendChild(cardforeachphone);
            let divforimgandbuttons = document.createElement('div');
            divforimgandbuttons.style.display = "flex";
            divforimgandbuttons.style.flexDirection = "row";
            cardforeachphone.appendChild(divforimgandbuttons);
            let phoneimage = document.createElement("img");
            phoneimage.src = favphone.PhoneImageUrl;
            phoneimage.style.height = "296px";
            phoneimage.style.width = "200px";
            phoneimage.style.alignSelf = "left";
            divforimgandbuttons.appendChild(phoneimage);
            let phonename = document.createElement("p");
            phonename.innerHTML = "Phone Name:&nbsp;" + "<b>" + favphone.PhoneName + "</b>";
            phonename.style.marginLeft = "5px";
            phonename.style.marginTop = "5px";
            cardforeachphone.appendChild(phonename);
            let phonePrice = document.createElement('p');
            phonePrice.innerHTML = "Price:" + "<b>" + favphone.Price + "</b>";
            phonePrice.style.marginLeft = "5px";
            phonePrice.style.marginTop = "5px";
            cardforeachphone.appendChild(phonePrice);
            let prosofeachphone = favphone.Pros;
            let prosresstringArray = prosofeachphone.split('.');
            prosresstringArray.pop();
            let prosandconsdiv = document.createElement("div");
            let prosulist = document.createElement('ul');
            prosulist.style.marginLeft = "5px";
            prosulist.style.marginTop = "5px";
            prosulist.innerText = "Pros:";
            prosandconsdiv.appendChild(prosulist);
            prosresstringArray.forEach(pros => {
                let proslist = document.createElement('li');
                proslist.style.marginLeft = "15px";
                proslist.innerHTML = "<b>" + pros + "</b>";
                prosulist.appendChild(proslist)
                // console.log(pros);
            })
            let consofeachphone = favphone.Cons;
            let consArray = consofeachphone.split('.');
            consArray.pop();
            let consulist = document.createElement('ul');
            consulist.style.marginLeft = "5px";
            consulist.style.marginTop = "5px";
            consulist.innerText = "Cons:";
            prosandconsdiv.appendChild(consulist);
            consArray.forEach(Cons => {
                let conslist = document.createElement('li');
                conslist.style.marginLeft = "15px";
                conslist.innerHTML = "<b>" + Cons + "</b>";
                consulist.appendChild(conslist)
                // console.log(Cons);
            })
            cardforeachphone.appendChild(prosandconsdiv);
            let phoneName = favphone.PhoneName;
            let strphoneName = phoneName;
            let phoneNamewithoutwhitespace = strphoneName.split(' ').join('');
            console.log(phoneNamewithoutwhitespace);
            let divforbutton = document.createElement('div');
            divforbutton.style.display = "flex";
            divforbutton.style.flexDirection = "column";
            divforimgandbuttons.appendChild(divforbutton);
            let youtubeUnboxinglink = `https://www.youtube.com/results?search_query=${phoneNamewithoutwhitespace}Unboxing`;
            console.log(youtubeUnboxinglink);
            let youtubeUnboxingbutton = document.createElement('button');
            youtubeUnboxingbutton.id = "UnboxingButton";
            youtubeUnboxingbutton.innerText = "Watch Unboxing";
            youtubeUnboxingbutton.addEventListener("click", () => {
                window.location.href = youtubeUnboxinglink;
            });
            let youtubeReviewlink = `https://www.youtube.com/results?search_query=${phoneNamewithoutwhitespace}review`;
            console.log(youtubeReviewlink);
            divforbutton.appendChild(youtubeUnboxingbutton);
            let youtubeReviewbutton = document.createElement('button');
            youtubeReviewbutton.id = "ytreview";
            youtubeReviewbutton.innerText = "Watch Reviews";
            youtubeReviewbutton.addEventListener("click", () => {
                window.location.href = youtubeReviewlink;
            });
            divforbutton.appendChild(youtubeReviewbutton);

            let amazonBuyingLink = `https://www.amazon.in/s?k=${phoneNamewithoutwhitespace}`;
            console.log(amazonBuyingLink);
            let amazonBuyingbutton = document.createElement('button');
            amazonBuyingbutton.id = "amazonbuyBtn";
            amazonBuyingbutton.innerText = "Buy from amazon";
            amazonBuyingbutton.addEventListener("click", () => {
                window.location.href = amazonBuyingLink;
            });
            divforbutton.appendChild(amazonBuyingbutton);

            let flipkartBuyingLink = `https://www.flipkart.com/search?q=${phoneNamewithoutwhitespace}`;
            console.log(flipkartBuyingLink);
            let flipkartBuyingbutton = document.createElement('button');
            flipkartBuyingbutton.id = "flipkartbuyBtn";
            flipkartBuyingbutton.innerText = "Buy from Flipkart";
            flipkartBuyingbutton.addEventListener("click", () => {
                window.location.href = flipkartBuyingLink;
            });
            divforbutton.appendChild(flipkartBuyingbutton);
            let removefavphoneButton = document.createElement('button');
            removefavphoneButton.id = "removefavphoneButton";
            removefavphoneButton.innerText = "Remove From Wish list";
            cardforeachphone.appendChild(removefavphoneButton);
            removefavphoneButton.addEventListener("click", async () => {
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
                msg.innerText = `Are you sure ${username} you want to remove ${favphone.PhoneName} from your wish list?`;
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

                    let usernameandphoneIdObject = { username: username, phoneId: favphone.PhoneId };
                    let removingFavPhoneFromBackend = "http://localhost/phonerecommendapp(Backend)/removefavphone.php";
                    let deleteresponse = await (await fetch(removingFavPhoneFromBackend, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(usernameandphoneIdObject),
                    })).json();
                    console.log(deleteresponse.message);
                    if (deleteresponse.message == "Deleted") {
                        window.location.href = "comparelist.html";
                    }

                });
                cancelbtn.addEventListener("click", () => {
                    message.remove();
                })
            });

        });
    } else {
        title.innerText = responseArray.message;
        title.style.transform = "translateX(100%)";
        title.style.transform = "translateY(100%)";


    }
    let go_Back = document.querySelector(".gobackbutton");
    go_Back.addEventListener("click", () => {
        window.location.href = "index.html";
    })
})


