document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById("searchBox");
    
    const searchButton = document.getElementById("searchButton");
    const cafeTable = document.getElementById("cafeTable");
    let cafesData, placesData;

    function fetchCafesAndPlaces() {
        const cafesEndpoint = "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json";
        const placesEndpoint = "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json";

        Promise.all([fetch(cafesEndpoint), fetch(placesEndpoint)])
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(data => {
                cafesData = data[0].cafes;
                placesData = data[1].places;
                displayCafes(cafesData, placesData);
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    fetchCafesAndPlaces();

    function displayCafes(cafes, places) {
        cafeTable.innerHTML = "";
        cafes.forEach(cafe => {
            const place = places.find(place => place.id === cafe.location_id);
            if (place) {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${cafe.name}</td>
                    <td>${place.street_no}</td>
                    <td>${place.locality}</td>
                    <td>${place.postal_code}</td>
                `;
                cafeTable.appendChild(tr);
            }
        });
        
    }

    searchButton.addEventListener("click", function() {
        const searchTerm = searchBox.value.trim().toLowerCase();
        const filteredCafes = cafesData.filter(cafe => cafe.name.toLowerCase().includes(searchTerm));
        displayCafes(filteredCafes, placesData);
    });
});