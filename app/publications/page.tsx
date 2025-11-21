import Navigation from "@/components/Navigation";
import PublicationsFull from "@/components/PublicationsFull";
import SocialMedia from "@/components/SocialMedia";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PublicationsFull />
      <SocialMedia />
    </main>
  );
}

