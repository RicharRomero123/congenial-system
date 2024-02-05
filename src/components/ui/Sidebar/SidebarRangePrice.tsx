import clsx from "clsx";

export const SidebarRangePrice = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="flex flex-col items-start space-y-4">
      <h2
        className={clsx(
          "text-2xl font-bold mb-3",
          "bg-gradient-to-l from-gray-300 from-30% to-white bg-clip-text text-transparent"
        )}
      >
        Rango de Precios
      </h2>
      <div className="w-full flex items-center justify-evenly text-xs lg:text-sm font-bold  ">
        {children}
      </div>
    </section>
  );
};
