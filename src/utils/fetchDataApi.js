import axios from "axios";
const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '280e8d9faemsh9d053087e52a2bbp17c1e3jsn28335c5fa555',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI= async (url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}