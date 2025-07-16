const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function() {
    const query = searchInput.value;
    if (query == "") {
        alert("Please enter a search term.");
    } else if (query.toLowerCase() == "one piece" ) {
        open("Anime_html&css/onepiece.html")
    } else if (query.toLowerCase() == "naruto") {
        open("Anime_html&css/naruto.html")
    } else if (query.toLowerCase() == "bleach") {
        open("Anime_html&css/bleach.html")
    } else if (query.toLowerCase() == "jjk" || query.toLowerCase() == "jujutsu kaisen") {
        open("Anime_html&css/jjk.html")
    } else if (query.toLowerCase() == "demon slayer" ) {
        open("Anime_html&css/demonslayer.html")
    } else if (query.toLowerCase() == "solo leveling") {
        open("Anime_html&css/solo.html")
    } else if (query.toLowerCase() == "seven deadly sins" || query.toLowerCase() == "7ds") {
        open("Anime_html&css/seven.html")
    }else {
       open("Anime_html&css/not_addyet.html");
    }
});