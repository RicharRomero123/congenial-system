import { InfluencerCard } from "./influencer-card/influencer-card";
import { InfluencersNotFound } from "./influencers-notfound";
import { PaginationControls } from "../ui";
import { Influencer, Links, Page } from "@/interfaces/influencers";


type InfluencerResponse = {
  influencers?: Influencer[];
  pageInfo: Page;
  links: Links;
};

type InfluencerContainerProps = {
  getInfluencers: Promise<{
    influencers: Influencer[];
    pageInfo: Page;
    links: Links;
  }>;
};

export const InfluencerContainer = async ({
  getInfluencers,
}: InfluencerContainerProps) => {
  const { influencers, pageInfo, links }: InfluencerResponse = await getInfluencers;
  // console.table(pageInfo);
  if (influencers?.length === 0) {
    console.log("Lista de Influencers Vacía");
    return <InfluencersNotFound notInfluencers />;
  }

  return (
    <section className="w-full flex flex-col ">
      <PaginationControls
        currentPage={pageInfo?.number}
        links={links}
        hasNextPage={Object.hasOwn(links, "next")}
        hasPrevPage={Object.hasOwn(links, "prev")}
      />
      <div className=" w-full flex flex-wrap justify-center gap-10 mt-7">
        {influencers?.map((influencer) => (
          <InfluencerCard key={influencer.uuid} influencer={influencer} />
        ))}
      </div>
      <PaginationControls
        currentPage={pageInfo?.number}
        links={links}
        hasNextPage={Object.hasOwn(links, "next")}
        hasPrevPage={Object.hasOwn(links, "prev")}
      />
    </section>
  );
};
