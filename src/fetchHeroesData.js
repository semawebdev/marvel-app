import axios from "axios";

const MARVEL_API_KEY = process.env.REACT_APP_MARVEL_API_KEY;
const HASH = process.env.REACT_APP_HASH;
const MARVEL_API_HOSTNAME = "https://gateway.marvel.com";
const MARVEL_API_ENDPOINT = "v1/public/characters"

export const fetchHeroesData = async ({
    timestamp = 1,
    limit = 20,
  } = {}) => {
    return axios(
      `${MARVEL_API_HOSTNAME}/${MARVEL_API_ENDPOINT}?ts=${timestamp}&apikey=${MARVEL_API_KEY}&hash=${HASH}&limit=${limit}`
    );
  };