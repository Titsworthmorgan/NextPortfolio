import React from "react";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectCard(props) {
  let projects = props.projects;
  return (
    <div className=" flex justify-center items-center flex-row w-full flex-wrap">
      {projects.map((project) => (
        <div
          className="xl:w-1/4 md:w-9/12 m-3 lg:w-3/5 sm:w-4/5 bg-black text-white flex flex-col items-center justify-center py-2 border-gray-500 border-solid border-2 rounded-[12px] h-max min-h-[600px] shadow-yellow-400 shadow-md"
          key={project._id}
        >
          <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="sm:text-2xl md:text-3xl lg:text-3xl break-all text-3xl font-bold mb-5 text-white 2xl:text-xlg">
              {project.name}
            </div>
            <Image
              src={`${project.imageUrl}`}
              className="relative w-fit h-fit"
              alt="Picture of the project"
              width={300}
              height={300}
              quality={100}
            />
          </div>

          <div>
            <p className="text-gray-300">{project.content}</p>
            <div className="flex items-center self-center justify-center flex-wrap my-7 w-full gap-3">
              {project.tech.map((tech) => (
                <p key={tech._key}>{tech.label}</p>
              ))}
            </div>
          </div>
          <div>
            <Link
              className={
                "w-max bg-white hover:bg-black text-black hover:text-white hover:border-2 hover:p-1.5 hover:border-white text-center rounded-[5px] p-2 2xl:text-base xl:text font-medium"
              }
              href={`${project.url}`}
              target="_blank"
            >
              Visit Website
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
