import Link from "next/link";
import BrokenImage from "../assets/broken_image.png";

export default function mediaCard({
  image,
  title,
  content,
  description,
  author,
  date,
  url,
  single = false, // track if being used to render individual card
}) {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg">
      {/* Article image */}
      <img
        alt="article cover image"
        className={`flex w-full ${single ? "h-96" : "h-48"}`}
        src={image ? image : BrokenImage}
      />
      <header
        className={`flex items-center mx-auto leading-tight p-2 h-32 ${
          single ? "lg:h-24" : "lg:h-32"
        }`}
      >
        <h1 className="text-lg font-bold mx-auto">
          {/* Article title */}
          <span className="text-black">{title ? title : "No Title Found"}</span>
        </h1>
      </header>
      <section className="px-4">
        {/* Article content */}
        <p className="text-base">
          {content
            ? // split the content string between preview and number of remaining characters strings)
              // discard last part and append a 'read more' url linking to original article
              `${content.split("…").shift().toString()}… `
            : description
            ? `${description}… `
            : "Content preview not provided… "}
          {/* Read More Link */}
          <Link href={url}>
            {/* the 'nested_link' class is for click bubbling */}
            <a
              className="text-sm hover:underline text-purple-800 nested_link"
              target="_blank"
            >
              See More
            </a>
          </Link>
        </p>
      </section>
      <footer className="flex items-center justify-between leading-none p-2 md:p-4 h-14">
        <h4 className="flex items-center  text-black">
          {/* Article author */}
          <p className="ml-2 text-sm">{author ? author : "No Author Name"}</p>
        </h4>
        <h4 className=" text-grey-darker hover:text-red-dark">
          {/* Article date */}
          <p className="text-grey-darker text-sm">
            {date ? new Date(date).toDateString() : "No Date Given"}
          </p>
        </h4>
      </footer>
    </article>
  );
}
