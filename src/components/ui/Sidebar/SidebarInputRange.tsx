"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const SidebarInputRange = ({
  minPrice,
}: {
  minPrice: number | null;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [rangeValue, setRangeValue] = useState(minPrice || 1);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Solo sincronizar en el primer render
    if (isFirstRender.current) {
      console.log("Primer render");
      isFirstRender.current = false;
      return;
    }
    setRangeValue(minPrice || 1);
  }, [minPrice]);

  const handleRangeChange = (value: number) => {
    setRangeValue(value);
  };

  const updateUrl = useCallback(() => {
    console.log("Actualizando el url");
    const params = new URLSearchParams(searchParams.toString());
    if(params.has("page")) params.delete("page");
    params.set("minPrice", rangeValue.toString());
  
    router.push(`${pathname}?${params.toString()}`);
  }, [pathname, rangeValue, router, searchParams]);

  return (
    <div className="w-full flex flex-col pt-2">
      <InputRange
        value={rangeValue}
        setRangeValue={handleRangeChange}
        onUpdate={updateUrl} // Llamada cuando el usuario suelta la barra del rango
      />
      <div className="w-full justify-between mt-4">
        <div className="flex justify-between">
          <label className="text-xs lg:text-sm font-bold">Min</label>
          <label className="text-xs lg:text-sm font-bold">Max</label>
        </div>
        <div className="flex justify-between">
          <p className="text-xs lg:text-sm font-bold">S./1</p>
          <p className="text-xs lg:text-sm font-bold">S./3000</p>
        </div>
      </div>
    </div>
  );
};

const InputRange = ({
  value,
  setRangeValue,
  onUpdate,
}: {
  value: number | null;
  setRangeValue: (value: number) => void;
  onUpdate: () => void;
}) => {
  const sliderMin = 1;
  const sliderMax = 3000;
  const sliderWidth = 100;
  const labelPosition =
    (((value || 1) - sliderMin) / (sliderMax - sliderMin)) * sliderWidth;
  return (
    <div className="relative">
      <label
        htmlFor="minPrice"
        className="absolute -top-7 text-xs lg:text-sm font-bold"
        id="minPrice"
        style={{ left: `${labelPosition}%`, transform: 'translateX(-50%)' }}
      >
        {value ? `S./${value}` : "S./1"}
      </label>
      <input
        name="minPrice"
        type="range"
        min={1}
        value={value || 1}
        onChange={(e) => setRangeValue(Number(e.target.value))}
        onMouseUp={onUpdate} // Actualiza la URL cuando el usuario suelta la barra
        onTouchEnd={onUpdate} // Para dispositivos táctiles
        max={3000}
        className="w-full bg-slate-700 range range-sm range-primary"
      />
    </div>
  );
};
