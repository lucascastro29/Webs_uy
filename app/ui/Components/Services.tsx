'use client'
import styles from "@/app/ui/home.module.css"
import { useState } from "react"
import { RevealWrapper } from  'next-reveal'
import design from "@/public/design.png"
import development from "@/public/development.png"
import support from "@/public/support.png"
import Image from "next/image"
export default function Page(){
  




//Serccion de servicios a mejorar, pense en agregarle una card a website design, una a development y otra a  maintenance o algo mas y un loguito a cada una
    return(
        <section  className=" w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800" id="Services">
        <div id="cards" className="px-4 md:px-60 text-center ">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Our Services</h2>
      
            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-400">
              We offer a range of services to meet your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <RevealWrapper  delay={400} origin="bottom"   reset>

                  <div  className="flex flex-col items-center justify-center p-4" >
                    
                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                  <div className={`flex flex-col items-center pb-10`}>
                    <Image src={design} alt="design" height={80} width={80} className="w-24 h-24 mb-3 " />
                      <h3 className="text-2xl font-bold">Website Design</h3>
                        
                          <p className="mt-2 text-gray-500 dark:text-gray-400">              We offer a range of services to meet your needs.
                          </p>

                                          
                    </div>
                    </div>

          
              </div>
              </RevealWrapper>

              <RevealWrapper  delay={700} origin="bottom"   reset>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center p-4">
                
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      
                <div className="flex flex-col items-center pb-10">
                <Image src={development} alt="design" height={80} width={80} className="w-24 h-24 mb-3 " />
                    <h3 className="text-2xl font-bold">Development</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">We develop websites with the latest technologies.</p>

                            
                </div>
            </div>
              </div>
              </div>
                </RevealWrapper>
                <RevealWrapper delay={1000} origin="bottom"   reset>

                <div className="flex flex-col items-center justify-center p-4">
                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
                  <div className="flex flex-col items-center pb-10">
                  <Image src={support} alt="design" height={80} width={80} className="w-24 h-24 mb-3 " />
                      <h3 className="text-2xl font-bold">Maintenance</h3>
                      <p className="mt-2 text-gray-500 dark:text-gray-400">We provide ongoing maintenance and support.</p>

                              
                  </div>
              </div>
                </div>
              </RevealWrapper>
            </div>
        </div>
      </section>
    )
}