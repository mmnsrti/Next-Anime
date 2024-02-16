  "use server";

  import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

  const MAX_LIMIT = 8;
  export async function fetchAnime(page: number) {
    const apiUrl = process.env.API_URL;

    const response = await fetch(
      `${apiUrl}?page=${page}&limit=${MAX_LIMIT}&order=popularity`
    );

    const data = await response.json();

    return data.map((anime: AnimeProp, index: number) => (
      <AnimeCard key={anime.id} anime={anime} index={index} />
    ));
  }