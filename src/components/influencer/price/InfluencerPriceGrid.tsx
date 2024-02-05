"use client";
import { useState, useEffect } from "react";
import { useExchangeStore } from "@/store/exchangeStore";
import { PriceWithFees } from "./PriceWithFees";
import { SendOfferButton } from "./SendOfferButton";
import { useServiceStore } from "@/store/serviceStore";
import { cn } from "@/utils/cn";
export const InfluencerPriceGrid = () => {
  const [initialStateSet, setInitialStateSet] = useState(false);
  const setWantsToExchange = useExchangeStore(
    (state) => state.setWantsToExchange
  );
  const service = useServiceStore((state) => state.service);
  useEffect(() => {
    if (!initialStateSet) {
      console.log("InfluencerPriceGrid", false);
      setWantsToExchange(false);
      setInitialStateSet(true);
    }
    return () => {
      console.log("unmounting");
    };
  }, [initialStateSet, setWantsToExchange]);
  return (
    <div
      className={cn(
        "h-fit min-w-[330px] lg:min-w-[420px] bg-gradient-to-br from-gray-950 via-gray-900 to-black to-60% rounded-xl border border-white",
        "place-self-center sm:place-self-auto md:col-start-2 md:row-start-1",
        "sticky top-24 flex justify-around md:flex-col ",
        "py-4 my-4 sm:my-0 md:mt-4 sm:mx-auto"
      )}
    >
      <PriceWithFees disabled={false} />
      {initialStateSet ? (
        <SendOfferButton serviceId={service.id} />
      ) : (
        <div className="self-center">
          <button
            type="button"
            disabled
            className="w-full  bg-slate-400 rounded-2xl mt-2 px-4 py-1"
          >
            <div className="flex items-center font-bold ">
              <span className="loading loading-spinner loading-sm mr-2"></span>
              <h1 className="text-black">Cargando</h1>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
