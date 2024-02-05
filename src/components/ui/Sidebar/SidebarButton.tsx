import { FaSliders } from "react-icons/fa6";
import { Sidebar } from "../Sidebar/Sidebar";
import { SidebarInterests, SidebarPlatform, SidebarRangePrice } from ".";
import { SidebarRegion } from "./SidebarRegion";
import { SidebarInputRange } from "./SidebarInputRange";


export const SidebarButton = async ({
  urlState,
}: {
  urlState: {
    page: number;
    minPrice: number | null;
    platforms: string | undefined;
    interests: string | undefined;
    region: string | undefined;
    isExchangable: boolean | undefined;
  };
}) => {
  return (
    <div className="drawer z-10 lg:w-fit lg:ml-6">
      <input id="my-filter-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex justify-center md:justify-start md:ml-[2.5rem] lg:ml-8">
        {/* Page content here */}
        <div className="mb-8 w-[19rem] md:w-[20rem] ">
          <label
            htmlFor="my-filter-drawer"
            className="btn btn-outline rounded-lg drawer-button group hover:border-black lg:hidden"
          >
            <FaSliders
              size={18}
              className="text-white group-hover:text-black "
            />
            <h1 className="text-xl font-bold text-white group-hover:text-black">
              Filtrar
            </h1>
          </label>
          <div className="sticky pl-3 top-60 hidden lg:block">
            <Sidebar>
              <SidebarRegion urlRegion={urlState.region || ""} />
              <SidebarRangePrice>
                <SidebarInputRange minPrice={urlState.minPrice} />
              </SidebarRangePrice>
              <SidebarPlatform />
              <SidebarInterests />
            </Sidebar>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-filter-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-8 pt-20 w-[80%] md:w-[60%] min-h-full bg-base-200 text-base-content bg-gradient-to-l from-black via-slate-950 via-20%  to-black">
          {/* Sidebar content here */}
          <h1 className="text-xl font-bold text-white mb-6">
            Filtrar por:
          </h1>
          <Sidebar>
            <SidebarRegion urlRegion={urlState.region || ""} />
            <SidebarRangePrice>
              <SidebarInputRange minPrice={urlState.minPrice} />
            </SidebarRangePrice>
            <SidebarPlatform />
            <SidebarInterests />
          </Sidebar>
        </ul>
      </div>
    </div>
  );
};
