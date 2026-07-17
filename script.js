const fandoms = [
    {
        name: "BTS",
        page: "bts.html",
        description: "Official Sri Lanka ARMY Community"
    },

    {
        name: "BLACKPINK",
        page: "blackpink.html",
        description: "Official Sri Lanka BLINK Community"
    },

    {
        name: "PondPhuwin",
        page: "pondphuwin.html",
        description: "Official Sri Lanka Community"
    },

    {
        name: "Manga",
        page: "manga.html",
        description: "Sri Lanka Manga Community"
    },

    {
        name: "Anime",
        page: "anime.html",
        description: "Anime Fans Community"
    }
];


function searchFandom(){

    let input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();


    let results = fandoms.filter(item =>
        item.name.toLowerCase().includes(input)
    );


    let output = "";


    results.forEach(item => {

        output += `
        <div class="artist-card">

            <h3>${item.name}</h3>

            <p>${item.description}</p>

            <a href="${item.page}">
            Open →
            </a>

        </div>
        `;

    });


    document.getElementById("searchResults").innerHTML = output;


}
