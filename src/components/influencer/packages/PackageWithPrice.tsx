"use client";
import { useServiceStore } from "@/store/serviceStore";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { cn } from "@/utils/cn";

type PackageWithPriceProps = {
  socialMedia: string;
  price: number;
  type: string;
  serviceId: number;
};
export const PackageWithPrice = ({
  socialMedia,
  price,
  type,
  serviceId,
}: PackageWithPriceProps) => {
  const service = useServiceStore((state) => state.service);
  const setService = useServiceStore((state) => state.setService);
  const selectPackage = () => {
    setService({
      ...service,
      id: serviceId,
      totalPrice: price,
      socialMedia: socialMedia,
    });
  };
  return (
    <button
      type="button"
      onClick={selectPackage}
      className={cn(
        "w-full min-h-[108px] my-4 flex items-center justify-around space-y-3 rounded-3xl  p-6",

        serviceId === service.id
          ? "border-[3px] border-whtie"
          : "border-2 border-gray-600"
      )}
    >
      <div className="flex flex-row space-x-3">
        {socialMedia === "Instagram" ? (
          <FaInstagram size={64} />
        ) : (
          <FaTiktok size={64} />
        )}
      </div>
      <div className="flex flex-col">
        <h3 className="text-base text-start">Incluye</h3>
        <h3 className=" text-white text-start lg:text-lg">
          {`1 ${socialMedia}  `} <span className="font-bold">{type}</span>
        </h3>
        <div className="flex items-baseline space-x-1">
          <h3 className="text-primary font-bold text-xl lg:text-2xl">{price}</h3>
          <p className=" text-sm lg:text-base text-white">PEN</p>
        </div>
      </div>
    </button>
  );
};
