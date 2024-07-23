import { projects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";

export default async function CV() {
  return (
    <div className="px-10 my-20">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  gap-10 mb-10">

{
  projects.map((project, index) => (
    <div key={index} className="rounded-md overflow-hidden fade-in">
          <Link className="" href={`${project.link}`}>
            <Image
              src={`/imgs/projects/${project.images[0]}`}
              alt={"portfolio image "}
              className="w-full object-cover rounded"
              width={500}
              height={500}
            />
          </Link>

          <div className="p-4 flex flex-col">
            <p className="text-sm font-semibold text-gray-500">
              {project.description}
            </p>
            <Link className="hover:text-blue-600" href={`${project.link}`}>
              {project.title}
            </Link>
          </div>
        </div>
  ))
}

        

     
      </div>
    </div>
  );
}
