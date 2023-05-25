import { reactive } from 'vue'

export const store = reactive({

    MOVIE_API: 'https://api.themoviedb.org/3/movie/550?api_key=19d2c4e33ebd2ea5b31f34ef0140fe92',
    query: null,
    foundMoviesList: [],
    movieTitle: null,
    movieOriginalTitle: null,
    movieLanguage: null,
    movieVote: null
})