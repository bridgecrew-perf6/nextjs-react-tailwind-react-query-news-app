import Link from "next/link";
import BrokenImage from "../assets/broken_image.png";

export default function mediaCard({
  image,
  title,
  description,
  author,
  date,
  content,
}) {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 cursor-pointer">
      <Link href="/">
        <article className="overflow-hidden rounded-lg shadow-lg">
          {/* Article image */}
          <img
            alt="article image"
            className="block h-48 w-full"
            src={image ? image : BrokenImage}
          />
          <header className="flex items-center leading-tight p-2 h-32 lg:h-36">
            <h1 className="text-lg font-bold">
              {/* Article title */}
              <span className=" text-black">
                {title ? title : "No Title Found"}
              </span>
            </h1>
          </header>
          <section className="px-4 h-28 lg:h-32">
            {/* Article description */}
            <p className="text-base">
              {description ? description : "No Description Found"}
            </p>
          </section>
          <footer className="flex items-center justify-between leading-none p-2 md:p-4 h-14">
            <h4 className="flex items-center  text-black">
              {/* Article author */}
              <p className="ml-2 text-sm">
                {author ? author : "No Author Name"}
              </p>
            </h4>
            <h4 className=" text-grey-darker hover:text-red-dark">
              {/* Article date */}
              <p className="text-grey-darker text-sm">
                {date ? new Date(date).toDateString() : "No Date Given"}
              </p>
            </h4>
          </footer>
        </article>
      </Link>
    </div>
  );
}
