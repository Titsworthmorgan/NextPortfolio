import { getRecos, getProjects } from '@/sanity/sanity-utils'
import React from 'react'
import {
  Card,
  CardContent,
} from "../Components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../Components/ui/avatar"
import { Separator } from "../Components/ui/separator"
import Footer from '../Components/footer/footer'
import Nav from '../Components/nav/nav'
import ProjectCard from '../Components/projectCard/projectCard'

export default async function Home() {
  const reco = await getRecos()
  const projects = await getProjects()
  return (
    <div className="flex justify-center items-center flex-col bg-black">
      <div className="z-20 absolute top-0 left-0 max-w-full h-max mt-4 flex flex-row flex-wrap">
        <Nav />
        <Separator className="my-4 bg-neutral-700 w-screen" />
      </div>
      <div className="h-screen w-full flex justify-center items-center flex-wrap z-10 ">
        <div className="flex justify-center items-center flex-wrap p-2  xl:w-2/5 md:w-9/12 m-3 lg:w-3/5 sm:w-4/5">
          <div className="flex flex-col items-center justify-center mx-4 flex-wrap">
            <Avatar className='w-24 h-24 mb-10'>
              <AvatarImage src='https://avatars.githubusercontent.com/u/102307633?v=4' />
              <AvatarFallback>*Image here*</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white break-words text-center">
            Hi, I&apos;m Morgan Titsworth!
            </h1>
            <Separator className="my-4 bg-neutral-700" />
            <h2 className="text-1xl sm:text-1xl md:text-2xl lg:text-3xl font-bold text-gray-200 break-words text-center">
              I turn interactive designs into tangible, functional code. Dive in
              to see my work!
            </h2>
          </div>
        </div>
      </div>
      <Separator className=" bg-neutral-400 w-11/12 self-center" />
      <div
        className="bg-midnight flex justify-center items-center flex-col w-full gap-5 h-full"
        id="projects"
      >
        <h1 className="text-2xl sm:3xl lg:text-5xl font-bold text-amber-300 mt-4 break-words text-center">
          Featured Projects
        </h1>
        <ProjectCard projects={projects} />
      </div>
      <Separator className="my-4 bg-neutral-400 w-11/12 self-center mt-14" />
      <div
        className="bg-midnight flex justify-center items-center flex-col w-full gap-5 h-full"
        id="recommendations"
      >
        <h1 className="text-2xl sm:3xl lg:text-5xl font-bold text-amber-300">
          Recommendations
        </h1>
        <div className=" flex justify-center items-center flex-col w-full gap-3">
          {reco.map((reco, index) => (
            <Card
              className={`xl:w-2/4 md:w-9/12 mb-3 lg:w-3/5 sm:w-4/5 bg-black text-white flex flex-col items-center justify-center py-5 mx-4 border-gray-500 h-max shadow-blue-400 shadow-md ${
                index % 2 === 0
                  ? "xl:ml-96 lg:ml-48 md:ml-24 sm:ml-12 ml-0"
                  : "xl:mr-96 lg:mr-48 md:mr-24 sm:mr-12 mr-0"
              }`}
              key={reco._id}
            >
              <div className="flex flex-col items-center justify-center w-full flex-1 text-center">
                <CardContent className=" py-0">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl break-word font-bold text-white 2xl:text-xlg">
                  &quot;{reco.content}&quot;
                  </p>
                  <h1 className="mt-10">
                    {reco.name}
                    <br /> {reco.position} at {reco.company}
                  </h1>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
