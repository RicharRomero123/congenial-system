import { SocialMediaFollowers } from "./SocialMediaFollowers";
import { SocialMediaList } from "@/interfaces/influencer";
import { FaAngellist, FaLocationDot } from "react-icons/fa6";

type Profile = {
  region: string;
  interests: string[];
  socialMedia: SocialMediaList[];
};

export const AboutProfile = ({ region, interests, socialMedia }: Profile) => {
  return (
    <section className="flex flex-col">
      <h2 className="text-3xl sm:mt-4 font-bold bg-gradient-to-tl from-gray-300 to-accent bg-clip-text text-transparent">
        SOBRE EL INFLUENCER
      </h2>
      <div className="lg:flex lg:justify-between my-6">
        <aside className="space-y-3 lg:w-[325px] max-lg:mb-4">
          <span className="flex space-x-2 items-center">
            <FaLocationDot className="text-white" />
            <p className="lg:text-base text-sm text-white">{region}</p>
          </span>
          {socialMedia.map((socialPlatform) => (
            <SocialMediaFollowers
              key={socialPlatform.socialMedia}
              followers={socialPlatform.followers}
              socialPlatform={socialPlatform.socialMedia}
            />
          ))}
          <div className="flex space-x-2 items-center">
            <FaAngellist size={20} />
            <div className="flex flex-wrap">
              <div className=" text-center">
                {interests.map((interest, index) => {
                  return (
                    <span key={index} className="text-sm text-white font-bold ">
                      {interest}
                      {index !== interests.length - 1 && ", "}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
