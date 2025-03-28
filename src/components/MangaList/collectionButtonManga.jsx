"use client";

import { useState } from "react";

const CollectionButton = ({ manga_mal_id, user_email, manga_image, manga_title }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();
    const data = { manga_mal_id, user_email, manga_image, manga_title };

    const response = await fetch("/api/v1/collectionmanga", {
      method: "POST",
      body: JSON.stringify(data),
    });

    console.log(response);

    const collection = await response.json();

    if (collection.status == 200) {
      setIsCreated(collection.isCreated);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-white">Added To Collection Success</p>
      ) : (
        <button onClick={handleCollection} className="px-3 py-1 mt-2 bg-violet-700 rounded cursor-pointer transition-all duration-500 ease-in-out hover:scale-102 hover:border-violet-600 hover:shadow-lg hover:shadow-violet-600/50">
          Add To Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
