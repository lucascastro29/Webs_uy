import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import Image from "next/image";
import homepage from "@/app/ui/images/homepage.jpg"
export default function Page() {
  //aca iria la seccion inicial que apareceria al principio de la pagina y tendria que tener animaciones y cosas bonitas

  return (
    <section
      className="w-full flex flex-row py-48 md:py-48 lg:py-48  "
      style={{
        height:"1000px",
        background:
        " url('homepage.jpeg') no-repeat",
      backgroundSize: "100%",
      backgroundPosition: "bottom",
      }}
    > 
    <div className="px-0 md:px-20"></div>
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-left ">
          <div className="space-y-4 flex-row" style={{marginTop:"80px"}}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white ">
              Launch your Brand
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We create stunning websites and applications that help you stand out in the digital
              world.
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Get Started
            </Link>
          </div>
           
            
        </div>
        </div>

    </section>
  );
}
