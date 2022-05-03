import axios from "axios";

const instance=axios.create({
    baseURL:"https://bing-news-search1.p.rapidapi.com/"
})

export default instance