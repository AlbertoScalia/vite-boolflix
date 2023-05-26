import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  MOVIEDB_API:
    'https://api.themoviedb.org/3/search/multi?api_key=19d2c4e33ebd2ea5b31f34ef0140fe92&query=',
    MOVIEIMG_URL: "https://image.tmdb.org/t/p/",
    query: null,
    resultsList: [],
    movieTitle: null,
    movieOriginalTitle: null,
    movieLanguage: null,
    movieVote: null,
    performSearchMovie(url) {
      axios
      .get(url)
      .then((response) => {
        store.resultsList = response.data.results;
        //console.log(store.resultsList)
      })
      .catch(err => {
          console.error(err)
      });
    },
  });