import React from "react";
import Image from "next/image";

import g1 from "@/assets/grid_img/File_1.jpg";
import g2 from "@/assets/grid_img/File_2.jpg";
import g3 from "@/assets/grid_img/File_3.jpeg";
import g4 from "@/assets/grid_img/File_4.jpeg";
import g5 from "@/assets/grid_img/File_5.jpeg";
import g6 from "@/assets/grid_img/File_6.jpeg";
import g7 from "@/assets/grid_img/File_7.jpeg";
import g8 from "@/assets/grid_img/File_8.jpeg";
import Link from "next/link";

export default function ImageGrid() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                <Link
                  href="/gallery"
                  className="group items-center justify-center overflow-hidden"
                >
                  <div className="relative flex flex-col overflow-hidden px-4 pb-4 pt-40">
                    <Image
                      src={g3}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                </Link>
                <h3 className="relative col-span-1 flex justify-center items-center text-2xl h-full text-center font-medium text-black xs:text-xl md:text-3xl">
                  Gallery
                  <div className="absolute -left-5 -rotate-90 h-0 w-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent  border-b-[15px] border-b-white"></div>
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                <h3 className="col-span-1 relative flex justify-center items-center text-2xl h-full text-center font-medium text-black xs:text-xl md:text-3xl">
                  Team
                  <div className="absolute -right-[22px] z-10 rotate-90 h-0 w-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent  border-b-[15px] border-b-white"></div>
                </h3>
                <Link
                  href="/team"
                  className="group items-center justify-center overflow-hidden"
                >
                  <div className="relative flex flex-col overflow-hidden px-4 pb-4 pt-40">
                    <Image
                      src={g2}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <Link
                href=""
                className="group relative flex flex-col justify-center items-center overflow-hidden flex-grow"
              >
                <Image
                  src={g1}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div> */}
                {/* <h3 className="z-10 text-2xl font-medium text-white absolute xs:text-xl md:text-3xl">
                  Wines
                </h3> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <Link
                href=""
                className="group relative flex flex-col justify-center items-center overflow-hidden flex-grow"
              >
                <Image
                  src={g4}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div> */}
                {/* <h3 className="z-10 text-2xl font-medium text-white absolute xs:text-xl md:text-3xl">
                  Wines
                </h3> */}
              </Link>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                <Link
                  href="/gallery"
                  className="group items-center justify-center overflow-hidden"
                >
                  <div className="relative flex flex-col overflow-hidden px-4 pb-4 pt-40">
                    <Image
                      src={g5}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                </Link>
                <h3 className="relative col-span-1 flex justify-center items-center text-2xl h-full text-center font-medium text-black xs:text-xl md:text-3xl">
                  Gallery
                  <div className="absolute -left-5 -rotate-90 h-0 w-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent  border-b-[15px] border-b-white"></div>
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                <h3 className="col-span-1 relative flex justify-center items-center text-2xl h-full text-center font-medium text-black xs:text-xl md:text-3xl">
                  {/* Team */}
                  <div className="absolute -right-[22px] z-10 rotate-90 h-0 w-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent  border-b-[15px] border-b-white"></div>
                </h3>
                <Link
                  // href="/team"
                  href=""
                  className="group items-center justify-center overflow-hidden"
                >
                  <div className="relative flex flex-col overflow-hidden px-4 pb-4 pt-40">
                    <Image
                      src={g6}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                <Link
                  href="/gallery"
                  className="group items-center justify-center overflow-hidden"
                >
                  <div className="relative flex flex-col overflow-hidden px-4 pb-4 pt-40">
                    <Image
                      src={g3}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                </Link>
                <h3 className="relative col-span-1 flex justify-center items-center text-2xl h-full text-center font-medium text-black xs:text-xl md:text-3xl">
                  Gallery
                  <div className="absolute -left-5 -rotate-90 h-0 w-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent  border-b-[15px] border-b-white"></div>
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                <h3 className="col-span-1 relative flex justify-center items-center text-2xl h-full text-center font-medium text-black xs:text-xl md:text-3xl">
                  Team
                  <div className="absolute -right-[22px] z-10 rotate-90 h-0 w-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent  border-b-[15px] border-b-white"></div>
                </h3>
                <Link
                  href="/team"
                  className="group items-center justify-center overflow-hidden"
                >
                  <div className="relative flex flex-col overflow-hidden px-4 pb-4 pt-40">
                    <Image
                      src={g2}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <Link
                href=""
                className="group relative flex flex-col justify-center items-center overflow-hidden flex-grow"
              >
                <Image
                  src={g1}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <h3 className="z-10 text-2xl font-medium text-white absolute xs:text-xl md:text-3xl">
                  Wines
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

// import newsL from "@/assets/newspaper.svg";
// import Link from "next/link";

// export default function Sec2Land() {
//   return (
//     <>
//       <div className="w-full h-full mx-auto mt-10">
//         <div className="grid grid-cols-6 gap-1">
//           <Link
//             href="https://gpura.org/collections/mount-carmel-college-bangalore"
//             target="_blank"
//             className="bg-zinc-100 col-start-1 w-full h-full p-5 text-center hover:bg-zinc-500 hover:text-white"
//           >
//             Click for the Newsletters Editions
//             <Image src={newsL} alt="" className="w-10 mx-auto mt-4"></Image>
//           </Link>

//           <div className="relative bg-zinc-200 col-start-2 col-span-4 w-full h-full">
//             <Image src={g1} alt="" className="object-cover w-full h-[20vh]" />

//             <Link
//               href="https://gpura.org/collections/mount-carmel-college-bangalore"
//               target="_blank"
//               className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
//             ></Link>
//           </div>
//           <div className="relative bg-zinc-600 row-span-3 w-full h-full">
//             <Image src={g3} alt="" className="object-cover w-full h-full" />
//             <Link
//               href="https://gpura.org/collections/mount-carmel-college-bangalore"
//               target="_blank"
//               className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
//             ></Link>
//           </div>
//           <div className=" relative bg-zinc-300 col-start-1 col-end-3 row-span-2 w-full h-full">
//             <Image src={g4} alt="" className="object-cover w-full h-full" />
//             <Link
//               href="https://gpura.org/collections/mount-carmel-college-bangalore"
//               target="_blank"
//               className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
//             ></Link>
//           </div>
//           <div className="relative bg-zinc-400 col-end-6 col-span-3 w-full h-full">
//             <Image src={g5} alt="" className="object-cover w-full h-[20vh]" />
//             <Link
//               href="https://gpura.org/collections/mount-carmel-college-bangalore"
//               target="_blank"
//               className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
//             ></Link>
//           </div>
//           <div className="relative bg-zinc-500 col-span-1 w-full h-full">
//             <Image src={g6} alt="" className="object-cover w-full h-[20vh]" />
//             <Link
//               href="https://gpura.org/collections/mount-carmel-college-bangalore"
//               target="_blank"
//               className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
//             ></Link>
//           </div>
//           <div className="relative bg-zinc-600 col-span-1 w-full h-full">
//             <Image src={g7} alt="" className="object-cover w-full h-[20vh]" />
//             <Link
//               href="https://gpura.org/collections/mount-carmel-college-bangalore"
//               target="_blank"
//               className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
//             ></Link>
//           </div>
//           <div className="relative bg-zinc-700 col-span-1 w-full h-full">
//             <Image src={g8} alt="" className="object-cover w-full h-[20vh]" />
//             <Link
//               href="https://gpura.org/collections/mount-carmel-college-bangalore"
//               target="_blank"
//               className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "
//             ></Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
