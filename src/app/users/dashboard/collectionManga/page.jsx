import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Dashboard/header";
import ScrollToTopButton from "@/components/Utilities/scrollToTopButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collectionManga.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Manga Collection"} />
      <div className="grid gap-2 mt-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.manga_mal_id}`}
              className="cursor-pointer block rounded-md transition-all duration-300 border border-transparent hover:text-violet-600 hover:border-violet-800 hover:shadow-md hover:shadow-violet-800/40 box-border flex flex-col h-full"
            >
              <div className="relative w-full aspect-[2/3]">
                <Image className="rounded-t-md object-cover" src={collect.manga_image} alt={collect.manga_title} layout="fill" objectFit="cover" />
              </div>
              <h3 className="font-semibold text-sm p-2 min-h-[40px]">{collect.manga_title}</h3>
            </Link>
          );
        })}
      </div>

      <ScrollToTopButton />
    </section>
  );
};

export default Page;
