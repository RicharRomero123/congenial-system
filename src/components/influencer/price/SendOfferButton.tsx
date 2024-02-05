import Link from "next/link";
import { BiMailSend } from "react-icons/bi";

export const SendOfferButton = ({ serviceId }: { serviceId: number }) => {
  // Si el servicio se puede pagar con canje, el cliente lo decide

  return (
    <Link href={`/offers?serviceId=${serviceId}`} className="self-center md:mt-4">
      <button
        type="button"
        className=" w-full bg-secondary rounded-2xl px-4 py-1.5 hover:bg-secondary/60 transition duration-500 ease-in-out"
      >
        <div className="flex items-center font-bold ">
          <BiMailSend size={21} className=" text-white mr-2 mt-1" />
          <h1 className="text-white">Ir a pagar</h1>
        </div>
      </button>
    </Link>
  );
};
