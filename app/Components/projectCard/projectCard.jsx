import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../Components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../Components/ui/accordion";
import Link from "next/link"
import Image from "next/image";
import { Separator } from "../../../Components/ui/separator"

export default async function ProjectCard(props) {
  let projects = props.projects;
  return (
    <div className=" flex justify-center items-center flex-row w-full flex-wrap">
      {projects.map((project) => (
        <Card
          className="xl:w-1/4 md:w-9/12 m-3 lg:w-3/5 sm:w-4/5 bg-black text-white flex flex-col items-center justify-center py-2 border-gray-500 h-max min-h-[600px] shadow-yellow-400 shadow-md"
          key={project._id}
        >
          <CardHeader className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <CardTitle className="sm:text-2xl md:text-3xl lg:text-3xl break-all text-3xl font-bold mb-5 text-white 2xl:text-xlg">
              {project.name}
            </CardTitle>
            <Image
              src={`${project.imageUrl}`}
              className="relative w-fit h-fit"
              alt="Picture of the project"
              width={300}
              height={300}
              quality={100}
            />
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{project.content}</p>
            <Accordion type="single" collapsible className="my-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>Tech Stack</AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center justify-start w-max  flex-wrap">
                    {project.tech.map((tech, index) => (
                      <React.Fragment key={tech._key}>
                        <p>{tech.label}</p>
                        {index < project.tech.length - 1 && (
                          <Separator
                            orientation="vertical"
                            className="bg-neutral-500 h-2 mx-2"
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter>
            <Link
              className={
                "w-max bg-white hover:bg-black text-black hover:text-white hover:border-2 hover:p-1.5 hover:border-white text-center rounded-[5px] p-2 2xl:text-base xl:text font-medium"
              }
              href={`${project.url}`}
              target="_blank"
            >
              Visit Website
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
