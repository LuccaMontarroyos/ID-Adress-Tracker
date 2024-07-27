import axios from 'axios';

export const FetchAddress = async (Ip) => {
    const ApiKey = 'at_mQLqxzDY8NMS4SbE3yDSdeWQKsOg7';
    const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${ApiKey}&ipAddress=${Ip}`);
    return response.data;
};

export const FetchCurrentIp = async () => {
    const response = await axios.get('https://api64.ipify.org?format=json');
    console.log(await response.data.ip);
    return response.data.ip;
};