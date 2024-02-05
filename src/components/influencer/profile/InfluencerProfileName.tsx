import clsx from "clsx";

export const InfluencerProfileName = ({ name }: { name: string }) => {
  return (
    <>
      <h1
        className={clsx(
          "text-center font-bold text-5xl mb-5 p-2",
          "bg-gradient-to-br from-accent/80 via-primary to-secondary border-none bg-clip-text text-transparent"
        )}
      >
        {name}
      </h1>
    </>
  );
};
