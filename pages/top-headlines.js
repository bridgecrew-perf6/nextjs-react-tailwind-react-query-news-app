import { useQuery } from "react-query";
import FeedTemplate from "../components/feedTemplate";
import { getTopHeadlines } from "../api/fetchNews";

export default function topHeadlines() {
  // fetch top headlines
  const { isLoading, isError, data } = useQuery(
    "top_headlines",
    getTopHeadlines
  );

  return (
    <FeedTemplate
      isLoading={isLoading}
      isError={isError}
      data={data}
      homeTemplateTitle="Top Headlines"
      category="headlines"
    />
  );
}
