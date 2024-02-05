import Image from "next/image";

export const InfluencersNotFound = ({
  notInfluencers,
}: {
  notInfluencers: boolean;
}) => {
  return (
    <section className="min-h-screen w-full ">
      <hr className=" hidden md:block mx-auto md:w-full mt-5 border-[0.5px] border-gray-200 mb-[25px]"></hr>
      <figure className="w-1/2 mx-auto sm:w-full flex flex-col items-center">
        <Image
          src={"/images/not-found-image.png"}
          alt="Not Found Image"
          width={150}
          height={150}
        />
      </figure>
      <article className="flex flex-col ">
        <h2 className="pt-2 text-center font-bold">
          No se han encontrado influencers :(
        </h2>
        <p className="pt-2 font-semibold text-xl font-sans text-center">
          Intenta utilizar <span className="text-primary">otros filtros</span> 
        </p>
      </article>
    </section>
  );
};
