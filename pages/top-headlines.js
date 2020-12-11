import { QueryCache, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Link from "next/link";
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
            {
              urlToImage,
              title,
              description,
              author,
              publishedAt,
              url,
              source: { name },
            },
            index
          ) => (
            <div
              className="uko_wapi my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              key={index}
            >
              {/* compose dynamic url made up of hyphen separated publication name and index in response array */}
              {/* eg /post/the-washington-post?pid=0 */}
              <Link
                href={{
                  pathname: `post/${name.toLowerCase().split(" ").join("-")}`,
                  query: { pid: index },
                }}
              >
                <a className="cursor-pointer">
                  <MediaCard
                    image={urlToImage}
                    title={title}
                    description={description}
                    author={author}
                    date={publishedAt}
                    url={url}
                  />
                </a>
              </Link>
            </div>
          )
        )}
      </div>
    </HomeTemplate>
  );
}
