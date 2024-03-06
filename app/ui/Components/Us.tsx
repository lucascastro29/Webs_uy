'use client'
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
export default function Page() {
  //En mi opinion hay que agregar una imagen de fondo a la seccion de contacto
  //Y mejorar el h2 y otras cosas

  return (
    <>
<RevealWrapper delay={600} origin="bottom"   reset>

    <section
    className="w-full flex flex-row-reverse content-end align-center justify-right py-48 md:py-48 lg:py-48  "
    style={{
      height:"1080px",
      background:
      " url('Us.jpg') no-repeat",
    backgroundSize: "100%",
    }}
  > 
    <div className="px-4 md:px-6 mt-24 mr-20 flex flex-col align-center">
      <div className="flex flex-col items-center  justify-top space-y-4 h-12 md:h-96 md:justify-center text-right " >
        <div className="space-y-4 flex-col" >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white ">
            take your Internet brand on
          </h1>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white ">
            take your Internet brand on
          </h1>
       
        </div>
         
          
      </div>
      </div>

  </section>
  </RevealWrapper> 
  <div></div></>
    
  );
}
