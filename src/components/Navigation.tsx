import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <>
      <main className=" sticky top-0 bg-white">
        <div className="overflow-hidden  shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6 grid grid-cols-1 grid-cols-2">
            <Link href="" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
              </svg>
              <p className="uppercase text-sm leading-none font-bold tracking-wider">
                CV Application
              </p>
            </Link>
            <ul className="flex items-center lg:justify-end gap-4">
              <li className="">
                <Link href="" className="text-sm leading-none font-medium hover:underline">
                Project Source
                </Link>
              </li>
              <li className="">
                <Link href="" className="text-sm leading-none font-medium hover:underline">
                GitHub Code
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
