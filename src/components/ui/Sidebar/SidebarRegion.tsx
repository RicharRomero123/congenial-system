"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useDebounce } from "use-debounce";
import { MdPlace } from "react-icons/md";
import clsx from "clsx";

const regiones = [
  "Lima",
  "Junin",
  "Amazonas",
  "Loreto",
  "Trujillo",
  "Cajamarca",
  "Piura",
  "Tumbes",
  "Lambayeque",
  "Ancash",
  "San Martin",
  "Ucayali",
  "Pasco",
  "Huancavelica",
  "Ayacucho",
  "Apurimac",
  "Cuzco",
  "Puno",
  "Madre de Dios",
  "Tacna",
  "Moquegua",
  "Arequipa",
  "Ica",
  "Huanuco",
  "Callao",
];

export const SidebarRegion = ({ urlRegion }: { urlRegion: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [region, setRegion] = useState(urlRegion);
  const [isOpen, setIsOpen] = useState(false);

  const [query] = useDebounce(region, 500);
  const initialRender = useRef(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredRegions = useMemo(() => {
    console.log("filtrando");
    return regiones
      .filter((region) => region.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);
  }, [query]);

  useEffect(() => {
    // Solo sincronizar en el primer render
    if (initialRender.current) {
      console.log("Primer render");
      initialRender.current = false;
      return;
    }
    setRegion(urlRegion || "");
  }, [urlRegion]);

  useEffect(() => {
    if (!query) setIsOpen(false);
    else setIsOpen(true);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event?.target as Node)
      ) {
        setIsOpen(false); // Cerrar la lista si se hace clic fuera del componente
      }
    }

    // Agregar el evento al documento
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Limpiar el evento al desmontar
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleRegionSelect = useCallback(
    (region: string) => {
      console.log("Seleccionando region", region);
      setRegion(region);
      setIsOpen(false);
      const params = new URLSearchParams(searchParams);

      if(params.has("page")) params.delete("page");
      params.set("region", region);
      router.push(`/influencers?${params.toString()}`);
    },
    [router, searchParams]
  );

  const changeRegion = (newRegion: string) => {
    if (newRegion === "") {
      setRegion("");
      const params = new URLSearchParams(searchParams);
      params.delete("region");
      router.push(`/influencers?${params.toString()}`);
    } else {
      setRegion(newRegion);
    }
  };

  return (
    <section
      className="w-full relative flex flex-col justify-end mb-5  "
      ref={wrapperRef}
    >
      <h2
        className={clsx(
          "text-2xl  font-bold mb-3",
          "bg-gradient-to-l from-gray-300 from-30% to-white bg-clip-text text-transparent"
        )}
      >
        Región
      </h2>
      <div className=" h-fit  rounded-lg flex items-center">
        <MdPlace className="text-3xl ml-1 text-slate-300" />
        <input
          type="search"
          placeholder="Región"
          value={region}
          onChange={(e) => {
            changeRegion(e.target.value);
          }}
          className="input input-bordered w-full ml-2  text-base font-semibold focus:border-gray-300"
        />
      </div>
      {isOpen && (
        <SidebarRegionnListItems
          filteredRegions={filteredRegions}
          handleRegionSelect={handleRegionSelect}
        />
      )}
    </section>
  );
};

const SidebarRegionnListItems = ({
  filteredRegions,
  handleRegionSelect,
}: {
  filteredRegions: string[];
  handleRegionSelect: (region: string) => void;
}) => {
  return (
    <div className="absolute w-full bg-gray-900  mr-6 mt-8 py-2 rounded-xl border  shadow-md top-16 z-50">
      {filteredRegions.length > 0 ? (
        filteredRegions.map((region, index) => (
          <div
            key={index}
            onClick={() => handleRegionSelect(region)}
            className=" py-3 cursor-pointer hover:bg-gray-500 flex items-center space-x-2"
          >
            <MdPlace className="text-2xl text-slate-300 ml-1 mr-4" />
            {region}
          </div>
        ))
      ) : (
        <div className="py-3 cursor-pointer hover:bg-gray-500 flex items-center space-x-2">
          <MdPlace className="text-2xl text-gray-600 ml-1 mr-4" />
          No hay resultados
        </div>
      )}
    </div>
  );
};
