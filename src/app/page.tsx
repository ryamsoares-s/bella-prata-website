import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { InfoBar } from "@/components/InfoBar";
import { Essence } from "@/components/Essence";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <InfoBar />
      <main>
        <Essence />
        <InstagramFeed />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
