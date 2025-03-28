import Link from "next/link";
import InputSearch from "./inputSearch";
import UserActionButton from "./userActionButton";

const Navbar = () => {
  return (
    <header className="bg-violet-800">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 ml-3 mr-3 gap-2">
        <Link href="/" className="font-bold text-2xl">
          AnimeFlix
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
