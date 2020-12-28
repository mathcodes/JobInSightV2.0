import React, { useState, useEffect } from "react";
import Container from "../Container";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import Alert from "../Alert";
import ArticleContext from "../../utils/ArticleContext";
import API from "../../utils/API";

//change the state... title and URL of the number
function Search() {
  const [articleState, setArticleState] = useState({  // |
    title: "",                                        // |
    url: ""                                           // | 
  });
// in essence the goal of this is to make articleState available in an article context
// so we have created an ArticleContext to do that for us: src/util/ArticleContext.js
  const [search, setSearch] = useState("Wikipedia");
  const [error, setError] = useState("");

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "JobInSight";

    if (!search) {
      return;
    }
// only difference here is that we areusing the set article state tp set those two 
// pieces of state as opposed to calling 2 individiually. 
    API.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setArticleState({ //now using these 2 pieces of state @ same time
          title: res.data[1][0],
          url: res.data[3][0]
        });
      })
      .catch(err => setError(err));
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
    <ArticleContext.Provider value={articleState}>
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Search For Anything on Wikipedia</h1>
          <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
            {error}
          </Alert>
          <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={search}
          />
          <SearchResults />
        </Container>
      </div>
    </ArticleContext.Provider>
  );
}

export default Search;
