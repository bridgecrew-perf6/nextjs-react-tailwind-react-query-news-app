import { QueryCache, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import HomeTemplate from "../components/homeTemplate";
import MediaCard from "../components/mediaCard";
import { getTopHeadlines } from "../api/fetchNews";
import Loading from "../components/loading";
import Error from "../components/error";

// pre-fetch when SSR and rehydrate when served
export async function getServerSideProps() {
  const queryCache = new QueryCache();
  await queryCache.prefetchQuery("top_headlines", getTopHeadlines);
  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
  };
}

export default function topHeadlines() {
  // fetch top headlines
  const { isLoading, isError, data } = useQuery(
    "top_headlines",
    getTopHeadlines
  );

  if (isLoading) {
    return (
      <HomeTemplate title="Top Headlines" activeLink="Top Headlines">
        <Loading />
      </HomeTemplate>
    );
  }

  if (isError || data.status === "error") {
    return (
      <HomeTemplate title="Top Headlines" activeLink="Top Headlines">
        <Error />
      </HomeTemplate>
    );
  }

  return (
    <HomeTemplate title="Top Headlines" activeLink="Top Headlines">
      <div className="flex flex-wrap">
        {/* return columns of articles */}
        {data.articles.map(
          (
            { urlToImage, title, description, author, publishedAt, content },
            index
          ) => (
            <MediaCard
              key={index}
              image={urlToImage}
              title={title}
              description={description}
              author={author}
              date={publishedAt}
              content={content}
            />
          )
        )}
      </div>
    </HomeTemplate>
  );
}
