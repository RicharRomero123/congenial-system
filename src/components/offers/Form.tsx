"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useExchangeStore } from "@/store/exchangeStore";
import { postOffer } from "@/lib/offer/actions";
import { OfferSchema } from "@/lib/offer/schema";
import { Toaster, toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { getPaymentUrl } from "@/lib/payment/action";
import './Form.css';
type Offer = z.infer<typeof OfferSchema>;

export const Form = ({ serviceId }: { serviceId: string }) => {
  const wantsToExchange = useExchangeStore((state) => state.wantsToExchange);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    getValues,
    watch,
  } = useForm<Offer>({
    resolver: zodResolver(OfferSchema),
    defaultValues: {
      campaignGoal: "Ventas",
      wantsToGiftProductOrService: "true",
      wantsToClipAVideo: "true",
      companyLocation: "",
      influencerBenefitsWithExchange: wantsToExchange ? "" : "NO APLICA",
    },
  });

  const changeGoal = (value: Offer["campaignGoal"]) => {
    setValue("campaignGoal", value);
    if (getValues("anotherCampaignGoal")) {
      setValue("anotherCampaignGoal", "");
    }
    console.log(getValues("campaignGoal"));
  };

  const changeWantsToGiftProductOrService = (
    value: Offer["wantsToGiftProductOrService"]
  ) => {
    setValue("wantsToGiftProductOrService", value);
    if (getValues("campaignProductOrService")) {
      setValue("campaignProductOrService", "");
    }
    console.log(getValues("wantsToGiftProductOrService"));
  };
  const changeWantsToClipAVideo = async (value: Offer["wantsToClipAVideo"]) => {
    setValue("wantsToClipAVideo", value);
  };

  const processOffer: SubmitHandler<Offer> = async (data) => {
    toast.loading("Procesando oferta");
    // 1 Plata, 2 Canje
    const paymentType = wantsToExchange ? 2 : 1;
  
    const offer = await postOffer(data, paymentType, serviceId);
    
    
    if (!offer) {
      toast.error("Hubo un error al procesar la oferta, intente nuevamente");
      return;
    }

    if (paymentType === 2) {
      toast.success("Oferta procesada correctamente!");
      router.push(`/payment/success`);
    }

    if (paymentType === 1) {
      // Va a pagar
      console.log("paganding");
      const paymentUrl = await getPaymentUrl(offer?.id);

      console.log(paymentUrl);

      // const paymentUrl = await getPaymentUrl({
      //   offerId: offer.id,
      // });
      if (!paymentUrl) {
        toast.error("Hubo un error con la pasarela de pago, pruebe");
        toast.dismiss();
        return;
      }
      router.push(paymentUrl);
    }
  };

  const formatInputValue = (value:string) => {
    let sanitizedValue = value.replace(/[^0-9+]/g, '');
  
    sanitizedValue = sanitizedValue.charAt(0) === '+' ? '+' + sanitizedValue.slice(1).replace(/\+/g, '') : sanitizedValue;

    const formattedValue = sanitizedValue.replace(/(.{3})/g, '$1 ').trim();
  
    return formattedValue;
  };
  
  
  

  return (
    <section className=" ">
      <Toaster richColors position="top-center"/>
      <form
        onSubmit={handleSubmit(processOffer)}
        className="form h-full overflow-y-auto w-full h-scree"
      >
        <h2 className="text-accent font-bold text-4xl mb-4 text-center mt-[20px]">
          Datos Necesarios
        </h2>

        <p className="text-sm font-normal text-gray-400 mt-5 mb-2 text-center">
          (*) Son campos obligatorios
        </p>

        <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-5">
          <div className="form-control w-full max-w-full">
            <label className="label w-full">
              <span className="label-text text-base font-semibold">
                *Nombre
              </span>
            </label>
            <input
              {...register("name")}
              placeholder="ejemplo: Edwin"
              aria-autocomplete="none"
              className="input input-bordered w-full max-w-full"
              autoComplete="off"
            />
            {errors.name && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.name?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control w-full max-w-full">
            <label className="label w-full">
              <span className="label-text text-base font-semibold">
                *Apellido
              </span>
            </label>
            <input
              aria-autocomplete="none"
              autoComplete="off"
              placeholder="ejemplo: Aguilar"
              {...register("lastname")}
              className="input input-bordered w-full max-w-full"
            />
            {errors.lastname && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.lastname?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-base font-semibold">
                *Número de celular
              </span>
            </label>
            <input
              aria-autocomplete="none"
              maxLength={15}
              placeholder="+51 994 126 830"
              {...register("phone")}
              className="input input-bordered w-full"
              onChange={(event) => {
                const formattedValue = formatInputValue(event.target.value);
                setValue('phone', formattedValue.trimEnd()); 
              }}
            />
            {errors.phone && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.phone?.message}
                </span>
              </label>
            )}
          </div>
        </div>

        <div className="w-full flex gap-2 flex-col lg:flex-row">
          <div className="form-control w-full lg:w-2/3 ">
            <label className="label">
              <span className="label-text text-base font-semibold">
                *Correo Electrónico
              </span>
            </label>
            <input
              aria-autocomplete="none"
              autoComplete="off"
              placeholder="flupic@flupic.com"
              {...register("email")}
              className="input input-bordered w-full max-w-sm "
            />
            {errors.email && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.email?.message}
                </span>
              </label>
            )}
          </div>

          <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-base font-semibold">
              *Nombre de tu Empresa
            </span>
          </label>
          <input
            aria-autocomplete="none"
            autoComplete="off"
            placeholder="ejm: ArepaSoft S.A.C"
            {...register("companyName")}
            className="input input-bordered w-full"
          />
          {errors.companyName && (
            <label className="label">
              <span className="label-text-alt text-red-500">
                {errors.companyName?.message}
              </span>
            </label>
          )}
        </div>
          
        </div>



        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-base font-semibold">
              Nombre de tu Campaña
            </span>
          </label>
          <input
            autoComplete="off"
            aria-autocomplete="none"
            placeholder="ejm: Rebaja de 50% en todos los productos"
            {...register("campaignName")}
            className="input input-bordered w-full"
          />
          {errors.campaignName && (
            <label className="label">
              <span className="label-text-alt text-red-500">
                {errors.campaignName?.message}
              </span>
            </label>
          )}
        </div>

        <div className="form-control hidden sm:block w-full">
          <label className="label">
            <span className="label-text text-base font-semibold">
              Objetivo de la Campaña
            </span>
          </label>
          <div className="join md:flex-wrap">
            <input
              className="join-item btn btn-outline"
              type="radio"
              aria-label="Ventas"
              value={"Ventas"}
              {...register("campaignGoal")}
              onChange={() => changeGoal("Ventas")}
            />
            <input
              className="join-item btn btn-outline"
              type="radio"
              aria-label="Seguidores"
              value={"Seguidores"}
              {...register("campaignGoal")}
              onChange={() => changeGoal("Seguidores")}
            />
            <input
              className="join-item btn btn-outline"
              type="radio"
              aria-label="Reconocimiento"
              value={"Reconocimiento"}
              {...register("campaignGoal")}
              onChange={() => changeGoal("Reconocimiento")}
            />
            <input
              className="join-item btn btn-outline"
              type="radio"
              aria-label="Otro"
              value={"Otro"}
              {...register("campaignGoal")}
              onChange={() => changeGoal("Otro")}
            />
          </div>
        </div>

        <div className="form-control w-full df" style={{marginTop:"15px"}}>
          <label className="label">
            <span className="label-text text-base font-semibold">
              Si tienes alguna idea para tú campaña, !Compartela!
            </span>
          </label>
          <textarea
            rows={3}
            placeholder="ejm: Usar vestidos para llamar la atención, mostrar la fachada de tu local, etc. "
            {...register("campaignIdea")}
            className="textarea textarea-bordered  w-full"
          />
          {errors.campaignIdea && (
            <label className="label">
              <span className="label-text-alt text-red-500">
                {errors.campaignIdea?.message}
              </span>
            </label>
          )}
        </div>
        {wantsToExchange === false ? (
          <>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  ¿Desearías obsequiar un producto o servicio a los influencers?
                </span>
              </label>
              <div className="join">
                <input
                  className="join-item btn btn-outline"
                  type="radio"
                  aria-label="Si"
                  value={"true"}
                  {...register("wantsToGiftProductOrService")}
                  onChange={() => changeWantsToGiftProductOrService("true")}
                />
                <input
                  className="join-item btn btn-outline"
                  type="radio"
                  aria-label="No"
                  value={"false"}
                  {...register("wantsToGiftProductOrService")}
                  onChange={() => changeWantsToGiftProductOrService("false")}
                />
              </div>
            </div>
            {watch("wantsToGiftProductOrService") === "true" && (
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-base font-semibold">
                    *¿Que va a obsequiar al influencer?
                  </span>
                </label>
                <textarea
                  placeholder="ejm: ropa, comida, descuentos, etc."
                  {...register("giftedProductOrService")}
                  className="textarea textarea-bordered  w-full"
                />
                {errors.giftedProductOrService && (
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.giftedProductOrService?.message}
                    </span>
                  </label>
                )}
              </div>
            )}
          </>
        ) : (

          // Va a usar Canje para obtener el servicio
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-base font-semibold">
                ¿Qué beneficios por canje obtendría el influencer al participar
                en tú campaña? Considere que debe acercarse al valor real del
                servicio.
              </span>
            </label>
            <textarea
              placeholder="ejm: ropa, comida, descuentos, etc."
              {...register("influencerBenefitsWithExchange")}
              className="textarea textarea-bordered  w-full"
            />
            {errors.influencerBenefitsWithExchange && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.influencerBenefitsWithExchange?.message}
                </span>
              </label>
            )}
          </div>
        )}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-base font-semibold">
              *¿Deseas que el influencer grabe la campaña en tu local físico?
              <p className="text-base font-normal">
                En caso marque sí, se compromete a pagar el transporte del
                influencer.
              </p>
              <p className="text-base font-normal">
                No está incluido en el precio final
              </p>
            </span>
          </label>
          <div className="join">
            <input
              className="join-item btn btn-outline"
              type="radio"
              aria-label="Si"
              value={"true"}
              {...register("wantsToClipAVideo")}
              onChange={() => changeWantsToClipAVideo("true")}
            />
            <input
              className="join-item btn btn-outline"
              type="radio"
              aria-label="No"
              value={"false"}
              {...register("wantsToClipAVideo")}
              onChange={() => changeWantsToClipAVideo("false")}
            />
          </div>
        </div>

        {watch("wantsToClipAVideo") === "true" && (
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-base font-semibold">
                *Dirección con referencia de tú local
              </span>
            </label>
            <textarea
              placeholder="ejm: Av. Benavides 1234, frente al parque Kennedy, Miraflores"
              {...register("companyLocation")}
              className="textarea textarea-bordered  w-full"
            />
            {errors.companyLocation && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.companyLocation?.message}
                </span>
              </label>
            )}
          </div>
        )}

        <div className="flex w-full justify-center">
          {isSubmitting ? (
            <button
              type="button"
              disabled
              className=" flex w-1/2 items-center justify-center bg-gray-300 text-gray-600  mt-5 py-2 rounded-3xl"
            >
              <span className="loading loading-spinner loading-sm mr-2"></span>
              Cargando
            </button>
          ) : (
            <button
              type="submit"
              className="btn-submit bg-accent "
            >
              Siguiente
            </button>
          )}
        </div>
      </form>
    </section>
  );
};
