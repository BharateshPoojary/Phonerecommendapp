window.addEventListener("load", async () => {
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
        // divforcard.style.marginLeft = "230px";
        document.body.appendChild(divforcard);
        if (responseArray.message != "There is nothing in your compare list") {
            responseArray.forEach(async favphone => {

                let cardforeachphone = document.createElement("div");
                cardforeachphone.id = "cardforeachphone";
                cardforeachphone.style.height = "450px";
                cardforeachphone.style.width = "20rem";
                cardforeachphone.style.border = "2px solid black";
                cardforeachphone.style.display = "flex";
                cardforeachphone.style.marginTop = "5px";
                cardforeachphone.style.marginRight = "2px";
                cardforeachphone.style.marginLeft = "2px";
                cardforeachphone.style.paddingRight = "35px";
                cardforeachphone.style.flexDirection = "column";
                divforcard.appendChild(cardforeachphone);
                let phoneimage = document.createElement("img");
                phoneimage.src = favphone.PhoneImageUrl;
                phoneimage.style.height = "296px";

                phoneimage.style.width = "200px";
                phoneimage.style.alignSelf = "center";
                cardforeachphone.appendChild(phoneimage);
                let phonename = document.createElement("p");
                phonename.innerHTML = "Phone Name:&nbsp;" + "<b>" + favphone.PhoneName + "</b>";
                phonename.style.marginLeft = "5px";
                phonename.style.marginTop = "5px";
                cardforeachphone.appendChild(phonename);
                let phoneram = document.createElement("p");
                phoneram.innerHTML = "Ram &nbsp;: " + "<b>" + favphone.Ram + "</b>";
                phoneram.style.marginLeft = "5px";
                phoneram.style.marginTop = "5px";
                cardforeachphone.appendChild(phoneram);
                let phoneprocessor = document.createElement('p');
                phoneprocessor.style.marginTop = "5px";
                phoneprocessor.innerHTML = "Processor:" + "<b>" + favphone.Processor + "</b>";
                phoneprocessor.style.marginLeft = "5px";
                cardforeachphone.appendChild(phoneprocessor);
                let phonePrice = document.createElement('p');
                phonePrice.innerHTML = "Price:" + "<b>" + favphone.Price + "</b>";
                phonePrice.style.marginLeft = "5px";
                phonePrice.style.marginTop = "5px";
                cardforeachphone.appendChild(phonePrice);
                let phoneName = favphone.PhoneName;
                let strphoneName = phoneName;
                let phoneNamewithoutwhitespace = strphoneName.split(' ').join('');
                console.log(phoneNamewithoutwhitespace);
                let youtubeapikey = "AIzaSyAhW1eLNh8QnuzvpMiUjjUCwL81LZETSUQ";
                let cloudconsoleyoutubetrailerlink = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxresults=1&q=${phoneNamewithoutwhitespace}unboxing&key=${youtubeapikey}`;
                let cloudconsoleyoutubetrailerfetching = await (await fetch(cloudconsoleyoutubetrailerlink)).json();
                let unboxingVideoId = cloudconsoleyoutubetrailerfetching.items[0].id.videoId;
                let phoneunboxingVideolink = "https://m.youtube.com/watch?v=" + unboxingVideoId;
                console.log(phoneunboxingVideolink);


                let youtubeReviewlink = `https://www.youtube.com/results?search_query=${phoneNamewithoutwhitespace}review`;
                console.log(youtubeReviewlink);
                let amazonBuyingLink = `https://www.amazon.in/s?k=${phoneNamewithoutwhitespace}`;
                console.log(amazonBuyingLink);
                let flipkartBuyingLink = `https://www.flipkart.com/search?q=${phoneNamewithoutwhitespace}`;
                console.log(flipkartBuyingLink);



            });
        }
    }


})


