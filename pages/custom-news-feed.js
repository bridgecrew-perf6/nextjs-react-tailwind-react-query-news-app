import { useQuery } from "react-query";
import FeedTemplate from "../components/feedTemplate";
import { getCustomNewsFeed } from "../api/fetchNews";

export default function customNewsFeed() {
  // get preferred topic from local storage
  // check for window object incase of SSR
  let PREFERRED_TOPIC =
    typeof window !== "undefined" ? localStorage.getItem("newsPreference") : "";

  // fetch Custom News Feed
  const { isLoading, isError, data } = useQuery(
    "custom_news_feed",
    getCustomNewsFeed(PREFERRED_TOPIC)
  );

  return (
    <FeedTemplate
      isLoading={isLoading}
      isError={isError}
      data={data}
      homeTemplateTitle="Custom News Feed"
      category="feed"
    />
  );
}
