import Image from "next/image";
import Link from "next/link";

const MangaList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-12 pb-12">
      {api.data?.map((manga, index) => {
        return (
          <Link
            key={index}
            href={`/manga/${manga.mal_id}`}
            className="cursor-pointer block rounded-lg transition-all duration-500 border border-transparent hover:text-violet-600 hover:border-violet-800 hover:shadow-lg hover:shadow-violet-800/50 box-border flex flex-col h-full"
          >
            <div className="relative w-full aspect-[2/3]">
              <Image className="rounded-t-lg object-cover" src={manga.images.webp.image_url} alt={manga.title} layout="fill" objectFit="cover" />
            </div>
            <h3 className="font-bold md:text-xl text-md p-3 min-h-[56px]">{manga.title}</h3>
            {manga.score !== null && manga.score !== undefined && 
            <h3 className="font-bold md:text-md text-sm pl-3 pb-3">⭐{manga.score}</h3>}
          </Link>
        );
      })}
    </div>
  );
};

export default MangaList;
