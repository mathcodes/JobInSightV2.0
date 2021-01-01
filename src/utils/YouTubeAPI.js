import axios from "axios";

// Export an object containing methods we'll use for accessing the Wikipedia API

export default {
  searchTerms: function(queryYouTube) {
    return axios.get(
      "https://www.youtube.com/results?search_query=" +
        queryYouTube
    );
  }
};