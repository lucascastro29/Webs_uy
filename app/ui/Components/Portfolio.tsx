'use client'
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import huerta from "@/public/huerta.png"
import ecommerce from "@/public/e-commerce.png"
import juice_Shop from "@/public/juice_Shop.png"
import styles from "@/app/ui/home.module.css"
export default function Page(){

    //Portfolio de projectos a mejorar// capas este diseño se puede utilizar para clientes previos 
    //y usar un slider para los proyectos en ves de estos tres elementos 
    return(
          <RevealWrapper delay={500} reset>

        <section className="w-full py-12 md:py-24 lg:py-32"
        
        id="Portfolio" 
        style={{
          height: "1080px",
          background: " url('fondo_projectos.jpg') no-repeat",
          backgroundSize: "100%",
          paddingTop:"275px"
        }}>
        <div className=" px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">Our Portfolio</h2>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-400">
            Check out some of our recent projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-14">
            <div className="group" >
              <div className={styles.divContainer}>
              <Image
                alt="Project 1"
                className="w-full h-64 object-cover rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105"
                height="300"
                src={huerta}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="0"
              />
              <Link   className={styles.divhover} href="https://huerta-249.web.app/inicio">link</Link>

              </div>
             
            </div>
            <div className="group" >
              <div className={styles.divContainer}>
              <Image
                alt="Project 2"
                className="w-full h-64 object-cover rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105"
                height="300"
                src={ecommerce}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="0"
              />
                <Link className={styles.divhover} href="https://e-commerce-next-theta.vercel.app/" > link</Link>

              </div>
            </div>
            <div className="group" >
            <div className={styles.divContainer}>

              
              <Image
                alt="Project 3"
                className="w-full h-64 object-cover rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105"
                height="300"
                src={juice_Shop}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="0"
              />
              <Link href="https://juiceshop-ha.vercel.app/" className={styles.divhover} > link</Link>

            </div>
            </div>
            
          </div>

        </div>
      </section>
      </RevealWrapper>

    )
}