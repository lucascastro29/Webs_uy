"use client";

import Link from "next/link";
import Icon from "@/public/Icon.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <footer className="bg-white dark:bg-gray-900" style={{ backgroundColor: "#001220" }}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className=" flex mb-6 md:mb-0">
            <Link href={"/home"} id="Home">
              <Image src={Icon} width={110} height={110} alt="icon_image" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 ">
            <div className="h-full grid content-end">
              <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                <Link href="#About" className=" hover:underline">
                  About
                </Link>
              </ul>
            </div>

            <div className="h-full grid content-end">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <Link href="#Services" className="hover:underline">
                  Services
                </Link>
              </ul>
            </div>
            <div className="h-full grid content-end">
              <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                <Link href="#Portfolio" className=" hover:underline">
                  Portfolio
                </Link>
              </ul>
            </div>
            <div className="h-full grid content-end">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <Link href="#Contact" className="hover:underline">
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href="/home" className="hover:underline">
              Websuy™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
