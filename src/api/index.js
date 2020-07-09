import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url
    changeableUrl = country ? `${url}/countries/${country}` : url;
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        const modifiedData = { confirmed, recovered, deaths, lastUpdate };
        return modifiedData;
    }
    catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailydata) => ({
            confirmed: dailydata.confirmed.total,
            deaths: dailydata.deaths.total,
            date: dailydata.reportDate,
        }));

        return modifiedData;
    }
    catch (error) {

    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);        
        return countries.map((country) => country.name);
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchCountryMapData = async () => {
    try {
        const {data} = await axios.get('https://corona.lmao.ninja/v3/covid-19/countries');       
        return data.map(country => ({ lat: country.countryInfo.lat, long: country.countryInfo.long, flag: country.countryInfo.flag, cases: country.cases } ));
    }
    catch (error) {
        console.log(error);
    }
}