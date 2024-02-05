"use server";

import { OfferSchema } from "./schema";
import { z } from "zod";

type Offer = z.infer<typeof OfferSchema>;
type PaymenTypeId = number;
type serviceId = string;

export async function postOffer(
  formData: Offer,
  paymentTypeId: PaymenTypeId,
  serviceId: serviceId
) {
  const offerFormData = OfferSchema.parse(formData);
  const offer = {
    ...offerFormData,
    paymentTypeId,
    serviceId,
  };
  console.log(offer);
  try {
    const offerResponse = await (
      await fetch(`${process.env.BACKEND_URL}/v1/offers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(offer),
      })
    ).json();

    return offerResponse;
  } catch (error) {}
}
