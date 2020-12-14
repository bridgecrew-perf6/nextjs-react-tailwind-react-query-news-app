import Nav from "./nav";
import { useRouter } from "next/router";
import Link from "next/link";

export default function homeTemplate({
  children,
  title,
  activeLink,
  backButton = false,
}) {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      <Nav activeLink={activeLink} />
      <header className="bg-white shadow">
        <div className="flex flex-row flex-nowrap space-x-2 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {backButton && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-10 w-10 text-red-600 cursor-pointer transform hover:scale-125"
              onClick={() => router.back()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          )}

          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Content goes here --> */}
          <div className="container mx-auto px-4 md:px-12">{children}</div>
          {/* <!-- /End Content --> */}
        </div>
      </main>
      <footer className="flex items-center justify-between leading-none p-2 md:p-4 h-14 mt-auto">
        <p className="text-grey-darker text-lg mx-auto">
          &copy;{new Date().getFullYear()}&nbsp;
          <Link href="http://www.muguku.co.ke/">
            <a className="hover:underline text-purple-800" target="_blank">
              Macharia Muguku.{" "}
            </a>
          </Link>
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}
