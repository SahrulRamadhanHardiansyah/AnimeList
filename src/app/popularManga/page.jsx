"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/headerMenu";
import Header from "@/components/Dashboard/header";
import Pagination from "@/components/Utilities/pagination";
import ScrollToTopButton from "@/components/Utilities/scrollToTopButton";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const Popular = () => {
  const [page, setPage] = useState(1);
  const [topManga, setTopManga] = useState({ data: [], pagination: {} });

  const fetchData = async () => {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
    // const data = await response.json();
    const data = await getAnimeResponse("top/manga", `page=${page}`);

    setTopManga(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div className="p-8">
        <Header title={`Popular Manga #${page}`} />
      </div>
      {/* <HeaderMenu title={`Popular Manga #${page}`} /> */}
      <AnimeList api={topManga} />
      <Pagination page={page} lastPage={topManga.pagination?.last_visible_page} setPage={setPage} />
      <ScrollToTopButton />
    </>
  );
};

export default Popular;
