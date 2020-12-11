import { useRouter } from "next/router";
import { QueryCache, useQuery } from "react-query";
import { getTopHeadlines } from "../../api/fetchNews";
import HomeTemplate from "../../components/homeTemplate";
import Loading from "../../components/loading";
import Error from "../../components/error";
import MediaCard from "../../components/mediaCard";

const Post = () => {
  const router = useRouter();
  // get the post index from query params
  const { pid } = router.query;

  // fetch top headlines
  // already fetched upstream so will be re-fetched from cache
  const { isLoading, isError, data } = useQuery(
    "top_headlines",
    getTopHeadlines
  );

  if (isLoading) {
    return (
      <HomeTemplate title="Single Post" activeLink="Single Post">
        <Loading />
      </HomeTemplate>
    );
  }

  if (isError || data.status === "error" || !data.articles[pid]) {
    return (
      <HomeTemplate title="Single Post" activeLink="Single Post">
        <Error />
      </HomeTemplate>
    );
  }

  // de-structure from array at index 'pid'
  // instead of description use content
  let { urlToImage, title, content, author, publishedAt, url } = data.articles[
    pid
  ];

  return (
    <HomeTemplate title="Single Post" activeLink="Single Post">
      <MediaCard
        image={urlToImage}
        title={title}
        description={content}
        author={author}
        date={publishedAt}
        url={url}
        single={true}
      />
    </HomeTemplate>
  );
};

export default Post;
