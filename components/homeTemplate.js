import Nav from "./nav";
import { useRouter } from "next/router";

export default function homeTemplate({
  children,
  title,
  activeLink,
  backButton = false,
}) {
  const router = useRouter();
  return (
    <div>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
    </div>
  );
}
