import { Suspense } from "react";
import clsx from "clsx";
import { InfluencerContainer } from "@/components";
import { SidebarButton } from "@/components/ui/Sidebar/SidebarButton";
import { InfluencerLoading } from "@/components/influencers/influencer-loading";
import { getInfluencersData } from "@/lib/influencers/action";
import { cn } from "@/utils/cn";


export const metadata = {
  title: "Influencers",
  description: "Lista de los influencers de la plataforma",
};

export default async function InfluencersPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // const {interests, maxPrice, minPrice, page, region, socialMedia} = validateSearchParams(searchParams);

  const page =
    typeof searchParams["page"] === "string"
      ? searchParams["page"] && !isNaN(Number(searchParams["page"]))
        ? parseFloat(searchParams["page"])
        : 0
      : 0;
  const minPrice =
    typeof searchParams["minPrice"] === "string"
      ? Number(searchParams["minPrice"])
      : null;
  const platforms =
    typeof searchParams["socialMedia"] === "string"
      ? searchParams["socialMedia"]
      : undefined;
  const interests =
    typeof searchParams["interests"] === "string"
      ? searchParams["interests"]
      : undefined;

  const region =
    typeof searchParams["region"] === "string"
      ? searchParams["region"]
      : undefined;
  const isExchangable =
    typeof searchParams["isExchangable"] === "string"
      ? searchParams["isExchangable"] === "true"
      : undefined;

  const urlState = {
    page,
    minPrice,
    platforms,
    interests,
    region,
    isExchangable,
  };
  const getInfluencersPromise = getInfluencersData(
    page,
    platforms,
    interests,
    minPrice,
    region,
    isExchangable
  );

  return (
    <div
      className={cn(
        "mb-7",
        "bg-[radial-gradient(ellipse_90%_65%_at_right,_var(--tw-gradient-stops))] from-secondary/30 from-10% via-[#0f041a] via-60% to-black to-90%",
        "flex flex-row"
      )}
    >
      <div className="w-full lg:flex min-h-screen ">
        <SidebarButton urlState={urlState} />

        <section className="w-full flex flex-col justify-items-center">
          {/* <Sidebar /> */}
          <div className="flex justify-center lg:-mb-10">
            <h1
              className={clsx(
                "bg-gradient-to-tr from-primary to-secondary border-none bg-clip-text text-transparent",
                "mt-10 text-4xl md:text-5xl lg:text-6xl lg:mb-12 font-bold"
              )}
            >
              INFLUENCERS
            </h1>
          </div>
          <Suspense fallback={<InfluencerLoading />}>
            <InfluencerContainer
              getInfluencers={getInfluencersPromise}
              {...urlState}
            />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
