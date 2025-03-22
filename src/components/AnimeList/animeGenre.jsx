const AnimeGenres = ({ genres }) => {
  return (
    <div className="min-w-[140px] p-1 flex flex-col justify-center items-center rounded transition-all duration-500 border border-violet-600 hover:shadow-lg hover:shadow-violet-800/50 hover:scale-101 group">
      <h3 className="whitespace-nowrap">Genres</h3>
      <div className="flex flex-nowrap overflow-x-auto max-w-full scrollbar-hide justify-center group-hover:justify-start">
        {genres && genres.length > 0 ? (
          genres.map((genre) => (
            <span key={genre.mal_id} className="text-sm px-2 py-1 bg-violet-100 dark:bg-violet-900/30 rounded-full whitespace-nowrap mr-1 last:mr-0">
              {genre.name}
            </span>
          ))
        ) : (
          <p>No genres available</p>
        )}
      </div>
    </div>
  );
};

export default AnimeGenres;
