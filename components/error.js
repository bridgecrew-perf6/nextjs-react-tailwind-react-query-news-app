import { useRouter } from "next/router";

export default function loading() {
  const router = useRouter();
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-full h-full">
        <p className="text-4xl text-purple-800 italic mx-auto">
          Something fishy happened
        </p>
        <button
          type="button"
          className="mx-auto rounded-md bg-purple-800 text-white h-12 w-28 mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-400 focus:ring-white"
          onClick={() => router.push("/top-headlines")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
