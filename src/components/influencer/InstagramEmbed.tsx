"use client";
import { InstagramEmbed } from "react-social-media-embed";
export const InstagramEmbedComponent = ({ url }: { url: string }) => {
  // const [hasMounted, setHasMounted] = useState(false);
  // const id = useId();
  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);

  // if (!hasMounted) {
  //   return null;
  // }
  return (
    <div className="w-full flex justify-center">
      <InstagramEmbed url={url} width={350} height={700} />
    </div>
  );
};
