// pages/teams.tsx
import Image, { StaticImageData } from "next/image";
import Image1 from "@/assets/team1.jpg";
import Image2 from "@/assets/team2.jpg";
import ImageHierarchy from "@/assets/hierarchy.png";

interface TeamMember {
  id: number;
  image: StaticImageData;
  name: string;
  designation: string;
  otherInfo: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    image: Image1,
    name: "MRS. REVATHY ASHOK",
    designation: "President MCCAA",
    otherInfo:
      "The President of MCCAA, is an active consultant working with mid- and early-stage companies, helping them build value and scale. She is an angel investor with investments in over 15 start‐ups and works closely with her investee companies on various strategic matters. She is also the CEO of BPAC.",
  },
  {
    id: 2,
    image: Image2,
    name: "Mrs MAYA SHARMA ",
    designation: "Vice-President of MCCAA",
    otherInfo:
      "The Vice-President of MCCAA, is a well-known journalist who is currently the Executive Editor, South, at NDTV.",
  },
  // {
  //   id: 1,
  //   image: Image1,
  //   name: "John Doe",
  //   designation: "Developer",
  //   otherInfo: "Expert in JavaScript and React",
  // },
  // {
  //   id: 2,
  //   image: Image2,
  //   name: "Jane Smith",
  //   designation: "Designer",
  //   otherInfo: "Specialist in UI/UX design",
  // },
  // {
  //   id: 1,
  //   image: Image1,
  //   name: "John Doe",
  //   designation: "Developer",
  //   otherInfo: "Expert in JavaScript and React",
  // },
  // {
  //   id: 2,
  //   image: Image2,
  //   name: "Jane Smith",
  //   designation: "Designer",
  //   otherInfo: "Specialist in UI/UX design",
  // },
  // {
  //   id: 1,
  //   image: Image1,
  //   name: "John Doe",
  //   designation: "Developer",
  //   otherInfo: "Expert in JavaScript and React",
  // },
  // {
  //   id: 2,
  //   image: Image2,
  //   name: "Jane Smith",
  //   designation: "Designer",
  //   otherInfo: "Specialist in UI/UX design",
  // },
  // {
  //   id: 1,
  //   image: Image1,
  //   name: "John Doe",
  //   designation: "Developer",
  //   otherInfo: "Expert in JavaScript and React",
  // },
  // {
  //   id: 1,
  //   image: Image1,
  //   name: "John Doe",
  //   designation: "Developer",
  //   otherInfo: "Expert in JavaScript and React",
  // },
  // {
  //   id: 2,
  //   image: Image2,
  //   name: "Jane Smith",
  //   designation: "Designer",
  //   otherInfo: "Specialist in UI/UX design",
  // },
  // {
  //   id: 1,
  //   image: Image1,
  //   name: "John Doe",
  //   designation: "Developer",
  //   otherInfo: "Expert in JavaScript and React",
  // },
  // {
  //   id: 2,
  //   image: Image2,
  //   name: "Jane Smith",
  //   designation: "Designer",
  //   otherInfo: "Specialist in UI/UX design",
  // },
  // {
  //   id: 1,
  //   image: Image1,
  //   name: "John Doe",
  //   designation: "Developer",
  //   otherInfo: "Expert in JavaScript and React",
  // },
  // {
  //   id: 2,
  //   image: Image2,
  //   name: "Jane Smith",
  //   designation: "Designer",
  //   otherInfo: "Specialist in UI/UX design",
  // },
  // {
  //   id: 1,
  //   image: Image1,
  //   name: "John Doe",
  //   designation: "Developer",
  //   otherInfo: "Expert in JavaScript and React",
  // },
  // {
  //   id: 2,
  //   image: Image2,
  //   name: "Jane Smith",
  //   designation: "Designer",
  //   otherInfo: "Specialist in UI/UX design",
  // },
  // {
  //   id: 1,
  //   image: Image1,
  //   name: "John Doe",
  //   designation: "Developer",
  //   otherInfo: "Expert in JavaScript and React",
  // },
];

const TeamsPage = () => {
  return (
    <div>
      <div className="container mx-auto py-8 mt-[10%]">
        <h1 className="text-3xl font-bold text-center mb-14">Office Bearers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={member.image.src}
                alt={member.name}
                className="w-full h-80 object-center object-cover bg-zinc-300"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{member.name}</h2>
                <p className="text-gray-600">{member.designation}</p>
                <p className="text-gray-800 mt-2">{member.otherInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8 flex items-center justify-center">
        <Image src={ImageHierarchy} alt="hierarchy" />
      </div>
    </div>
  );
};

export default TeamsPage;
