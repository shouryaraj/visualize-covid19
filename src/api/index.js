import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// async funtion wrap the return value of this fucntion in a prome
export const fetchData = async () => {

    try{
        // getting response from the server await funtion waits for a promise to be resolves or rejected before continuing code execution in this block
        // const response = await axios.get(url);
        
        // destructre the response only to data
        const { data } = await axios.get(url);
        
        // Getting the required data only
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate:  data.lastUpdate
        }
        console.log(modifiedData)
        return modifiedData;
     

    }catch (error){

    }
}
 export const fetchDailyData = async() => {
     try{
         const {data} = await axios.get(`${url}/daily`);

         const modifiedData = data.map((dailyData) => ({
             confirmed: dailyData.confirmed.total,
             deaths: dailyData.deaths.total,
             date: dailyData.reportDate
         }


         ))
         return modifiedData;
     }catch(error){

     }
 }

 export const fetchCountries = async () => {

    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
        console.log(countries)
        return countries.map((country) => country.name);
    }catch(error){
        console.log(error);
    }
 }
