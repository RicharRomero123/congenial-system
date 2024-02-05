"use client";
import { useServiceStore } from "@/store/serviceStore";
import { useExchangeStore } from "@/store/exchangeStore";
import { cn } from "@/utils/cn";

export const PriceWithFees = ({ disabled }: { disabled: boolean }) => {
  const service = useServiceStore((state) => state.service);
  const wantsToExchange = useExchangeStore((state) => state.wantsToExchange);
  const setWantsToExchange = useExchangeStore(
    (state) => state.setWantsToExchange
  );
  return (
    <div className="md:w-full items-center">
      <h1 className="text-2xl hidden md:block md:mb-3 font-bold text-accent text-center bg-gradient-to-tl from-gray-300 to-accent bg-clip-text text-transparent">
        RESUMEN
      </h1>
      <h2
        className={cn("pt-1.5 text-slate-100 text-xl md:hidden", {
          "text-sm": service.exchange,
          "skeleton": service.id === 0,
        })}
      >
        Total:{" "}
        <span className="font-semibold">
          {service.totalPrice} {service.currency}
        </span>
      </h2>
      <div
        className={cn("hidden mx-10 bg-none p-3 rounded-xl  md:block", {
          "skeleton": service.id === 0,
        })}
      >
        <div className="flex justify-between">
          <span
            className={cn("text-sm md:text-lg text-white", {
              "text-transparent": service.id === 0,
            })}
          >
            Valor del Servicio
          </span>
          <span className="w-4"></span>
          <span
            className={cn("text-sm md:text-lg text-white", {
              "text-transparent": service.id === 0,
            })}
          >
            {service.totalPrice} {service.currency}
          </span>
        </div>
        <h3 className="mt-2 ml-5 text-slate-200 md:text-xl">
          1 {service.socialMedia}{" "}
          <span className="text-slate-200 font-bold">
            {service.serviceType}
          </span>
        </h3>
      </div>
      {service.exchange && (
        <div className="form-control my-2 md:mx-10 w-fit">
          <label className="label cursor-pointer pl-0">
            <input
              id="exchange"
              disabled={disabled}
              type="checkbox"
              onChange={() => setWantsToExchange(!wantsToExchange)}
              checked={wantsToExchange}
              className="checkbox checkbox-primary "
            />
            <span className="label-text md:text-xl ml-3">Pagar con Canje</span>
          </label>
        </div>
      )}
    </div>
  );
};
