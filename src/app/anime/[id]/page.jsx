import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/videoPlayer";
import AnimeGenres from "@/components/AnimeList/animeGenre";
import Image from "next/image";
import StreamingPlayer from "@/components/Utilities/streamingPlayer";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="pt-8 px-8">
        <h3 className="text-2xl font-bold">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-8 px-8 flex sm:flex-nowrap flex-wrap gap-4">
        <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={350} height={350} className="w-full rounded object-cover" />
        <div>
          <h3 className="text-2xl font-bold underline">Synopsis</h3>
          <p className="text-justify">{anime.data.synopsis}</p>
        </div>
      </div>
      <div className="pt-8 px-8 flex gap-4 overflow-x-auto flex-nowrap">
        <div className="min-w-[100px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Ranking</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="min-w-[100px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Score</h3>
          <p>⭐{anime.data.score}</p>
        </div>
        <div className="min-w-[150px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Rating</h3>
          <p>{anime.data.rating}</p>
        </div>
        <div className="min-w-[100px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="min-w-[100px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Season</h3>
          <p>{anime.data.season}</p>
        </div>
        <div className="min-w-[130px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Duration</h3>
          <p>{anime.data.duration}</p>
        </div>
        <div className="min-w-[140px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Status</h3>
          <p>{anime.data.status}</p>
        </div>
        <div className="min-w-[90px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101">
          <h3 className="whitespace-nowrap">Type</h3>
          <p>{anime.data.type}</p>
        </div>
        <AnimeGenres genres={anime.data.genres} />
      </div>
      <div className="pt-12 px-8 mb-14">
        <h3 className="text-2xl font-bold mb-6">Trailer</h3>
        <VideoPlayer videoId={anime.data.trailer.youtube_id} />
      </div>
      {/* <div className="pt-12 px-8 mb-14">
      <h3 className="text-2xl font-bold mb-6">Streaming Anime</h3>
        <StreamingPlayer/>
      </div> */}
    </>
  );
};

export default Page;
