import Contact from "@/app/ui/Components/Contact";
import Services from "@/app/ui/Components/Services";
import Portfolio from "@/app/ui/Components/Portfolio";
import Landing from "@/app/ui/Components/Landing";

export default async function Page() {
  return (
    <>
      <Landing />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}
