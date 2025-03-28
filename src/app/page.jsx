import AnimeList from "@/components/AnimeList";
import MangaList from "@/components/MangaList";
import Header from "@/components/AnimeList/header";
import ScrollToTopButton from "@/components/Utilities/scrollToTopButton";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";
import Link from "next/link";

const Page = async () => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  const topManga = await getAnimeResponse("top/manga", "limit=10");

  let RecommendationAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  RecommendationAnime = reproduce(RecommendationAnime, 20);
  let RecommendationManga = await getNestedAnimeResponse("recommendations/manga", "entry");
  RecommendationManga = reproduce(RecommendationManga, 20);

  return (
    <>
      <section>
        <Header title="Popular Anime" linkTitle="See All" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommendation Anime" />
        <AnimeList api={RecommendationAnime} />
      </section>
      <section>
        <Header title="Popular Manga" linkTitle="See All" linkHref="/popularManga" />
        <MangaList api={topManga} />
      </section>
      <section>
        <Header title="Recommendation Manga" />
        <MangaList api={RecommendationManga} />
      </section>

      <ScrollToTopButton />
    </>
  );
};

export default Page;
