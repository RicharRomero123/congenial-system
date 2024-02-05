import { create } from "zustand";

interface ExchangeStore {
  wantsToExchange: boolean;
  setWantsToExchange: (value: boolean) => void;
}

export const useExchangeStore = create<ExchangeStore>((set, get) => ({
  wantsToExchange: false,
  setWantsToExchange: (value: boolean) => set({ wantsToExchange: value }),
}));
