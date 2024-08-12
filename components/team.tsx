// pages/teams.tsx
import { StaticImageData } from "next/image";
import Image1 from "@/assets/default-profile.svg";
import Image2 from "@/assets/default-profile.svg";

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
    name: "John Doe",
    designation: "Developer",
    otherInfo: "Expert in JavaScript and React",
  },
  {
    id: 2,
    image: Image2,
    name: "Jane Smith",
    designation: "Designer",
    otherInfo: "Specialist in UI/UX design",
  },
  {
    id: 1,
    image: Image1,
    name: "John Doe",
    designation: "Developer",
    otherInfo: "Expert in JavaScript and React",
  },
  {
    id: 2,
    image: Image2,
    name: "Jane Smith",
    designation: "Designer",
    otherInfo: "Specialist in UI/UX design",
  },
  {
    id: 1,
    image: Image1,
    name: "John Doe",
    designation: "Developer",
    otherInfo: "Expert in JavaScript and React",
  },
  {
    id: 2,
    image: Image2,
    name: "Jane Smith",
    designation: "Designer",
    otherInfo: "Specialist in UI/UX design",
  },
  {
    id: 1,
    image: Image1,
    name: "John Doe",
    designation: "Developer",
    otherInfo: "Expert in JavaScript and React",
  },
  {
    id: 2,
    image: Image2,
    name: "Jane Smith",
    designation: "Designer",
    otherInfo: "Specialist in UI/UX design",
  },
  {
    id: 1,
    image: Image1,
    name: "John Doe",
    designation: "Developer",
    otherInfo: "Expert in JavaScript and React",
  },
  {
    id: 1,
    image: Image1,
    name: "John Doe",
    designation: "Developer",
    otherInfo: "Expert in JavaScript and React",
  },
  {
    id: 2,
    image: Image2,
    name: "Jane Smith",
    designation: "Designer",
    otherInfo: "Specialist in UI/UX design",
  },
  {
    id: 1,
    image: Image1,
    name: "John Doe",
    designation: "Developer",
    otherInfo: "Expert in JavaScript and React",
  },
  {
    id: 2,
    image: Image2,
    name: "Jane Smith",
    designation: "Designer",
    otherInfo: "Specialist in UI/UX design",
  },
  {
    id: 1,
    image: Image1,
    name: "John Doe",
    designation: "Developer",
    otherInfo: "Expert in JavaScript and React",
  },
  {
    id: 2,
    image: Image2,
    name: "Jane Smith",
    designation: "Designer",
    otherInfo: "Specialist in UI/UX design",
  },
  {
    id: 1,
    image: Image1,
    name: "John Doe",
    designation: "Developer",
    otherInfo: "Expert in JavaScript and React",
  },
  {
    id: 2,
    image: Image2,
    name: "Jane Smith",
    designation: "Designer",
    otherInfo: "Specialist in UI/UX design",
  },
  {
    id: 1,
    image: Image1,
    name: "John Doe",
    designation: "Developer",
    otherInfo: "Expert in JavaScript and React",
  },
];

const TeamsPage = () => {
  return (
    <div className="container mx-auto py-8 mt-[10%]">
      <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={member.image.src}
              alt={member.name}
              className="w-full h-48 object-contain bg-zinc-300"
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
  );
};

export default TeamsPage;
