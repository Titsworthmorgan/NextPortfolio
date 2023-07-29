import Image from 'next/image'
import { getProjects, getRecos } from '@/sanity/sanity-utils'
import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { innerHTML } from '../public/Assets/particles.js'
//using tailwind for all styles
 
export default async function Home() {
  const reco = await getRecos()
  const projects = await getProjects()
  return (
    <div className="flex justify-center items-center flex-col">
        <Accordion type="single" collapsible  className='z-20 absolute top-0 left-0 text-white mx-4 my-5'>
          <AccordionItem value="item-1">
            <AccordionTrigger>Get in touch!</AccordionTrigger>
            <AccordionContent>
              <Link href='https://www.linkedin.com/in/morgan-titsworth/' target='_blank'>LinkedIn</Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      <di dangerouslySetInnerHTML={{ __html: innerHTML }} className="z-0"></di>
      <div className="h-screen w-full flex justify-center items-center flex-wrap z-10 ">
        <div className="flex justify-center items-center flex-wrap border border-gray-500 rounded-[10px] p-2 m-2 bg-black shadow-purple-400 shadow-md">
          <Image
            src={"/../public/Assets/Morgan-1003-LinkedIn.jpg"}
            alt="Picture of morgan"
            width={200}
            height={200}
            quality={100}
            className="rounded-[5px]"
          />
          <div className="flex flex-col items-center justify-center mx-4 flex-wrap">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-300 break-words text-center">
              Morgan Titsworth
            </h1>
            <Separator className="my-4 bg-neutral-700" />
            <h2 className="text-1xl sm:text-1xl md:text-2xl lg:text-3xl font-bold text-gray-300 break-words text-center">
              Fullstack developer
            </h2>
          </div>
        </div>
      </div>
      <Separator className="my-4 bg-neutral-400 w-11/12 self-center" />
      <div className="bg-midnight flex justify-center items-center flex-col w-full gap-5 h-full">
        <h1 className="text-4xl lg:text-5xl font-bold text-amber-300 mt-5 break-words text-center">Featured Projects</h1>
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
      </div>
      <Separator className="my-4 bg-neutral-400 w-11/12 self-center mt-14" />
      <div className="bg-midnight flex justify-center items-center flex-col w-full gap-5 h-full">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-amber-300 mt-5">Recommendations</h1>
        <div className=" flex justify-center items-center flex-col w-full gap-3">
          {reco.map((reco, index) => (
            <Card
              className={`xl:w-2/4 md:w-9/12 mb-3 lg:w-3/5 sm:w-4/5 bg-black text-white flex flex-col items-center justify-center py-5 mx-4 border-gray-500 h-max shadow-blue-400 shadow-md ${index % 2 === 0 ? 'xl:ml-96 lg:ml-48 md:ml-24 sm:ml-12 ml-0' : 'xl:mr-96 lg:mr-48 md:mr-24 sm:mr-12 mr-0'}`}
              key={reco._id}
            >
              <div className="flex flex-col items-center justify-center w-full flex-1 text-center">
                <CardContent className=' py-0'>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl break-word font-bold text-white 2xl:text-xlg">"{reco.content}"</p>
                  <h1 className='mt-10'>{reco.name}<br /> {reco.position} at {reco.company}</h1>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        </div>
    </div>
  );
}
