import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <section className="hero">
      <div className="hero-content ">
        <div className="bg-slate-800 max-w-3xl rounded-2xl">
          <div className="p-4 md:p-8  rounded-lg flex flex-col md:items-center ">
            <Image
              className="mx-auto"
              src="/images/payment/success_image.png"
              alt="Success"
              width={380}
              height={380}
            />
            <article>
              <h1 className="text-yellow-400 m-4 text-3xl font-bold text-center">
                ¡Felicidades!
              </h1>

              <p className="text-sm md:text-base font-semibold">
                Tú pago por la colaboración con el/la influencer ha sido
                procesado correctamente.
              </p>

              <p className="text-sm md:text-base font-semibold my-2">
                El influencer confirmará su disponibilidad en un plazo de 72
                horas. Una vez que confirme su disponibilidad, te enviaremos un
                correo electrónico con más detalles. Así que le pedimos que{" "}
                <span className="text-yellow-400">
                  revise su correo con frecuencia.
                </span>
              </p>

              <p className="md:text-lg font-bold mb-2 mt-5">
                En caso hayas{" "}
                <span className="text-yellow-400">seleccionado</span> que el/la
                influencer grabe en su local, considere los siguientes puntos:
              </p>
              <ul className="list-disc ml-4">
                <li className="my-2 text-sm font-semibold">
                  Asegúrate de tener el producto o servicio que el influencer
                  promocionará en su visita.
                </li>
                <li className="my-2 text-sm font-semibold">
                  Asegúrate de que tu local o tienda física esté limpio y
                  ordenado.
                </li>
                <li className="my-2 text-sm font-semibold">
                  Proporciona al influencer todo lo que necesite para realizar
                  su trabajo (en caso se desee), como productos, ropa, etc.
                </li>
                <li className="my-2 text-sm font-semibold">
                  Estamos seguros de que esta colaboración será un éxito.
                </li>
                <li className="mt-2 text-sm font-semibold ">
                  No olvidar que al aceptar esta opción, se comprometío a{" "}
                  <span className="text-yellow-400">
                    pagar el pasaje del influencer
                  </span>
                </li>
                <li className="my-2 text-sm font-semibold">
                  En el correo electrónico, te indicaremos la fecha y hora de su
                  visita, así como los requisitos que debes cumplir para que su
                  visita sea exitosa.
                </li>
              </ul>
            </article>
          </div>
          <div className="w-fit mx-auto my-10">
            <Link href="/influencers">
              <button className="btn btn-primary text-2xl">Regresar</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
