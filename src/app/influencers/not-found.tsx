// import { InfluencerSearchRegion } from "@/components/ui/Sidebar/SidebarRegion";
import { Sidebar } from "@/components/ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-11 lg:px-36">
      <section className="mb-8 max-lg:px-6">
        <h1 className="text-2xl lg:text-4xl font-bold">
          ¡Descubre Influencers!
        </h1>
        <div className="lg:hidden mt-6 mb-3"></div>
        <div className="lg:hidden">
          <button className="rounded-lg inline-flex items-center text-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 w-fit">
            Filters
          </button>
        </div>
      </section>
      <section className="lg:flex lg:space-x-10">
        <Sidebar />
        <section className="min-h-screen w-full">
          {/* <InfluencerSearchRegion /> */}
          <hr className="mt-5 border-[0.5px] border-gray-200 mb-[25px]"></hr>
          <p>No se han encontrado influencers</p>
          <p>Prueba con otros filtros o regresa al inicio </p>
          <Link href="/influencers">Return Home</Link>
        </section>
      </section>
    </div>
  );
}
