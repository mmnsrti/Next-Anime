"use server"
export const fetchAnime = async(page:number) => {
    const response =await  fetch(`https://shikimori.one/api/animes?page=${page}&limit=12&order=popularity`)
    const data = await response.json()
     return data;

} 