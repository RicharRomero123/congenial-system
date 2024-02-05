export default function PoliticsPage() {
  return (
    <div className="overflow-hidden bg-[radial-gradient(ellipse_90%_65%_at_right,_var(--tw-gradient-stops))] from-secondary/30 from-10% via-[#0f041a] via-60% to-black to-90%">
      {/* Encabezado */}
      <div className="w-screen h-32 flex items-center justify-center ">
        <h1 className="text-3xl md:text-5xl font-semibold text-white">
          Política de Privacidad
        </h1>
      </div>

      <div className="h-8"></div>

      <div className="max-w-2xl mx-auto p-8 bg-gray-950 rounded-xl mb-16">
        {/* Sección de Política de Privacidad */}

        <div className="h-4"></div>

        <div
          className="textTerm text-lg leading-relaxed"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          {/* Ajuste de tamaño y espacio del texto */}
          <p className="text-left italic">
            Última actualización: 1 de septiembre de 2023
          </p>

          <div className="h-6"></div>

          <p className="text-left mb-3">
            <span className="text-accent font-bold">
              1. Recopilación de Información:
            </span>{" "}
            Flupic recopila información personal de los usuarios de diversas
            maneras, según se describe en esta Política de Privacidad.
          </p>

          <p className="text-left mb-3">
            <span className="text-accent font-bold">
              2. Uso de la Información:
            </span>{" "}
            La información recopilada se utiliza para proporcionar y mejorar
            nuestros servicios, así como para personalizar la experiencia del
            usuario.
          </p>

          <p className="text-left mb-3">
            <span className="text-accent font-bold">
              3. Cookies y Tecnologías Similares:
            </span>{" "}
            Utilizamos cookies y tecnologías similares para mejorar la
            experiencia del usuario y obtener información sobre el uso de
            nuestros servicios.
          </p>

          <p className="text-left mb-3">
            <span className="text-accent font-bold">
              4. Compartir Información:
            </span>{" "}
            Flupic puede compartir información con terceros en ciertas
            circunstancias, como se detalla en esta Política de Privacidad.
          </p>

          <p className="text-left mb-3">
            <span className="text-accent font-bold">
              5. Privacidad de Menores:
            </span>{" "}
            Nuestros servicios no están dirigidos a menores de 16 años, y no
            recopilamos a sabiendas información personal de menores de esa edad.
          </p>

          <p className="text-left mb-3">
            <span className="text-accent font-bold">
              6. Seguridad de la Información:
            </span>{" "}
            Implementamos medidas de seguridad para proteger la información del
            usuario, pero no podemos garantizar su seguridad absoluta.
          </p>

          <p className="text-left mb-3">
            <span className="text-accent font-bold">
              7. Cambios en la Política:
            </span>{" "}
            Nos reservamos el derecho de modificar esta Política de Privacidad
            en cualquier momento. Los cambios serán efectivos inmediatamente
            después de la publicación.
          </p>

          <p className="text-left mb-3">
            <span className="text-accent font-bold">8. Contáctanos:</span> Si
            tienes preguntas sobre esta Política de Privacidad, contáctanos a{" "}
            <a href="mailto:soporte@flupic.com" className="text-primary">soporte@flupic.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
