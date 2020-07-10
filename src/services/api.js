import axios from "axios";

export const fetchData = async (query) => {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=0d43365b7620cd7b9add01bec3fe999b&language=pt-BR&query=${query}&page=1&include_adult=false`;

  try {
    const res = await axios.get(URL);
    const data = res.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};
