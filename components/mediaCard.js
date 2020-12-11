import Link from "next/link";
import BrokenImage from "../assets/broken_image.png";

export default function mediaCard({
  image,
  title,
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
        alt="article image"
        className={`"block" ${single ? "h-96 w-max" : "h-48 w-full"}`}
        src={image ? image : BrokenImage}
      />
      <header
        className={`flex items-center mx-auto leading-tight p-2 h-32 ${
          single ? "lg:h-28" : "lg:h-36"
        }`}
      >
        <h1 className="text-lg font-bold mx-auto">
          {/* Article title */}
          <span className="text-black">{title ? title : "No Title Found"}</span>
        </h1>
      </header>
      <section className="px-4">
        {/* Article description */}
        <p className="text-base">
          {description ? description : "No Description Found"}
        </p>
      </section>
      <footer className="flex items-center justify-between leading-none p-2 md:p-4 h-14">
        <h4 className="flex items-center  text-black">
          {/* Article author */}
          <p className="ml-2 text-sm">{author ? author : "No Author Name"}</p>
        </h4>
        {/* conditional render only on single article views */}
        {single && (
          <Link href={url}>
            <a
              className="text-sm hover:underline text-purple-800"
              target="_blank"
            >
              Go to news source
            </a>
          </Link>
        )}
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
