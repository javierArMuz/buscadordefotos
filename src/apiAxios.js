import axios from "axios";

const apiAxios = async (term) => {
  const url = 'https://api.unsplash.com/search/photos'
  const resp = await axios.get(url, {
    headers: {
      Authorization: process.env.REACT_APP_apiKey
    },
    params: {
      query: term
    }
  })
  return resp.data.results;
}

export default apiAxios