import { useQuery } from "react-query";
import HomeTemplate from "../components/homeTemplate";
import FeedTemplate from "../components/feedTemplate";
import { getCustomNewsFeed } from "../api/fetchNews";
import Error from "../components/error";

export default function customNewsFeed() {
  // get preferred topic from local storage
  // check for window object incase of SSR
  let PREFERRED_TOPIC =
    typeof window !== "undefined" ? localStorage.getItem("newsPreference") : "";

  // fetch Custom News Feed
  const { isLoading, isError, error, data } = useQuery(
    "custom_news_feed",
    getCustomNewsFeed(PREFERRED_TOPIC)
  );

  if (!PREFERRED_TOPIC) {
    return (
      <HomeTemplate title="Custom News Feed" activeLink="Custom News Feed">
        <Error
          error="You'll need to set a preferred news feed category in your profile first"
          redirectName="To Profile"
          redirectRoute="/profile"
        />
      </HomeTemplate>
    );
  }

  return (
    <FeedTemplate
      isLoading={isLoading}
      isError={isError}
      error={error}
      data={data}
      homeTemplateTitle={`Custom News Feed - (${PREFERRED_TOPIC.charAt(
        0
      ).toUpperCase()}${PREFERRED_TOPIC.slice(1)})`}
      homeTemplateActiveLink="Custom News Feed"
      category="feed"
    />
  );
}
