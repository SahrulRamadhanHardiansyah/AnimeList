import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";
import Link from "next/link";

const Page = async () => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let RecommendationAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  RecommendationAnime = reproduce(RecommendationAnime, 20);

  return (
    <>
      <section>
        <Header title="Popular" linkTitle="See All" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommendation" />
        <AnimeList api={RecommendationAnime} />
      </section>
    </>
  );
};

export default Page;
