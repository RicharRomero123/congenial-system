import { FeatureCards } from "./Features/FeatureCards";
import clsx from "clsx";
const Features = [
  {
    title: "Red de microinfluencers",
    color: "#D43A5C",
    description:
      "Contamos con la red más grande de influencers en 24 departamentos.",
  },
  {
    title: "Análisis demográfico",
    color: "#5FC0C4",
    description:
      "Realizamos análisis demográfico de empresas para crear campañas publicitarias",
  },
  {
    title: "Campañas regionales personalizadas",
    color: "orange-500",
    description:
      "Creamos campañas regionales y personalizadas con influencers de cada zona y rubro, generando una conexión auténtica entre la marca y la audiencia local.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="servicios" className="max-w-[1560px] mx-auto flex flex-col pt-20 mt-[-80px]">
      <h2
        className={clsx(
          "text-4xl  py-6 px-6 md:px-12 lg:px-28 text-left font-bold",
          "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        )}
      >
        Servicios
      </h2>
      <div
        id="features-container"
        className="ml-6 md:ml-12  grid grid-cols-1 md:grid-cols-2 mt-8"
      >
        <section className="w-full h-full md:h-[80%] xl:h-full">
          <FeatureCards />
        </section>
        <section>
          {Features.map((feature, index) => (
            <article key={index} className="pb-16 pr-6 md:pr-12 lg:pr-28">
              <h2
                className={clsx(
                  "text-2xl md:text-3xl pb-3 md:pb-4 text-left font-bold",
                  {
                    "bg-gradient-to-l from-gray-300 from-10% to-accent bg-clip-text text-transparent":
                      feature.color === "orange-500",
                      "bg-gradient-to-l from-gray-300 from-10% to-secondary bg-clip-text text-transparent":
                      feature.color === "#D43A5C",
                      "bg-gradient-to-l from-gray-300 from-10% to-primary bg-clip-text text-transparent":
                      feature.color === "#5FC0C4",
                  }
                )}
              >
                {feature.title}
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl md:leading-tight lg:leading-tight">
                {feature.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
};
