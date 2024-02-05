"use client";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useCallback } from "react";
import clsx from "clsx";
import { FaTiktok } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { TiktokIcon, InstagramIcon } from "@/components";

export const SidebarPlatform = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pathname = usePathname();

  const handlePlatformClick = useCallback(
    (id: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!params.get("socialMedia")) {
        params.set("socialMedia", id);
      } else {
        const platforms = params.get("socialMedia")?.split(",");
        if (platforms?.includes(id)) {
          // Si el id ya existe en el array, remuévelo
          const updatedPlatforms = platforms.filter((platform) => platform !== id);
          if(params.has("page")) params.delete("page");
          if (updatedPlatforms.length === 0) {
            // Si no quedan plataformas, elimina el parámetro 'socialMedia'
            params.delete("socialMedia");
          } else {
            // Actualiza la lista de plataformas en la URL
            params.set("socialMedia", updatedPlatforms.join(","));
          }
        } else {
          // Si el id no existe, agrégalo
          params.set("socialMedia", params.get("socialMedia") + "," + id);
        }
      }
  
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams]
  );
  

  return (
    <section className="flex flex-col items-start space-y-4">
      <h2
        className={clsx(
          "text-2xl  font-bold",
          "bg-gradient-to-l from-gray-300 from-10% to-white bg-clip-text text-transparent"
        )}
      >
        Plataformas
      </h2>
      <article className="space-y-3 flex flex-col w-full">
        {[
          {
            id: "1",
            name: "Instagram",
            icon: <BsInstagram />,
            selectedIcon: <InstagramIcon />,
          },
          {
            id: "2",
            name: "Tiktok",
            icon: <FaTiktok />,
            selectedIcon: <TiktokIcon />,
          },
        ].map((platform) => (
          <PlatformButton
            key={platform.id}
            id={platform.id}
            name={platform.name}
            searchParams={searchParams}
            icon={platform.icon}
            selectedIcon={platform.selectedIcon}
            handlePlatformClick={handlePlatformClick}
          />
        ))}
      </article>
    </section>
  );
};

type PlatformButtonProps = {
  id: string;
  name: string;
  searchParams: ReadonlyURLSearchParams;
  icon: React.ReactNode;
  selectedIcon: React.ReactNode;
  handlePlatformClick: (id: string) => void;
};

const PlatformButton = ({
  searchParams,
  icon,
  id,
  name,
  handlePlatformClick,
}: PlatformButtonProps) => {
  return (
    <button
      onClick={() => handlePlatformClick(id)}
      className={clsx(
        " p-4 lg:text-sm text-xs rounded-lg inline-flex items-center border border-gray-300",
        {
          "bg-gray-950 border-primary text-white font-bold":
            searchParams.get("socialMedia")?.includes(id),
        }
      )}
    >
      {icon}
      <p className="ml-2">{name}</p>
    </button>
  );
};
