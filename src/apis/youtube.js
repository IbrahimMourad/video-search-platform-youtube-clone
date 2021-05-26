import axios from "axios";
const KEY = "AIzaSyAisMNxu_2HpPeCvTRVrN71u4q4eW4iLRA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
