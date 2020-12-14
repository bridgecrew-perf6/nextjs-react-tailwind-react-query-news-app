import { useRouter } from "next/router";

export default function loading({
  error,
  redirectName = "Home",
  redirectRoute = "/top-headlines",
}) {
  const router = useRouter();
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-full h-full">
        <h3 className="text-4xl text-purple-800 italic mx-auto">
          The following error ocurred
        </h3>
        <p className="mx-auto mt-5 text-base">{error}</p>
        <button
          type="button"
          className="mx-auto rounded-md bg-purple-800 text-white h-12 w-28 mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-400 focus:ring-white"
          onClick={() => router.push(redirectRoute)}
        >
          Go {`${redirectName}`}
        </button>
      </div>
    </div>
  );
}
