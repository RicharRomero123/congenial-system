"use client";

import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const currentAvailableInterests = [
  { id: 5, name: "Belleza" },
  { id: 7, name: "Blog" },
  { id: 2, name: "Comida" },
  { id: 6, name: "Estilo de Vida" },
  { id: 1, name: "Moda" },
  { id: 8, name: "Recomendaciones" },
  { id: 4, name: "Tecnología" },
  { id: 3, name: "Viajes" },
];

export const SidebarInterests = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  // Estado local para manejar los intereses seleccionados
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // Actualiza el estado local cuando cambian los parámetros de búsqueda
  useEffect(() => {
    const interests = searchParams.get("interests")?.split(",") || [];
    setSelectedInterests(interests);
  }, [searchParams]);

  const handleInterestClick = useCallback(
    (id: string) => {
      // Actualiza primero el estado local
      const updatedInterests = selectedInterests.includes(id)
        ? selectedInterests.filter((interest) => interest !== id)
        : [...selectedInterests, id];
      setSelectedInterests(updatedInterests);

      // Luego actualiza la URL
      const params = new URLSearchParams(searchParams.toString());
      if(params.has("page")) params.delete("page");
      if (updatedInterests.length === 0) {
        params.delete("interests");
      } else {
        params.set("interests", updatedInterests.join(","));
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams, selectedInterests]
  );

  return (
    <section className="flex flex-col items-start space-y-4">
      <h2
        className={clsx(
          "text-2xl  font-bold",
          "bg-gradient-to-l from-gray-300 from-30% to-white bg-clip-text text-transparent"
        )}
      >
        Intereses
      </h2>
      <div className="space-y-3">
        {currentAvailableInterests.map(({ id, name }) => (
          <div key={id} className="flex items-center">
            <input
              className="checkbox border-slate-300"
              type="checkbox"
              value={id}
              checked={selectedInterests.includes(String(id)) || false}
              onChange={() => {
                handleInterestClick(String(id));
              }}
            />
            <span className="ml-2 text-white lg:text-sm text-xs">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
