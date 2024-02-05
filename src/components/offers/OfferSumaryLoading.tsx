
export const OfferSummaryLoading = () => {
  return (
    <div className="bg-red-100 hidden lg:flex w-full md:w-2/3 lg:w-1/2 justify-around items-center">
      <div className="bg-blue-200 relative items-center p-20  mt-6">
        <div className="w-full space-y-3">
          <h1 className="text-3xl text-center pb-4 font-bold">
            Resumen de la orden
          </h1>
          <h1></h1>
          <h1 className="text-xl font-bold "></h1>
          <h2 className="text-base ">Comisión Flupic: Cargando</h2>
          <h1 className="text-2xl font-bold">Precio Total: Cargando </h1>
        </div>
        <div className=" mt-10 bg-slate-300 rounded-md ">
          <span className="ml-2 text-base font-bold">
            Metodo de Pago: Cargando
          </span>
        </div>
      </div>
    </div>
  );
};
