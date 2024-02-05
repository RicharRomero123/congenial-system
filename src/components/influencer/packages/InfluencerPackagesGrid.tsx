"use client";
import { useServiceStore } from "@/store/serviceStore";
import { useEffect, useState } from "react";
export const InfluencerPackagesGrid = ({
  children,
  firstService,
}: {
  children: React.ReactNode;
  firstService: any;
}) => {
  const setService = useServiceStore((state) => state.setService);
  const [initialStateSet, setInitialStateSet] = useState(false);

  useEffect(() => {
    if (!initialStateSet) {
      console.log(firstService);
      setService(firstService);
      setInitialStateSet(true);
    }
    return () => {
      console.log("unmounting");
    };
  }, [setService, firstService, initialStateSet]);
  return (
    <section className="flex flex-col mt-5">
      <h2 className="mb-3 text-3xl bg-gradient-to-tl from-gray-300 to-accent bg-clip-text text-transparent font-bold">
        PAQUETES
      </h2>
      <article className="w-full flex flex-col items-center">{children}</article>
    </section>
  );
};
