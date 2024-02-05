"use server";

type PaymentProps = {
  offerId: string;
};

export async function getPaymentUrl(offerId: PaymentProps) {
  // console.log("aea");
  const data = await (
    await fetch(`${process.env.BACKEND_URL}/v1/payments`, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        offerId: +offerId,
        cancelUrl: `${process.env.FRONTEND_URL}/payment/failure`,
        successUrl: `${process.env.FRONTEND_URL}/payment/success`,
      }),
    })
  ).json();

  console.log(data);
  // const paymentLink = initPoint;
  return data?.initPoint;
}
