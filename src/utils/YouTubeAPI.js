import axios from "axios";

// Export an object containing methods we'll use for accessing the Wikipedia API

export default {
  searchTerms: function(query) {
    return axios.get(
      "https://www.youtube.com/results?search_query=" +
        query +
        "/"
    );
  }
};