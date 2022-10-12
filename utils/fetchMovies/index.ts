import axios from "axios";

const options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/title/get-videos",
  params: { tconst: "tt0944947", limit: "25", region: "US" },
  headers: {
    "X-RapidAPI-Key": "753b67bde1msh1ba3dfa01a31cdbp176045jsnb33e3462027c",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

export const fetchMovies = () =>
  axios
    .request(options)
    .then(function (response) {
      return response.data.resource;
    })
    .catch(function (error) {
      console.error(error);
    });
