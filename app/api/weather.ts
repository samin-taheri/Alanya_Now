import axios from 'axios';

const apiKey= 'e18b37f861714f979df122635233011';

const forcastEndpoint =  (params: any) => `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Alanya&aqi=no`;

const apiCall = async (endpoint: any) => {
    const options ={
        method: 'GET',
        url: endpoint
    }
    try{
        const response = await axios.request(options);
    } catch(err) {
        console.log(err);
        return null;
    }
}

export const fetchForcastData = (params: any) => {
    let forcastUrl = forcastEndpoint(params);
    return apiCall(forcastUrl);
}

