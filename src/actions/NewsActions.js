import * as types from '../constants/ActionTypes';
import { newsApiConfig } from '../shared/config';

const startPart = 'https://newsapi.org/v1/articles?source=';
const endPart = `&apiKey=${newsApiConfig.apiKey}&sortBy=${newsApiConfig.sortBy}`;

export const getNews = () => {
  const promises = newsApiConfig.sources.map(source => fetch(`${startPart}${source}${endPart}`));

  const promise = Promise.all(promises)
    .then(responses => Promise.all(responses.map(response => {
      if (!response.ok) return { articles: [] };
      return response.json();
    })))
    .then(jsons => {
      const newsList = [];
      jsons.forEach(json => {
        newsList.push(...json.articles.map(article => ({
          title: article.title,
          urlToImage: article.urlToImage,
          url: article.url,
          description: article.description,
        })));
      });

      return newsList;
    });

  return {
    type: types.GET_NEWS,
    promise,
  };
};
