import { redirect } from "next/navigation";

export default function NamePage() {
  redirect("/influencers");
  
  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}
