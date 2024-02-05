export default function InfluencerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-full bg-[radial-gradient(ellipse_90%_65%_at_left,_var(--tw-gradient-stops))] from-primary/40 from-10% via-[#0f041a] via-60% to-black to-90%">
      {children}
    </div>
  );
}
