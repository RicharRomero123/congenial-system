import clsx from "clsx";
import { NosotrosCounter } from "./Nosotros/NosotrosCounter";

export const NosotrosSection = () => {
  return (
    <section
      id="nosotros"
      className="my-4 max-w-[1560px] mx-auto flex flex-col items-center pt-20 mt-[-80px]"
    >
      {/* Nosotros Text -> Title and content */}
      <article className="py-6 px-6 md:px-12 lg:px-28 my-5">
        <h2
          className={clsx(
            "text-4xl pb-4 text-left font-bold",
            "bg-gradient-to-tl from-gray-300 to-accent bg-clip-text text-transparent"
          )}
        >
          Nosotros
        </h2>
        <p className="text-lg md:text-4xl lg:text-4xl md:leading-tight lg:leading-tight text-justify ">
          Somos la primera plataforma que se dedica a resolver el problema de la
          falta de oportunidades de colaboración entre influencers y empresas en
          el mercado de marketing de influencers.
        </p>
      </article>
      {/* Nosotros Stats -> Amount of Influencers, Companys, Regions & Campaigns */}
      <article
        className={clsx(
          "bg-gradient-to-br from-accent/80 via-primary to-secondary border-none",
          "rounded-3xl flex flex-col md:flex-row  md:py-4 md:px-2 mt-8 md:my-12 lg:mb-20 lg:my-16"
        )}
      >
        {[
          { amount: 120, label: "Influencers" },
          { amount: 60, label: "Empresas" },
          { amount: 15, label: "Regiones" },
          { amount: 240, label: "Campañas" },
        ].map((info) => (
          <NosotrosCounter key={info.label} {...info} />
        ))}
      </article>
    </section>
  );
};
