import { create } from "zustand";

// Definimos la interfaz del store
interface RangeStore {
  rangeValue: number | string;
  setRangeValue: (value: number | string) => void;
}

const useRangeStore = create<RangeStore>((set) => ({
  rangeValue: 1, // Valor inicial
  setRangeValue: (newValue: string | number) => set({ rangeValue: newValue }),
}));

export default useRangeStore;
