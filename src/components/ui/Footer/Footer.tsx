// import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa6";
import { FooterNewsletter } from "./FooterNewsletter";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t via-slate-950 via-20% from-secondary/40">
      <div className="p-10 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5 lg:gap-20">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl dark:text-white">
              Suscribete para recibir noticias y actualizaciones
            </h1>
            <FooterNewsletter />
          </div>

          <div>
            <p className="mt-2 font-semibold text-white">Legal</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              {[
                { name: "Terminos y Condiciones", path: "/docs/terms" },
                { name: "Política y Privacidad", path: "/docs/politics" },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mt-2 font-semibold text-white">Redes Sociales</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <SocialMediaIcons />
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

        <div className="flex items-center justify-between mb-5">
          <h1 className="lg:hidden text-2xl font-bold text-yellow-100 text">
            Flupic
          </h1>
        </div>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link
            href="http://flupic.com"
            target="_blank"
            className="hover:underline"
          >
            Flupic™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

const SocialMediaIcons = () => {
  return (
    <div className="flex  -mx-2">
      {[
        {
          id: "sm-instagram-link",
          url: "https://www.instagram.com/flupic.pe",
          icon: <FaInstagram className="w-7 h-7" />,
          aria_label: "Instagram",
        },
        {
          id: "sm-tiktok-link",
          url: "https://www.tiktok.com/@flupic.pe",
          icon: <FaTiktok className="w-7 h-7" />,
          aria_label: "Tiktok",
        },
        {
          id: "sm-linkedin-link",
          url: "https://www.linkedin.com/company/flupic/",
          icon: <FaLinkedin className="w-7 h-7" />,
          aria_label: "Linkedin",
        },
      ].map((item) => (
        <Link
          key={item.id}
          href={item.url}
          target="_blank"
          className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          aria-label="Instagram"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};
