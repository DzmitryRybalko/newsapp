import axios from "axios";
import queryString from "query-string";

const defaultOptions = {
  apiKey: process.env.REACT_APP_NEWS_API_KEY,
  sources: [
    "bbc-news",
    "bloomberg",
    "entertainment-weekly",
    "ign",
    "wired"
  ].join(","),
  pageSize: 10,
  language: "en"
};

const getNews = options => {
  const requestOptions = {
    ...defaultOptions,
    ...options
  };

  return axios
    .get(
      "https://newsapi.org/v2/everything?" +
        queryString.stringify(requestOptions)
    )
    .then(newsApiResponse => {
      return newsApiResponse.data.articles;
    });
};

export default {
  getNews
};
