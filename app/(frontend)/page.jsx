import HeroSection from "@/components/HeroSection";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default function Home() {
  // GETTING SESSION DATA IN SERVER SIDE
  const session = getServerSession(authOptions);
  if (session) {
    console.log(session?.user);
  }
  return (
    <main>
      <HeroSection />
    </main>
  );
}
