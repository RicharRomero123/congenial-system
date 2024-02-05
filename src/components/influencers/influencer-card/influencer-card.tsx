import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { FaTiktok, FaInstagram } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Influencer } from "@/interfaces/influencers";
import { formatAmmountBy } from "@/utils";

interface Props {
  influencer: Influencer;
}

export const InfluencerCard = async ({ influencer }: Props) => {

  return (
    <article
      className={clsx(
        "flex w-[19rem] md:w-[20rem] lg:w-[20rem]  flex-col rounded-2xl ",
        "transition-all duration-300 ease-in-out",
        // "bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900",
        // "bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900"
        `border-2  hover:border-secondary hover:border-2`,
        // "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-black via-fuchsia-900 to-black",
        "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-500 from-10% via-black via-100%"
      )}
    >
      <h1 className="text-3xl mt-5 text-center font-bold text-white">
        {influencer.name}
      </h1>
      <div className="mb-4 text-center">
        {influencer.interests.map((interest, index) => {
          return (
            <span key={index} className="bg-gradient-to-tr from-primary to-secondary border-none bg-clip-text text-transparent font-bold">
              {interest}
              {index !== influencer.interests.length - 1 && ", "}
            </span>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center bg-inherit">
        <div
          className="w-[50%] h-[80%] min-w-[150px] min-h-[150px] lg:w-44 lg:self-center lg:h-44 
          relative lg:mb-8 z-0"
        >
          <figure className="w-full h-full bg-black  rounded-full ">
            <Image
              className="rounded-full border-2 border-black "
              alt="Influencer picture"
              src={influencer.profilePhotoUrl}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </figure>
          {/* {influencer.exchange ? (
            // <div className="badge bg-yellow-200 mt-1 lg:absolute lg:bottom-0 text-black ">Canje</div>
            <div className="badge lg:badge-lg absolute bottom-[15px] lg:bottom-[-10px] bg-green-400 mt-1  text-black ">
              <FaRegCheckCircle size={18} className="text-black mr-1" />
              <span className="text-black text-center  font-semibold">
                Acepta Canje
              </span>
            </div>
          ) : null} */}
        </div>
        <div className="flex flex-col items-center gap-4 mt-2 lg:mt-0">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="inline-flex min-w-[130px] items-center border-2 border-white font-semibold justify-center gap-1 px-3 py-2  rounded-lg group">
              <FaMapMarkerAlt
                size={18}
                className="text-white mt-[2px] mr-1"
              />
              <span className="text-base text-white transition-colors duration-300">
                {influencer.region}
              </span>
            </div>
            <div className="flex self-center text-center min-w-[80px] max-w-[120px] items-center justify-center border-2 border-white px-2 py-1 rounded-lg">
              <span className="text-sm text-white font-semibold mr-1">
                S/
              </span>
              <span className="text-lg text-white   font-semibold mr-1">
                {influencer.referencePrice}
              </span>
              <span className="text-base lg:text-2xl text-white font-bold -mt-[1.9px]  lg:-mt-[3.3px] lg:mr-0 ">
                +
              </span>
            </div>
          </div>
          <div className="flex mt-2 gap-5 mb-3 ">
            {influencer.socialMedia.map((socialMedia) => {
              {
                return (
                  <div
                    key={socialMedia.username + socialMedia.socialMedia}
                    className="flex flex-col justify-center items-center   "
                  >
                    {socialMedia.socialMedia === "Instagram" ? (
                      <FaInstagram size={18} className="text-white" />
                    ) : (
                      <FaTiktok size={18} className="text-white" />
                    )}
                    <p className="text-sm font-semibold lg:text-xl  text-white">
                      {formatAmmountBy(socialMedia?.followers)}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-6 ">
        <Link href={`/influencers/${influencer.uuid}`}>
          <button className="border-white border-2 text-white px-8 py-2 text-sm lg:text-xl capitalize  text-center rounded-xl  font-semibold transition-all duration-400 ease-in-out hover:border-secondary hover:bg-gradient-to-tr hover:from-primary hover:to-secondary hover:text-white">
            Contactar
          </button>
        </Link>
      </div>
    </article>
  );
};
