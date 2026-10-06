import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Courses } from "@/components/Courses";
import { Categories } from "@/components/Categories";
import { Statistics } from "@/components/Statistics";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Vehicles } from "@/components/Vehicles";
import { Instructors } from "@/components/Instructors";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Location } from "@/components/Location";
import { FinalCTA } from "@/components/FinalCTA";
import { Instagram } from "@/components/Instagram";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { testimonials } from "@/data/testimonials";

export function Home() {
  return (
    <>
      <Header hasTestimonials={testimonials.length > 0} />
      <main>
        <Hero />
        <TrustBar />
        <Courses />
        <Categories />
        <Statistics />
        <About />
        <FinalCTA compact title="Está pronto para começar?" text="Dê o primeiro passo para conquistar sua habilitação." />
        <Process />
        <Benefits />
        <Vehicles />
        <Instructors />
        <Testimonials />
        <FAQ />
        <Location />
        <Instagram />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
