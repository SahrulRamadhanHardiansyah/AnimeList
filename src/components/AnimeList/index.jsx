import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-12 pb-12">
      {api.data?.map((anime, index) => {
        return (
          <Link
            key={index}
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer block rounded-lg transition-all duration-500 border border-transparent hover:text-violet-600 hover:border-violet-800 hover:shadow-lg hover:shadow-violet-800/50 box-border flex flex-col h-full"
          >
            <div className="relative w-full aspect-[2/3]">
              <Image className="rounded-t-lg object-cover" src={anime.images.webp.image_url} alt={anime.title} layout="fill" objectFit="cover" />
            </div>
            <h3 className="font-bold md:text-xl text-md p-3 min-h-[56px]">{anime.title}</h3>
            {anime.score !== null && anime.score !== undefined && 
            <h3 className="font-bold md:text-md text-sm pl-3 pb-3">⭐{anime.score}</h3>}
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
