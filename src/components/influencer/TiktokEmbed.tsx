"use client";
import { TikTokEmbed } from "react-social-media-embed";
export const TikTokEmbedComponent = ({ url }: { url: string }) => {
  return (
    <div className="w-full flex justify-center">
      <TikTokEmbed url={url} width={320} height={650} />
    </div>
  );
};
