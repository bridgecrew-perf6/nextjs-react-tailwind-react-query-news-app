let API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY,
  SOURCE_COUNTRY = process.env.NEXT_PUBLIC_SOURCE_COUNTRY,
  ARTICLES_PER_PAGE = process.env.NEXT_PUBLIC_ARTICLES_PER_PAGE;

// get numbered top news headlines from a country
export const getTopHeadlines = () =>
  fetch(
    `https://newsapi.org/v2/top-headlines?country=${SOURCE_COUNTRY}&pageSize=${ARTICLES_PER_PAGE}&apiKey=${API_KEY}`
  ).then((res) => res.json());

// get numbered news items from a specified topic
// react query needs the fn return a fn that return a promise (quirky.. I know)
export const getCustomNewsFeed = (TOPIC) => () =>
  fetch(
    `https://newsapi.org/v2/everything?q=${TOPIC}&pageSize=${ARTICLES_PER_PAGE}&apiKey=${API_KEY}`
  ).then((res) => res.json());
