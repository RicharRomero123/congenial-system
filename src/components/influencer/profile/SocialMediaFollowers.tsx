import { formatAmmountBy } from "@/utils";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

export const SocialMediaFollowers = ({
  followers,
  socialPlatform,
}: {
  followers: number;
  socialPlatform: string;
}) => {
  return (
    <article>
      <div className="bg-transparent flex items-center space-x-2 cursor-pointer">
        {socialPlatform === "Instagram" ? <FaInstagram /> : <FaTiktok />}
        <p className="lg:text-base text-sm font-semibold text-white">
          {formatAmmountBy(followers)} seguidores
        </p>
      </div>
    </article>
  );
};
