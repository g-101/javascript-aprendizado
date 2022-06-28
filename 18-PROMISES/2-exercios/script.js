const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Read the countries API using fetch and print the name of country, 
// capital, languages, population and area.

const readCountries = async function() {
    try {
        const answer = await fetch(countriesAPI);
        const country = await answer.json();
        console.log(country);
    }
    catch(err) {
        console.error(err);
    }
}

readCountries();