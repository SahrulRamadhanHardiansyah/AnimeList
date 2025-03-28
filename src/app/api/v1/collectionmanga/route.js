import prisma from "@/libs/prisma";

export async function POST(request) {
  const { manga_mal_id, user_email, manga_image, manga_title } = await request.json();
  const data = { manga_mal_id, user_email, manga_image, manga_title };

  const createCollection = await prisma.collectionManga.create({ data });

  if (!createCollection) {
    return Response.json({ status: 500, isCreated: false });
  } else {
    return Response.json({ status: 200, isCreated: true });
  }
}
