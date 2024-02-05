// import { Suspense } from "react";
// import { SidebarPlatform } from "./SidebarPlatform";
// import { SidebarInterests } from "./SidebarInterests";
// import { SidebarRangePrice } from "./SidebarRangePrice";
// import { FaSliders } from "react-icons/fa6";
// import { SidebarRegion } from "./SidebarRegion";

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside>
      <div className="flex flex-col justify-center">
        <section
          id="default-sidebar"
          className="lg:w-64 lg:pb-24"
          aria-label="sidebar"
        >
          <div className="space-y-6">
            {children}
          </div>
        </section>
      </div>
    </aside>
  );
};
