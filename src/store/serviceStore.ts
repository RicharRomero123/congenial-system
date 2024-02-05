import { create } from "zustand";

interface Service {
  id: number;
  price: number;
  totalPrice: number;
  currency: string;
  serviceType: string;
  exchange: boolean;
  socialMedia: string;
}

interface ServiceStore {
  service: Service;
  setService: (service: Service) => void;
}

export const useServiceStore = create<ServiceStore>((set, get) => ({
  service: {
    id: 0,
    price: 0,
    totalPrice: 0,
    currency: "",
    serviceType: "",
    socialMedia: "",
    exchange: false,
  },
  setService: (service: Service) => set({ service }),
}));
