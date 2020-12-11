export default function mediaCard() {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          {/* Article image */}
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5CVPI3RBOMI6XLKTJQP5USMQPU.jpg&w=1440"
          />
        </a>
        <header className="flex items-center leading-tight p-2">
          <h1 className="text-lg font-bold">
            {/* Article title */}
            <a className="no-underline hover:underline text-black" href="#">
              European stocks stumble on COVID-19 vaccine setback, while U.S.
              equity futures fall on stimulus worries - MarketWatch
            </a>
          </h1>
        </header>
        <section className="px-4">
          {/* Article description */}
          <p className="text-base">
            Patriots coach Bill Belichick said Cam Newton will remain the
            starting quarterback despite another shaky performance in Thursday
            night's 24-3 loss to the Rams.
          </p>
        </section>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-black"
            href="#"
          >
            {/* Article author */}
            <p className="ml-2 text-sm">Sareen Habeshian</p>
          </a>
          <a
            className="no-underline text-grey-darker hover:text-red-dark"
            href="#"
          >
            {/* Article date */}
            <p className="text-grey-darker text-sm">
              {new Date("2020-12-11T03:02:00Z").toDateString()}
            </p>
          </a>
        </footer>
      </article>
    </div>
  );
}
