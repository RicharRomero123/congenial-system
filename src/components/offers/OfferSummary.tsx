"use client";
import { OfferService } from "@/interfaces/offers";
import { useExchangeStore } from "@/store/exchangeStore";
import './OfferSummary.css';
import { url } from "inspector";
import { FaPeopleCarry, FaCreditCard } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";

export const OfferSummary = ({ service }: { service: OfferService }) => {
  const wantsToExchange = useExchangeStore((state) => state.wantsToExchange);
  return (
    
        <div className="card">
          <h1 className="text-accent font-bold text-3xl mb-4">
            Solicitud
          </h1>
          <div className="photo" style={{ backgroundImage: `url('${service.influencer.profilePhotoUrl}')` }}>
            <span
              className="bg-primary"
            >{service.influencer.name} {service.influencer.lastname}</span>
          </div>
          

          <div className="details">
            <div className="info">
              <FaPeopleCarry/>
              <label>Servicio: </label>
              <p>1 {service.socialMedia} {service.serviceType}</p>
            </div>

            <div className="info">
              <FaCreditCard />
              <label>Precio Total: </label>
              <p>{service.totalPrice}</p>
            </div>

            <div className="info">
              <MdCurrencyExchange />
              <label>Canje: </label>
              <p>{wantsToExchange ? "Sí" : "No"}</p>
            </div>
          </div>

        </div>
  );
};
