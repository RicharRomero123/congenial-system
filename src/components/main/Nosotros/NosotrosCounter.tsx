"use client";
import CountUp from "react-countup";

export const NosotrosCounter = ({
  label,
  amount,
}: {
  label: string;
  amount: number;
}) => {
  return (
    <div
      key={label}
      className=" w-64 md:w-40 lg:w-64 flex flex-col items-center justify-center py-3 gap-1"
    >
      <CountUp
        className="text-6xl md:text-5xl font-bold text-white"
        end={amount}
        duration={3}
        delay={0.5}
        enableScrollSpy={true}
        scrollSpyOnce={true}
      />

      <p className="text-3xl text-white">{label}</p>
    </div>
  );
};
