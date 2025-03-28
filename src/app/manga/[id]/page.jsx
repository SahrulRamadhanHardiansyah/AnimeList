import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/videoPlayer";
import AnimeGenres from "@/components/AnimeList/animeGenre";
import Image from "next/image";
import CollectionButton from "@/components/MangaList/collectionButtonManga";
import StreamingPlayer from "@/components/Utilities/streamingPlayer";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInputManga from "../../../components/MangaList/commentInputManga";
import CommentBoxManga from "@/components/MangaList/commentBoxManga";
import HeaderPage from "@/components/Utilities/headerPage";

const Page = async ({ params: { id } }) => {
  const manga = await getAnimeResponse(`manga/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collectionManga.findFirst({
    where: { user_email: user?.email, manga_mal_id: id },
  });

  return (
    <>
      <div className="pt-8 px-8">
        <HeaderPage title={manga.data.title} year={manga.data.type} />
        {/* <h3 className="text-2xl font-bold">
          {manga.data.title} - {manga.data.type}
        </h3> */}
        {!collection && user && <CollectionButton manga_mal_id={id} user_email={user?.email} manga_image={manga.data.images.webp.image_url} manga_title={manga.data.title} />}
      </div>
      <div className="pt-4 px-8 flex sm:flex-nowrap flex-wrap gap-4">
        <Image src={manga.data.images.webp.image_url} alt={manga.data.images.jpg.image_url} width={350} height={350} className="w-full rounded object-cover" />
        <div>
          <h3 className="text-2xl font-bold underline">Synopsis</h3>
          <p className="text-justify">{manga.data.synopsis}</p>
        </div>
      </div>
      <div className="pt-6 px-8 flex sm:flex-nowrap flex-wrap gap-4">
        <div>
          <h3 className="text-2xl font-bold">Background</h3>
          <p className="text-justify">{manga.data.background}</p>
        </div>
      </div>
      <div className="pt-8 px-8 flex gap-4 overflow-x-auto flex-nowrap">
        <div className="min-w-[100px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Ranking</h3>
          <p>{manga.data.rank}</p>
        </div>
        <div className="min-w-[100px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Score</h3>
          <p>⭐{manga.data.score}</p>
        </div>
        <div className="min-w-[100px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Chapters</h3>
          <p>{manga.data.chapters}</p>
        </div>
        <div className="min-w-[100px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Volumes</h3>
          <p>{manga.data.volumes}</p>
        </div>
        <div className="min-w-[140px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Status</h3>
          <p>{manga.data.status}</p>
        </div>
        <div className="min-w-[90px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Type</h3>
          <p>{manga.data.type}</p>
        </div>
        <AnimeGenres genres={manga.data.genres} />
      </div>
      <div className="px-8 py-2 mt-6">
        <h3 className="text-2xl font-bold mb-6">Comment</h3>
        <CommentBoxManga manga_mal_id={id} />
        {user && <CommentInputManga manga_mal_id={id} user_email={user?.email} username={user?.name} manga_title={manga.data.title} />}
      </div>
    </>
  );
};

export default Page;
