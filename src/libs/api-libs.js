import { data } from "autoprefixer";

export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  const anime = await response.json();
  return anime;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);

  console.log(`Response for ${resource}:`, response);

  if (!response?.data || response.data.length === 0) {
    console.error(`Data not found for resource: ${resource}`);
    return [];
  }

  console.log(`Extracting ${objectProperty} from response.data...`);
  return response.data.flatMap((item) => item[objectProperty] ?? []);
};

export const reproduce = (data, gap) => {
  if (!Array.isArray(data) || data.length === 0) {
    console.error("Reproduce received invalid or empty data");
    return { data: [] };
  }

  // Jika jumlah data lebih kecil dari gap, gunakan seluruh data
  if (data.length <= gap) {
    return { data };
  }

  const first = Math.floor(Math.random() * (data.length - gap));
  const last = first + gap;

  return { data: data.slice(first, last) };
};

// export const reproduce = (data, gap) => {
//   const first = ~~(Math.random() * (data.length - gap) + 1);
//   const last = first + gap;

//   const response = {
//     data: data.slice(first, last),
//   };

//   return response;
// };
