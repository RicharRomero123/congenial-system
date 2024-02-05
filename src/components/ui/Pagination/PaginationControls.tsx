"use client";

import { FC, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Links } from "@/interfaces/influencers";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  currentPage: number;
  links: Links;
}

export const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // console.log(hasPrevPage, hasNextPage);
  const createQueryString = useCallback(
    (name: string, value: number) => {
      const params = new URLSearchParams(searchParams);

      if (params.has("page")) {
        let pageValue = Number(params.get("page"));

        if (pageValue === 0) {
          // Si la página inicial es 0, establecemos la página en 1 directamente
          params.set(name, "1");
        } else {
          pageValue += value;
          params.set(name, String(pageValue));
        }
      } else {
        // Si no existe un parámetro "page", lo establecemos en 1 si es un clic hacia adelante
        // o en 0 si es un clic hacia atrás
        if (value > 0) {
          params.set(name, "1");
        } else {
          params.set(name, "0");
        }
      }
      console.log("Cambiando de página");
      return params.toString();
    },
    [searchParams]
  );

  return (
    <section className="w-full mt-8 flex items-center justify-center gap-8 ">
      <button
        onClick={() => {
          router.push(pathname + "?" + createQueryString("page", -1));
        }}
        disabled={!hasPrevPage}
        type="button"
        className={`w-13 h-13 p-3 inline-flex items-center rounded-full bg-transparent font-bold text-white ${!hasPrevPage ? "hidden" : ""
          }`}
      >
        <IoIosArrowBack size={30}/>
      </button>
      <button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(pathname + "?" + createQueryString("page", 1));
        }}
        type="button"
        className={`w-13 h-13 p-3 inline-flex items-center rounded-full  bg-transparent font-bold text-white ${!hasNextPage ? "hidden" : ""
          }`}
      >
        <IoIosArrowForward size={30}/>
      </button>
    </section>
  );
};
