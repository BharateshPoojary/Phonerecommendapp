window.addEventListener("load", async () => {
    let title = document.createElement('p');
    title.style.fontSize = "4rem";
    title.id = "title";
    title.innerText = "Your Wish List";
    document.body.appendChild(title);
    let accessing_username = JSON.parse(localStorage.getItem('usernamedetail'));
    let username = accessing_username.username;
    if (username == "User") {
        window.alert("Please signUp to our platform to access this feature");
        window.location.href = "landing.html";
    } else {
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
        if (responseArray.message != "There is nothing in your compare list") {
            responseArray.forEach(async (favphone) => {

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
                // let phoneram = document.createElement("p");
                // phoneram.innerHTML = "Ram &nbsp;: " + "<b>" + favphone.Ram + "</b>";
                // phoneram.style.marginLeft = "5px";
                // phoneram.style.marginTop = "5px";
                // cardforeachphone.appendChild(phoneram);
                // let phoneprocessor = document.createElement('p');
                // phoneprocessor.style.marginTop = "5px";
                // phoneprocessor.innerHTML = "Processor:" + "<b>" + favphone.Processor + "</b>";
                // phoneprocessor.style.marginLeft = "5px";
                // cardforeachphone.appendChild(phoneprocessor);
                let phonePrice = document.createElement('p');
                phonePrice.innerHTML = "Price:" + "<b>" + favphone.Price + "</b>";
                phonePrice.style.marginLeft = "5px";
                phonePrice.style.marginTop = "5px";
                cardforeachphone.appendChild(phonePrice);
                let prosofeachphone = favphone.Pros;
                let prosresstringArray = prosofeachphone.split('.');
                prosresstringArray.pop();
                // console.log(prosresstringArray);
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


            });
        }
    }
})


