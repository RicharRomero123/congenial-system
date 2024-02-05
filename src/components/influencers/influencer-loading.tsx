import clsx from "clsx";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

export const InfluencerLoading = () => {
  return (
    <section key={"loading-influencers"} className="flex flex-col">
      <div className=" w-full flex flex-wrap justify-center gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <article
            key={index}
            className={clsx(
              "flex w-[19rem] md:w-[20rem] lg:w-[18rem]  flex-col rounded-2xl border-4  hover:border-yellow-200 hover:border-4",
              "transition-all duration-300 ease-in-out",
              // "bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900",
              // "bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900"
              // "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-black via-fuchsia-900 to-black",
              "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-500 via-blue-900 to-black"
            )}
          >
            <h1 className="skeleton text-3xl mt-5 text-center font-bold text-yellow-100"></h1>
            <div className="mb-4 text-center">
              <div className="skeleton h-4 w-20 "></div>
            </div>
            <div className="flex items-center justify-center lg:flex-col bg-inherit">
              <div
                className="w-[50%] h-[80%] lg:w-[60%] lg:self-center lg:h-44  
                        flex flex-col relative items-center justify-center lg:mb-8 z-0 "
              >
                <div className={clsx("skeleton rounded-full")}>
                  <figure className="w-full h-full bg-black  rounded-full ">
                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                  </figure>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 mt-2 lg:mt-0">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="inline-flex min-w-[130px] hover:bg-yellow-200 items-center border-2 border-yellow-100 font-semibold justify-center gap-1 px-3 py-2  rounded-lg group">
                    <FaMapMarkerAlt
                      size={18}
                      className="text-yellow-200 mt-[2px] mr-1 group-hover:text-black"
                    />
                    <span className="skelton text-base text-yellow-100 transition-colors duration-300 group-hover:text-black  "></span>
                  </div>
                  <div className="flex self-center text-center min-w-[80px] max-w-[120px] items-center justify-center border-2 border-yellow-100 px-2 py-1 rounded-lg">
                    <span className="text-sm text-yellow-100 font-semibold mr-1">
                      S/
                    </span>
                    <span className="skelton text-lg text-yellow-100   font-semibold mr-1"></span>
                  </div>
                </div>
                <div className="flex mt-2 gap-5 mb-3 ">
                  {[
                    {
                      socialMedia: "Instagram",
                      username: "username",
                      followers: 0,
                    },
                    {
                      socialMedia: "Tiktok",
                      username: "username",
                      followers: 0,
                    },
                  ].map((socialMedia) => {
                    {
                      return (
                        <div
                          key={socialMedia.username + socialMedia.socialMedia}
                          className="flex flex-col justify-center items-center   "
                        >
                          {socialMedia.socialMedia === "Instagram" ? (
                            <FaInstagram
                              size={18}
                              className="text-yellow-100"
                            />
                          ) : (
                            <FaTiktok size={18} className="text-yellow-100" />
                          )}
                          <p className="skeleton text-sm font-semibold lg:text-xl  text-white"></p>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center my-6 ">
              <div className="skeleton border-yellow-200 border-2 text-yellow-200 px-8 py-2 text-sm lg:text-xl capitalize  text-center hover:bg-yellow-200 hover:text-black  rounded-xl  font-semibold ">
                Contactar
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
