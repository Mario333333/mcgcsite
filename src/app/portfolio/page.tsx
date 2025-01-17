import { projects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";

export default async function Portfolio() {
  return (
    <div className="px-10 py-20  min-h-screen">
      <h1 className="text-4xl font-extrabold mb-2">Projects </h1><span className="font-bold">Click on any project to go to the site</span>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  gap-10 mb-10 mt-5">
        {projects.map((project, index) => (
          <div key={index} className="rounded-md overflow-hidden fade-in">
            <Link className=" max-h-4" href={`${project.link}`}>
              <Image
                src={`/imgs/projects/${project.images[0]}`}
                alt={"portfolio image "}
                className="w-full object-contain rounded  sm:h-80"
                width={100}
                height={300}
              />
            </Link>

            <div className="p-4 flex flex-col">
              <Link className="font-extrabold hover:text-blue-600" href={`${project.link}`}>
                {project.title}
              </Link>
              <p className="text-sm font-semibold ">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
