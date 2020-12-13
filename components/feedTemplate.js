import { useRouter } from "next/router";
import HomeTemplate from "./homeTemplate";
import MediaCard from "./mediaCard";
import Loading from "./loading";
import Error from "./error";

export default function feedComponent({
  isLoading,
  isError,
  data,
  homeTemplateTitle,
  category,
}) {
  const router = useRouter();

  if (isLoading) {
    return (
      <HomeTemplate title={homeTemplateTitle} activeLink={homeTemplateTitle}>
        <Loading />
      </HomeTemplate>
    );
  }

  if (isError || data.status === "error") {
    return (
      <HomeTemplate title={homeTemplateTitle} activeLink={homeTemplateTitle}>
        <Error />
      </HomeTemplate>
    );
  }

  return (
    <HomeTemplate title={homeTemplateTitle} activeLink={homeTemplateTitle}>
      <div className="flex flex-wrap">
        {/* return columns of articles */}
        {data.articles.map(
          (
            {
              urlToImage,
              title,
              content,
              description,
              author,
              publishedAt,
              url,
              source: { name },
            },
            index
          ) => (
            <div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              key={index}
            >
              <span
                className="cursor-pointer"
                onClick={(e) => {
                  // if click is not on nested 'read more' link
                  // don't open single view if click is on read more
                  if (!e.target.classList.contains("nested_link")) {
                    router.push({
                      // compose dynamic url made up of hyphen separated publication name, index of article in response array, and article category
                      // eg /custom-news-feed/cnn?pid=0&category=feed
                      // or /top-headlines/cnn?pid=0&category=headlines
                      pathname: `${
                        category === "feed"
                          ? "custom-news-feed"
                          : "top-headlines"
                      }/${name.toLowerCase().split(" ").join("-")}`,
                      query: { pid: index, category: category },
                    });
                  }
                }}
              >
                <MediaCard
                  image={urlToImage}
                  title={title}
                  content={content}
                  description={description}
                  author={author}
                  date={publishedAt}
                  url={url}
                />
              </span>
            </div>
          )
        )}
      </div>
    </HomeTemplate>
  );
}
