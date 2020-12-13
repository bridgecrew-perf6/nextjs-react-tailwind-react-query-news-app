import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getTopHeadlines, getCustomNewsFeed } from "../../api/fetchNews";
import HomeTemplate from "../../components/homeTemplate";
import Loading from "../../components/loading";
import Error from "../../components/error";
import MediaCard from "../../components/mediaCard";

const Post = () => {
  const router = useRouter();
  // get the post index from query params
  const { pid, category } = router.query;

  // get preferred topic from local storage
  // check for window object incase of SSR
  let PREFERRED_TOPIC =
    typeof window !== "undefined" ? localStorage.getItem("newsPreference") : "";

  // fetch top headlines
  // already fetched upstream so will be re-fetched from cache
  const {
    isLoading: topHeadlinesLoading,
    isError: topHeadlinesError,
    data: topHeadlinesData,
  } = useQuery("top_headlines", getTopHeadlines);

  // fetch Custom News Feed
  // also fetched upstream so will be re-fetched from cache
  const {
    isLoading: customNewsFeedLoading,
    isError: customNewsFeedError,
    data: customNewsFeedData,
  } = useQuery("custom_news_feed", getCustomNewsFeed(PREFERRED_TOPIC));

  // conditional template title
  let templateTitle =
    category === "headlines" ? "Top Headlines" : "Custom News Feed";

  if (topHeadlinesLoading || customNewsFeedLoading) {
    return (
      <HomeTemplate title="Single Post" activeLink={templateTitle}>
        <Loading />
      </HomeTemplate>
    );
  }

  if (
    topHeadlinesError ||
    customNewsFeedError ||
    topHeadlinesData.status === "error" ||
    customNewsFeedData.status === "error" ||
    !topHeadlinesData.articles[pid] ||
    !customNewsFeedData.articles[pid]
  ) {
    return (
      <HomeTemplate title="Single Post" activeLink={templateTitle}>
        <Error />
      </HomeTemplate>
    );
  }

  // conditional de-structure from appropriate array at index 'pid'
  let { urlToImage, title, content, description, author, publishedAt, url } =
    category === "headlines"
      ? topHeadlinesData.articles[pid]
      : customNewsFeedData.articles[pid];

  return (
    <HomeTemplate title="Single Post" activeLink={templateTitle} backButton>
      <MediaCard
        image={urlToImage}
        title={title}
        content={content}
        description={description}
        author={author}
        date={publishedAt}
        url={url}
        single
      />
    </HomeTemplate>
  );
};

export default Post;
