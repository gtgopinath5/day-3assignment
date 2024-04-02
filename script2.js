//QUESTION 2
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        data.forEach(function(country) {
            if (country.flags) {
                console.log(country.name.common + ": " + country.flags.svg);
            }
        });
    } else {
        console.error("Failed to fetch data. Status:", request.status);
    }
};
request.onerror = function () {
    console.error("Error fetching data.");
};
// -----------------------------------------------------------------------------------
//QUESTION 3

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
    if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        data.forEach(function (country) {

            var name = country.name.common;
            var region = country.region;
            var subregion = country.subregion;
            var population = country.population;

            console.log("Country: " + name);
            console.log("Region: " + region);
            console.log("Subregion: " + subregion);
            console.log("Population: " + population);
            console.log("----------------------------");
        });
    } else {
        console.error("Failed to fetch data. Status:", request.status);
    }
};

request.onerror = function () {
    console.error("Error fetching data.");
};