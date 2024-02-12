'use client'
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
export default function Page() {
  //En mi opinion hay que agregar una imagen de fondo a la seccion de contacto
  //Y mejorar el h2 y otras cosas

  return (
    <RevealWrapper delay={600} origin="bottom"   reset>

    <section
    className="w-full flex flex-row py-48 md:py-48 lg:py-48  "
    style={{
      height:"1080px",
      background:
      " url('Us.jpg') no-repeat",
    backgroundSize: "100%",
    }}
  > 
  <div className="px-0 md:px-20"></div>
    <div className="px-4 md:px-6 flex flex-col align-center">
      <div className="flex flex-col items-center  justify-top space-y-4 h-12 md:h-96 md:justify-center text-left " >
        <div className="space-y-4 flex-col" >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white ">
            Launch your Brand
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            We create stunning websites and applications that help you stand out in the digital
            world.
          </p>
          <div className="mt-20">
          <Link
            className="text-white bg-gradient-to-r mt-20 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            href="#Contact"
          >
            Get Started
          </Link>
          </div>
        </div>
         
          
      </div>
      </div>

  </section>
  </RevealWrapper>
  );
}
