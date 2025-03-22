"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const inputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current?.value.trim();
    if (!keyword) return;
    router.push(`/search/${keyword}`);
  };

  return (
    <form className="relative" onSubmit={handleSearch}>
      <input type="text" placeholder="Search" className="w-full p-2 rounded" ref={searchRef} />
      <button type="submit" className="absolute top-2 end-2">
        <MagnifyingGlass size={24} />
      </button>
    </form>
  );
};

export default inputSearch;
