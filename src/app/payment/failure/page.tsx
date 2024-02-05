import Image from "next/image";
import Link from "next/link";

export default function FailurePage() {
  return (
    <section className="hero">
      <div className="hero-content ">
        <div className="bg-slate-800 max-w-3xl rounded-2xl">
          <div className="p-4 md:p-8  rounded-lg flex flex-col md:items-center ">
            <Image
              className="mx-auto"
              src="/images/payment/failure_image.png"
              alt="Success"
              width={380}
              height={380}
            />
            <article>
              <h1 className="text-red-500 m-4 text-3xl font-bold text-center">
                Pago Fallido
              </h1>
              
              <p className="text-sm md:text-base font-semibold">
                Lamentamos informarte que tu pago por la colaboración con el/la
                influencer no ha podido ser procesado correctamente.
              </p>
              <br />
              <p className="text-sm md:text-base font-semibold">
                Entre las posibles causas de este error se encuentran:
              </p>

              <ul className="list-disc ml-4 mb-4">
                <li className="my-2 text-sm font-semibold">
                  Los datos de tu tarjeta de débido o crédito no son los
                  correctos
                </li>
                <li className="mt-2 text-sm font-semibold ">
                  No tienes los fondos suficientes en tu cuenta bancaria
                </li>
                <li className="my-2 text-sm font-semibold">
                  Pudo haber un problema con tu conexión a internet
                </li>
              </ul>
              <p className="text-sm md:text-base font-semibold my-2">
                Por Favor, comprueba los datos de tu tarjeta de crédito y tu
                cuenta bancaria, y asegúrate de que tienes una conexión a
                internet estable. Si el problema persiste, ponte en contacto con
                tu banco o con el servicio de atención al cliente de Flupic:
                <span className="text-yellow-400"> hola@flupic.com</span>
              </p>

              <p className="md:text-lg font-semibold mb-2 mt-5">
                Una vez que hayas resuelto el problema, podrás volver a intentar
                realizar el pago. Si el pago se procesa correctamente, recibirás
                un correo electrónico con los detalles de la colaboración.
              </p>
              <br />
              <p>Gracias por tu comprensión.</p>
            </article>
          </div>
          <div className="w-fit mx-auto my-10">
            <Link href="/influencers">
              <button className="btn btn-primary text-2xl">
                Volver a la página de principal
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
