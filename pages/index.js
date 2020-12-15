import { useEffect } from "react";
import { useRouter } from "next/router";
import HomeTemplate from "../components/homeTemplate";
import Loading from "../components/loading";

export default function home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/top-headlines");
  });

  return (
    <HomeTemplate title="Top Headlines" activeLink="Top Headlines">
      <Loading />
    </HomeTemplate>
  );
}
