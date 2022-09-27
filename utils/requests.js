const API_KEY = process.env.API_KEY;

export default {
    fetchTrending:{
        title:"Trending",
        url: `/trending/movie/week?api_key=${API_KEY}&language=en-US`


    },
    fetchTopRates:{
        title:"Top Rate",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-us`


    },
    fetchActionMovies:{
        title:"Action",
        url: `/discover/movie?api_key:${API_KEY}&with_geners=28`


    },
    fetchComedyMovies:{
        title:"Comedy",
        url: `/discover/movie?api_key:${API_KEY}&with_geners=35`


    },
    fetchHorrorMovies:{
        title:"Horror",
        url: `/discover/movie?api_key:${API_KEY}&with_geners=27`


    },
    fetchRomanticMovies:{
        title:"Romantic",
        url: `/discover/movie?api_key:${API_KEY}&with_geners=10749`


    },
    fetchMisteryMovies:{
        title:"Mistery",
        url: `/discover/movie?api_key:${API_KEY}&with_geners=9648`


    },
    fetchHorrorMovies:{
        title:"Sci-Fi",
        url: `/discover/movie?api_key:${API_KEY}&with_geners=878`


    },
    fetchWestern:{
        title:"Western",
        url: `/discover/movie?api_key:${API_KEY}&with_geners=37`


    },
    fetchAnimation:{
        title:"Animation",
        url: `/discover/movie?api_key:${API_KEY}&with_geners=16`


    },
    fetchTV:{
        title:"Tv Movie",
        url: `/discover/movie?api_key:${API_KEY}&with_geners=10770`


    },

}