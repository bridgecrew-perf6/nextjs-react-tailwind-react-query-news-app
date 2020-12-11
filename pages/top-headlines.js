import HomeTemplate from "../components/homeTemplate";
import MediaCard from "../components/mediaCard";

export default function topHeadlines() {
  return (
    <HomeTemplate title="Top Headlines" activeLink="Top Headlines">
      <div className="flex flex-wrap">
        {/* return columns of articles */}
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <MediaCard key={index} />
        ))}
      </div>
    </HomeTemplate>
  );
}
