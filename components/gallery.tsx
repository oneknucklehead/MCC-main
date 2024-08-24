import Image from "next/image";

import ga1 from "@/assets/gallery/File_1.jpeg";
import ga2 from "@/assets/gallery/File_2.jpeg";
import ga3 from "@/assets/gallery/File_3.jpeg";
import ga4 from "@/assets/gallery/File_4.jpeg";
import ga5 from "@/assets/gallery/File_5.jpeg";
import ga6 from "@/assets/gallery/File_6.jpeg";
import ga7 from "@/assets/gallery/File_7.jpeg";
import ga8 from "@/assets/gallery/File_8.jpeg";
import ga9 from "@/assets/gallery/File_9.jpeg";
import ga10 from "@/assets/gallery/File_10.jpeg";
import ga11 from "@/assets/gallery/File_11.jpeg";
import ga12 from "@/assets/gallery/File_12.jpeg";
import ga13 from "@/assets/gallery/File_13.jpeg";
import ga14 from "@/assets/gallery/File_14.jpeg";
import ga15 from "@/assets/gallery/File_15.jpeg";
import ga16 from "@/assets/gallery/File_16.jpeg";
import ga17 from "@/assets/gallery/File_17.jpeg";
import ga18 from "@/assets/gallery/File_18.jpeg";
import ga19 from "@/assets/gallery/File_19.jpeg";
import ga20 from "@/assets/gallery/File_20.jpeg";
import ga21 from "@/assets/gallery/File_21.jpeg";
import ga22 from "@/assets/gallery/File_22.jpeg";
import ga23 from "@/assets/gallery/File_23.jpeg";
import ga24 from "@/assets/gallery/File_24.jpeg";
import ga25 from "@/assets/gallery/File_25.jpeg";
import ga26 from "@/assets/gallery/File_26.jpeg";
import ga27 from "@/assets/gallery/File_27.jpeg";
import ga28 from "@/assets/gallery/File_28.jpeg";
import ga29 from "@/assets/gallery/File_29.jpeg";
import ga30 from "@/assets/gallery/File_30.jpeg";
import ga31 from "@/assets/gallery/File_31.jpeg";
import ga32 from "@/assets/gallery/File_32.jpeg";
import ga33 from "@/assets/gallery/File_33.jpeg";

export default function Gallery() {
  const images = [
    ga1,
    ga2,
    ga3,
    ga4,
    ga5,
    ga6,
    ga7,
    ga8,
    ga9,
    ga10,
    ga11,
    ga12,
    ga13,
    ga14,
    ga15,
    ga16,
    ga17,
    ga18,
    ga19,
    ga20,
    ga21,
    ga22,
    ga23,
    ga24,
    ga25,
    ga26,
    ga27,
    ga28,
    ga29,
    ga30,
    ga31,
    ga32,
    ga33,
  ];

  return (
    <div className="mt-32">
      <div className=" pt-10 pb-16 ">
        <h1 className="text-black text-center text-4xl">Peak into our past</h1>
        <h1 className="text-xl py-4 text-center">Credits to MCC archives</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-80">
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
