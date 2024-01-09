import Link from "next/link";

export default function Page(){

    //Portfolio de projectos a mejorar// capas este diseño se puede utilizar para clientes previos 
    //y usar un slider para los proyectos en ves de estos tres elementos 
    return(

        <section className="w-full py-12 md:py-24 lg:py-32" id="Portfolio">
        <div className=" px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Our Portfolio</h2>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-400">
            Check out some of our recent projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Link className="group" href="#">
              <img
                alt="Project 1"
                className="w-full h-64 object-cover rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="mt-2 text-2xl font-bold">Project 1</h3>
            </Link>
            <Link className="group" href="#">
              <img
                alt="Project 2"
                className="w-full h-64 object-cover rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="mt-2 text-2xl font-bold">Project 2</h3>
            </Link>
            <Link className="group" href="#">
              <img
                alt="Project 3"
                className="w-full h-64 object-cover rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="mt-2 text-2xl font-bold">Project 3</h3>
            </Link>
          </div>
        </div>
      </section>
    )
}