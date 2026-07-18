const fandoms = [

    {
        name: "BTS",
        page: "bts.html",
        description: "Official Sri Lanka ARMY Community",
        keywords: "army bangtan bangtanboys bts kpop korea korean rm"
    },

    {
        name: "BLACKPINK",
        page: "blackpink.html",
        description: "Official Sri Lanka BLINK Community",
        keywords: "blink jisoo rose lisa jennie girl kpop korea korean"
    },

    {
        name: "Stray Kids",
        page: "straykids.html",
        description: "Official Sri Lanka STAY Community",
        keywords:"stay bangchan kpop"
    },

    {
        name: "TXT",
        page: "txt.html",
        description: "Official Sri Lanka MOA Community",
        keywords:"moa"
    },

    {
        name: "EXO",
        page: "exo.html",
        description: "Official Sri Lanka EXO-L Community",
        keywords:"exol"
    },

    {
        name: "Marvel",
        page: "marvel.html",
        description: "Marvel Fans Community",
        keywords:"spiderman iron man hulk"
    },

    {
        name: "DC",
        page: "dc.html",
        description: "DC Fans Community"
    },

    {
        name: "Anime",
        page: "anime.html",
        description: "Anime Fans Community"
    },

    {
        name: "Manga",
        page: "manga.html",
        description: "Manga Lovers Community",
        keywords:"yaoi yuri"
    },

    {
        name: "Enhypen",
        page: "enhypen.html",
        description: "Official Sri Lanka ENGENE Community",
        keywords:"engine"
    },

    {
        name: "Seventeen",
        page: "seventeen.html",
        description: "Official Sri Lanka CARAT Community",
        keywords:"carat dk"
    },

    {
        name: "NCT",
        page: "nct.html",
        description: "Official Sri Lanka NCTzen Community",
        keywords:"nctzen"
    },

    {
        name: "TWICE",
        page: "twice.html",
        description: "Official Sri Lanka ONCE Community",
        keywords:"once"
    },

    {
        name: "ATEEZ",
        page: "ateez.html",
        description: "Official Sri Lanka ATINY Community",
        keywords:"atiny"
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
        name: "PondPhuwin",
        page: "pondphuwin.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "JoongDunk",
        page: "joongdunk.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "WilliamEst",
        page: "williamest.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "GeminiFourth",
        page: "geminifourth.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "AouBoom",
        page: "aouboom.html",
        description: "Official Sri Lanka Community"
    },


    {
        name: "GMMTV",
        page: "gmmtv.html",
        description: "Official Communities"
    },

    {
        name: "SkyNani",
        page: "skynani.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "DMD",
        page: "dmd.html",
        description: "Official Communities"
    },

    {
        name: "Be On Cloud",
        page: "beoncloud.html",
        description: "Official Communities"
    },

    {
        name: "Me Mind Y",
        page: "memindy.html",
        description: "Official Communities"
    },

    {
        name: "YinWar",
        page: "yinwar.html",
        description: "Official Sri Lanka Community"
    },


    {
        name: "PerthSanta",
        page: "perthsanta.html",
        description: "Official Sri Lanka Community"
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
        name: "Proxie",
        page: "proxie.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "Perses",
        page: "perses.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "Pixxie",
        page: "pixxie.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "4EVE",
        page: "4eve.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "Atlas",
        page: "atlas.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "Dice",
        page: "dice.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "MXFruit",
        page: "mxfruit.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "Bamm",
        page: "bamm.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "VIIS",
        page: "viis.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "Alala",
        page: "alala.html",
        description: "Official Sri Lanka Community"
    },


    {
        name: "K Drama",
        page: "kdrama.html",
        description: "Korean Drama Fans Community"
    },

    {
        name: "C Drama",
        page: "cdrama.html",
        description: "Chinese Drama Fans Community"
    }

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

