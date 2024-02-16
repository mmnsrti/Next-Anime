"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import { fetchAnime } from "../app/action";


export type AnimeCard = JSX.Element;

function LoadMore() {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(2)
  const [data, setData] = useState<AnimeCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 1000;
      const timeoutId = setTimeout(async () => {
        try {
          const res = await fetchAnime(page);
          setData([...data, ...res]);
          setPage(prevPage => prevPage + 1);
          setIsLoading(false);

        } catch (err) {
          console.error(err);
        }
      }, delay);

      // Clear the timeout if the component is unmounted or inView becomes false
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading,page]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default LoadMore;
