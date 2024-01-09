
export default function Page(){

    //Serccion de servicios a mejorar, pense en agregarle una card a website design, una a development y otra a  maintenance o algo mas y un loguito a cada una
    return(
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-300 dark:bg-gray-800" id="services">
        <div className="px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Our Services</h2>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-400">
            We offer a range of services to meet your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center justify-center p-4">
              {/*<FacebookIcon className="h-12 w-12 mb-4" />  ---esto hay que borrarlo y agregar un logo correspondiente  */}
              <h3 className="text-2xl font-bold">Website Design</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">We design beautiful and functional websites.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              {/*<CodeIcon className="h-12 w-12 mb-4" /> ---esto hay que borrarlo y agregar un logo correspondiente*/}
              <h3 className="text-2xl font-bold">Development</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">We develop websites with the latest technologies.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
             {/* <ActivityIcon className="h-12 w-12 mb-4" />  ---esto hay que borrarlo y agregar un logo correspondiente*/}
              <h3 className="text-2xl font-bold">Maintenance</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">We provide ongoing maintenance and support.</p>
            </div>
          </div>
        </div>
      </section>
    )
}