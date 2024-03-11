let latestphonedata = [{
    PhoneImageUrl: "https://www.91-img.com/pictures/150931-v4-oneplus-12r-mobile-phone-large-1.jpg?tr=q-80",
    PhoneName: "OnePlus 12R",
    Price: "Rs. 39,990 (onwards)",
    Ram: "8 GB",
    Processor: "Qualcomm Snapdragon 8 Gen 2",
    RearCamera: "50 MP + 8 MP + 2 MP",
    FrontCamera: "16 MP",
    Battery: "5500 mAh",
    Display: "6.78 inches (17.22 cm)"
},
{
    PhoneImageUrl: "https://www.91-img.com/pictures/156670-v4-iqoo-neo-9-pro-mobile-phone-large-1.jpg?tr=q-80",
    PhoneName: "iQOO Neo 9 Pro",
    Price: "Rs. 36,999 (onwards)",
    RAM: "8 GB",
    Processor: "	Qualcomm Snapdragon 8 Gen 2",
    RearCamera: "50 MP + 8 MP",
    FrontCamera: "16 MP",
    Battery: "5160 mAh",
    Display: "6.78 inches (17.22 cm)"
},
{

    PhoneImageUrl: "https://www.91-img.com/pictures/154780-v2-realme-12-pro-plus-mobile-phone-large-1.jpg?tr=q-80",
    PhoneName: "realme 12 Pro Plus",
    Price: "Rs. 28,939 (onwards)",
    RAM: "8 GB",
    Processor: "	Qualcomm Snapdragon 7S Gen 2",
    RearCamera: "50 MP + 8 MP + 64 MP",
    FrontCamera: "32 MP",
    Battery: "5000 mAh",
    Display: "6.7 inches (17.02 cm)"
},
{
    PhoneImageUrl: "https://www.91-img.com/pictures/150247-v6-xiaomi-redmi-note-13-pro-mobile-phone-large-1.jpg?tr=q-80",
    PhoneName: "Xiaomi Redmi Note 13 Pro",
    Price: "Rs. 23,804 (onwards)",
    RAM: "8 GB",
    Processor: "	Qualcomm Snapdragon 7S Gen 2",
    RearCamera: "200 MP + 8 MP + 2 MP",
    FrontCamera: "16 MP",
    Battery: "5100 mAh",
    Display: "6.67 inches (16.94 cm)"
},
{

    PhoneImageUrl: "https://www.91-img.com/pictures/159373-v4-honor-x9b-mobile-phone-large-1.jpg?tr=q-80",
    PhoneName: "Honor X9B",
    Price: "Rs. 25,999 (onwards)",
    Ram: "8 GB",
    Processor: "4nm Qualcomm Snapdragon 6 Gen 1",
    RearCamera: "108 MP + 5 MP + 2 MP",
    FrontCamera: "16 MP",
    Battery: "5800 mAh",
    Display: "6.78 inches (17.22 cm)"
},
{

    PhoneImageUrl: "https://www.91-img.com/pictures/151819-v6-oneplus-12-mobile-phone-large-1.jpg?tr=q-80",
    PhoneName: "OnePlus 12",
    Price: "Rs. 64,999 (onwards)",
    Ram: "12 GB",
    Processor: "	Qualcomm Snapdragon 8 Gen 3",
    RearCamera: "50 MP + 48 MP + 64 MP",
    FrontCamera: "32 MP",
    Battery: "5400 mAh",
    Display: "6.82 inches (17.32 cm)"
},
{

    PhoneImageUrl: "https://www.91-img.com/pictures/150294-v10-samsung-galaxy-s24-ultra-mobile-phone-large-1.jpg?tr=q-80",
    PhoneName: "Samsung Galaxy S24 Ultra",
    Price: "Rs. 112,500 (onwards)",
    Ram: "12 GB",
    Processor: "	Qualcomm Snapdragon 8 Gen 3",
    RearCamera: "200 MP + 12 MP + 10 MP + 50 MP",
    FrontCamera: "12 MP",
    Battery: "5000 mAh",
    Display: "6.8 inches (17.27 cm)"
},
{

    PhoneImageUrl: "https://www.91-img.com/pictures/150774-v4-xiaomi-redmi-note-13-mobile-phone-large-1.jpg?tr=q-80",
    PhoneName: "Xiaomi Redmi Note 13",
    Price: "Rs. 16,875 (onwards)",
    Ram: "6 GB",
    Processor: "	MediaTek Dimensity 6080 MT6833",
    RearCamera: "108 MP + 8 MP + 2 MP",
    FrontCamera: "16 MP",
    Battery: "5000 mAh",
    Display: "6.67 inches (16.94 cm)"
},
{

    PhoneImageUrl: "https://www.91-img.com/pictures/150250-v6-poco-x6-pro-mobile-phone-large-1.jpg?tr=q-80",
    PhoneName: "POCO X6 Pro",
    Price: "Rs. 25,999 (onwards)",
    Ram: "8 GB",
    Processor: "	MediaTek Dimensity 8300 Ultra",
    RearCamera: "64 MP + 8 MP + 2 MP",
    FrontCamera: "16 MP",
    Battery: "5000 mAh",
    Display: "6.67 inches (16.94 cm)"
},
{

    PhoneImageUrl: "https://www.91-img.com/pictures/150270-v6-xiaomi-redmi-note-13-pro-plus-5g-mobile-phone-large-1.jpg?tr=q-80",
    PhoneName: "Xiaomi Redmi Note 13 Pro Plus 5G",
    Price: "Rs. 30,760 (onwards)",
    Ram: "8 GB",
    Processor: "	MediaTek Dimensity 7200 Ultra",
    RearCamera: "200 MP + 8 MP + 2 MP",
    FrontCamera: "16 MP",
    Battery: "5000 mAh",
    Display: "6.67 inches (16.94 cm)"
},
]
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
    phoneimage.src=obj.PhoneImageUrl
    cardforeachphone.appendChild(phoneimage)
    console.log(obj.PhoneImageUrl);
});