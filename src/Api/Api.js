import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
export const fetchData = async(country) =>{
    console.log(`Api : ${country}`)
    const country_url = country? `${url}/countries/${country}` : url 
    console.log(url)
    const {data : {confirmed,recovered,deaths,lastUpdate}} = await axios.get(country_url);
    const modified = {
        confirmed,
        deaths,
        recovered,
        lastUpdate
    }
    return modified;
}


export const fetchCountry = async() =>{
    const {data : {countries}} = await axios.get(`${url}/countries`);
    const array =  countries.map(country=>country.name);
    return array
}