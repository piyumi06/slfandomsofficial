const fandoms = [

    {
        name: "everglow",
        page: "everglow.html",
        description: "Official Sri Lanka forever Community",
        keywords: "forever"
    },

    {
        name: "alpha drive one",
        page: "ald1.html",
        description: "Official Sri Lanka allyz Community",
        keywords: "allyz, ald1"
    },


    {
        name: "CORTIS",
        page: "cortis.html",
        description: "Official Sri Lanka Community",
        keywords:"coer"
    },

    {
        name: "RIIZE",
        page: "riize.html",
        description: "Official Sri Lanka BRIIZE Community",
        keywords:"briize"
        
    },


    

    {
        name: "LYKN",
        page: "lykn.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "Jasper",
        page: "jasper.html",
        description: "Official Sri Lanka Community",
        keywords:"pond joong aou riser santa tpop"
    },

    {
        name: "Felizz",
        page: "felizz.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "William",
        page: "william.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "sl",
        page: "sl.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "Dexx",
        page: "dexx.html",
        description: "Official Sri Lanka Community"
    },

   

    {
        name: "4EVE",
        page: "4eve.html",
        description: "Official Sri Lanka Community"
    },



    {
    name: "ZEROBASEONE",
    page: "zb1.html",
    description: "Official Sri Lanka ZEROSE Community",
    keywords: "zb1 zerose zero base one"
},

{
    name: "AND2BLE",
    page: "and2ble.html",
    description: "Official Sri Lanka TOOBLES Community",
    keywords: "and2ble toobles"
},

{
    name: "TWS",
    page: "tws.html",
    description: "Official Sri Lanka 42 Community",
    keywords: "tws 42 sai"
},

{
    name: "Kim Gyuvin",
    page: "kimgyuvin.html",
    description: "Official Sri Lanka Kim Gyuvin Community",
    keywords: "kim gyuvin gyuvin zb1 zerose"
},

{
    name: "XLOV",
    page: "xlov.html",
    description: "Official Sri Lanka EVOL Community",
    keywords: "xlov evol"
},

{
    name: "P1Harmony",
    page: "p1harmony.html",
    description: "Official Sri Lanka P1ece Community",
    keywords: "p1harmony p1ece p1ece"
},

{
    name: "LONGSHOT",
    page: "longshot.html",
    description: "Official Sri Lanka SHOTTIES Community",
    keywords: "longshot shotties"
},


{
    name: "CRAVITY",
    page: "cravity.html",
    description: "Official Sri Lanka LUVITY Community",
    keywords: "cravity luvity"
},


    {
    name: "BOYNEXTDOOR",
    page: "boysnextdoor.html",
    description: "Official Sri Lanka ONEDOOR Community",
    keywords: "boynextdoor bnd onedoor"
},


{
    name: "LE SSERAFIM",
    page: "lesserafim.html",
    description: "Official Sri Lanka FEARNOT Community",
    keywords: "le sserafim lesserafim fearnots fearnots"
},

{
    name: "ALPHA DRIVE ONE",
    page: "ald1.html",
    description: "Official Sri Lanka ALLYZ Community",
    keywords: "lald1  allyz"
},

{
    name: "&TEAM",
    page: "andteam.html",
    description: "Official Sri Lanka LUNÉ Community",
    keywords: " andteam  lune"
},    



];



function searchFandom(){

    let input = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

    console.log(input);
    if(input === ""){
    document.getElementById("searchResults").innerHTML = "";
    return;
}
    console.log(fandoms[0]);


  let results = fandoms.filter(item =>
    item.name.toLowerCase().includes(input) ||
    item.description.toLowerCase().includes(input) ||
    (item.keywords && item.keywords.toLowerCase().includes(input))
);


    let output = "";


    results.forEach(item => {

        output += `
        <div class="artist-card">

            <h3>${item.name}</h3>

            <p>${item.description}</p>

            <a href="${item.page}" onclick="clearSearch()">
                Open →
            </a>

        </div>
        `;

    });


    if(output === ""){
        output = "<p>No fandom found 😢</p>";
    }


    document.getElementById("searchResults").innerHTML = output;

}

function clearSearch(){

    document.getElementById("searchResults").innerHTML = "";

    document.getElementById("searchInput").value = "";

}

