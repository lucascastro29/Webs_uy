import Link from "next/link";
import styles from "@/app/ui/home.module.css";
export default function Page() {
  //aca iria la seccion inicial que apareceria al principio de la pagina y tendria que tener animaciones y cosas bonitas

  return (
    <section
      className="w-full py-48 md:py-48 lg:py-48 bg-gray-100 dark:bg-gray-800"
      style={{ backgroundColor: "#001220" }}
    >
      <div className="px-4 md:px-6">
        {/*<div className={styles.circles}></div>*/}
        <div className="flex flex-col items-center space-y-4 text-center ">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white ">
              Building Your Digital Presence
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We create stunning websites and applications that help you stand out in the digital
              world.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-4 ">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Get Started
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
