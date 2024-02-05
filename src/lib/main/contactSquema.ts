import { z } from "zod";

export const ContactSchema = z
  .object({
    name: z.string().min(3, { message: "Mínimo 3 caracteres" }),
    email: z.string().email({ message: "Escribir un correo válido" }),
    personType: z.enum(["INFLUENCER", "COMPANY"]),
    phone: z
      .string()
      .min(9, { message: "Escribir un número válido" })
      .transform((phoneNumber) => +phoneNumber)
      .refine((phoneNumber) => !isNaN(phoneNumber), {
        message: "Debe ser un número válido",
      })
      .refine((phoneNumber) => phoneNumber > 0, {
        message: "Debe ser un número válido",
      }),
    mostUsedSocialMediaURL: z.string().optional(),
    companyName: z.string().optional(),
    question: z
      .string()
      .max(500, { message: "No se pase de los 500 caracteres" })
      .optional(),
  })
  .partial()
  .superRefine((data, refinementContext) => {
    if (
      data.personType === "INFLUENCER" &&
      data.mostUsedSocialMediaURL === ""
    ) {
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "URL necesario",
        path: ["mostUsedSocialMediaURL"],
      });
    }
    if (data.personType === "COMPANY" && data.companyName === "") {
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Nombre de empresa necesario",
        path: ["companyName"],
      });
    }
  });

  export type ContactFormInputs = z.infer<typeof ContactSchema>;