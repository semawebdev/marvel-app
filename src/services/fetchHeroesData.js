import axios from "axios";

const MARVEL_API_KEY = process.env.REACT_APP_MARVEL_API_KEY;
const HASH = process.env.REACT_APP_HASH;
const MARVEL_API_HOSTNAME = "https://gateway.marvel.com";
const MARVEL_API_ENDPOINT = "v1/public/characters"

const memo = {};

export const fetchHeroesData = async ({
  timestamp = 1,
  limit = 20,
  offset = 0,
} = {}) => {
  const key = [timestamp, HASH, limit, offset].join("_");
  if ((key in memo)) {
    console.log("Data is fetched from cache")
    return memo[key]

  } 
    return memo[key] = axios(
      `${MARVEL_API_HOSTNAME}/${MARVEL_API_ENDPOINT}?ts=${timestamp}&apikey=${MARVEL_API_KEY}&hash=${HASH}&limit=${limit}&offset=${offset}`
    )
};



