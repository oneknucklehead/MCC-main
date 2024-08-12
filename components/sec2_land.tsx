import Image from "next/image";

import g1 from "@/assets/grid_img/File_1.jpg";
import g2 from "@/assets/grid_img/File_2.jpg";
import g3 from "@/assets/grid_img/File_3.jpeg";
import g4 from "@/assets/grid_img/File_4.jpeg";
import g5 from "@/assets/grid_img/File_5.jpeg";
import g6 from "@/assets/grid_img/File_6.jpeg";
import g7 from "@/assets/grid_img/File_7.jpeg";
import g8 from "@/assets/grid_img/File_8.jpeg";

import newsL from "@/assets/newspaper.svg";
import Link from "next/link";

export default function Sec2Land() {
  return (
    <>
      <div className="w-full h-full mx-auto mt-10">
        <div className="grid grid-cols-6 gap-1">
          <Link
            href="https://gpura.org/collections/mount-carmel-college-bangalore"
            target="_blank"
            className="bg-zinc-100 col-start-1 w-full h-full p-5 text-center hover:bg-zinc-500 hover:text-white"
          >
            Click for the Newsletters Editions
            <Image src={newsL} alt="" className="w-10 mx-auto mt-4"></Image>
          </Link>

          <div className="relative bg-zinc-200 col-start-2 col-span-4 w-full h-full">
            <Image src={g1} alt="" className="object-cover w-full h-[20vh]" />

            <Link
              href="https://gpura.org/collections/mount-carmel-college-bangalore"
              target="_blank"
              className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
            ></Link>
          </div>
          <div className="relative bg-zinc-600 row-span-3 w-full h-full">
            <Image src={g3} alt="" className="object-cover w-full h-full" />
            <Link
              href="https://gpura.org/collections/mount-carmel-college-bangalore"
              target="_blank"
              className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
            ></Link>
          </div>
          <div className=" relative bg-zinc-300 col-start-1 col-end-3 row-span-2 w-full h-full">
            <Image src={g4} alt="" className="object-cover w-full h-full" />
            <Link
              href="https://gpura.org/collections/mount-carmel-college-bangalore"
              target="_blank"
              className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
            ></Link>
          </div>
          <div className="relative bg-zinc-400 col-end-6 col-span-3 w-full h-full">
            <Image src={g5} alt="" className="object-cover w-full h-[20vh]" />
            <Link
              href="https://gpura.org/collections/mount-carmel-college-bangalore"
              target="_blank"
              className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
            ></Link>
          </div>
          <div className="relative bg-zinc-500 col-span-1 w-full h-full">
            <Image src={g6} alt="" className="object-cover w-full h-[20vh]" />
            <Link
              href="https://gpura.org/collections/mount-carmel-college-bangalore"
              target="_blank"
              className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
            ></Link>
          </div>
          <div className="relative bg-zinc-600 col-span-1 w-full h-full">
            <Image src={g7} alt="" className="object-cover w-full h-[20vh]" />
            <Link
              href="https://gpura.org/collections/mount-carmel-college-bangalore"
              target="_blank"
              className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
            ></Link>
          </div>
          <div className="relative bg-zinc-700 col-span-1 w-full h-full">
            <Image src={g8} alt="" className="object-cover w-full h-[20vh]" />
            <Link
              href="https://gpura.org/collections/mount-carmel-college-bangalore"
              target="_blank"
              className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
            ></Link>
          </div>
        </div>
      </div>
    </>
  );
}
