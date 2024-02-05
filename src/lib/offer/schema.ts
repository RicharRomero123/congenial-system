import { z } from "zod";

export const OfferSchema = z
  .object({
    name: z.string().min(1, { message: "El nombre es requerido" }),
    lastname: z.string().min(1, { message: "El apellido es requerido" }),
    email: z.string().email({ message: "El email es requerido" }),
    phone: z
      .string()
      .min(9, { message: "Se requiere un número de teléfono" })
    ,
    companyName: z
      .string()
      .min(1, { message: "El nombre de la empresa es requerido" }),
    campaignName: z.string().optional(),
    campaignGoal: z.enum(["Ventas", "Seguidores", "Reconocimiento", "Otro"]),
    //Selecciona campaignGoal y si es "Otro", se habilita anotherCampaignGoal
    anotherCampaignGoal: z.string().optional(),

    campaignIdea: z.string().optional(),
    campaignProductOrService: z.string(),

    // El usuario va a pagar con Dinero, se habilita wantsToGiveProductOrService
    wantsToGiftProductOrService: z.string().optional(),
    giftedProductOrService: z.string().optional(),
    // El usuario va a pagar con Canje, se habilita influencerBenefitsWithExchange
    influencerBenefitsWithExchange: z.string().min(1, {
      message:
        "Es obligatorio que especifique los beneficios que el influencer obtendrá por Canje",
    }),

    wantsToClipAVideo: z.string(),
    companyLocation: z.string().optional(),
    //   companyWebsite: z.string().optional(),
  })
  .partial()
  .superRefine(
    (
      {
        campaignGoal,
        anotherCampaignGoal,
        wantsToClipAVideo,
        companyLocation,
        wantsToGiftProductOrService,
        giftedProductOrService,
      },
      refinementContext
    ) => {
      if (wantsToClipAVideo === "true" && companyLocation === "") {
        refinementContext.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "La ubicación de la empresa es requerida cuando se quiere grabar un video",
          path: ["companyLocation"],
        });
      }
      if (campaignGoal === "Otro" && anotherCampaignGoal === "") {
        refinementContext.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Este campo es obligatorio cuando se selecciona 'Otro' en el campo 'Objetivo de la campaña",
          path: ["anotherCampaignGoal"],
        });
      }
      if (
        wantsToGiftProductOrService === "true" &&
        giftedProductOrService === ""
      ) {
        refinementContext.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Este campo es obligatorio cuando se quiere obsequiar un producto o servicio",
          path: ["giftedProductOrService"],
        });
      }
    }
  );

// const response = OfferSchema.parse({
//   name: "Juan",
//   lastname: "Perez",
//   email: "alonsoem9@gmail.com",
//   phone: "123456789",
//   companyName: "Empresa",
//   campaignName: "Campaña",
//   campaignGoal: "Ventas",
//   campaignProductOrService: "Producto",
//   wantsToClipAVideo: "true",
//   companyLocation: "",
//   influencerBenefitsWithExchange: "Beneficios",
// })

// console.log(response?.companyLocation)
