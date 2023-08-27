import { getRecos, getProjects } from '@/sanity/sanity-utils'
import React from 'react'
import Footer from '../Components/footer/footer'
import Nav from '../Components/nav/nav'
import ProjectCard from '../Components/projectCard/projectCard'
import profilePicture from '../public/Assets/Morgan-1003-LinkedIn.jpg'
import tailwind from '../public/Assets/tailwind.png'
import typescript from '../public/Assets/Typescript.png'
import sanity from '../public/Assets/Sanity.png'
import firebase from '../public/Assets/firebase.png'
import gcp from '../public/Assets/gcp.png'
import git from '../public/Assets/git.png'
import Image from 'next/image'
//

export default async function Home() {
  const reco = await getRecos()
  const projects = await getProjects()
  return (
    <div className="flex justify-center items-center flex-col bg-black">
      <div className="z-20 absolute top-0 left-0 max-w-full h-max mt-4 flex flex-row flex-wrap border-b border-gray-500 w-full pb-4 ">
        <Nav />
      </div>
      <div className='flex flex-col justify-around items-center h-screen w-full'>
        <div className=" w-full flex justify-center items-center flex-wrap">
          <div className="flex justify-center items-center flex-wrap p-2  xl:w-2/5 md:w-9/12 m-3 lg:w-3/5 sm:w-4/5">
            <div className="flex flex-col items-center justify-center mx-4 flex-wrap">
              <div className="w-32 h-32 relative overflow-hidden rounded-full">
                <Image src={profilePicture}  alt="Profile Image" layout="fill" objectFit="cover" />
              </div>
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white break-words text-center">
                Hi, I&apos;m Morgan Titsworth!
              </h1>
              <div className='border-b border-gray-500 w-10/12 m-3'></div>
              <h2 className="text-1xl sm:text-1xl md:text-2xl lg:text-3xl font-bold text-gray-200 break-words text-center">
                I turn interactive designs into functional code. Dive in
                to see my work!
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap p-2 w-4/5 gap-5 -mt-16">
            <div className="w-14 h-14 relative overflow-hidden transition-all duration-250 transform hover:scale-110">
                <Image src={typescript}  alt="Profile Image" layout="fill" objectFit="cover" quality={100} />
            </div>
            <div className="w-14 h-14 relative overflow-hidden transition-all duration-250 transform hover:scale-110">
                <Image src={sanity}  alt="Profile Image" layout="fill" objectFit="cover" quality={100} />
            </div>
            <div className="w-12 h-16 relative overflow-hidden transition-all duration-250 transform hover:scale-110">
                <Image src={firebase}  alt="Profile Image" layout="fill" objectFit="cover" quality={100}/>
            </div>
            <div className="w-14 h-14 relative overflow-hidden transition-all duration-250 transform hover:scale-110">
                <Image src={gcp}  alt="Profile Image" layout="fill" objectFit="cover" quality={100}/>
            </div>
            <div className="w-14 h-14 relative overflow-hidden transition-all duration-250 transform hover:scale-110">
                <Image src={git}  alt="Profile Image" layout="fill" objectFit="cover" quality={100}/>
            </div>
            <div className="w-14 h-14 relative overflow-hidden transition-all duration-250 transform hover:scale-110">
                <Image src={tailwind}  alt="Profile Image" layout="fill" objectFit="cover" quality={100}/>
            </div>
        </div>
      </div>
      <div
        className="bg-midnight flex justify-center items-center flex-col w-full gap-5"
        id="projects"
      >
        <div className='border-b border-gray-500 w-10/12'></div>
        <h1 className="text-2xl sm:3xl lg:text-5xl font-bold text-amber-300 break-words text-center mt-16">
          Featured Projects
        </h1>
        <ProjectCard projects={projects} />
      </div>
      <div className='border-b border-gray-500 w-10/12'></div>
      <div
        className="bg-midnight flex justify-around items-center flex-col w-full my-6"
        id="recommendations"
      >
        <div className='mb-10 mt-16'>
          <h1 className="text-2xl sm:3xl lg:text-5xl font-bold text-amber-300">
            Recommendations
          </h1>
        </div>
        <div className=" flex justify-center items-center flex-col w-full gap-20 mb-20">
          {reco.map((reco, index) => (
            <div
              className={`xl:w-2/4 md:w-9/12 lg:w-3/5 sm:w-4/5 bg-black text-white flex flex-col items-center justify-center mx-4 border-gray-500 h-3/4 shadow-blue-400 shadow-md ${
                index % 2 === 0
                  ? "xl:ml-[33%] lg:ml-48 md:ml-24 sm:ml-12 ml-0"
                  : "xl:mr-[33%] lg:mr-48 md:mr-24 sm:mr-12 mr-0"
              } border-gray-500 border-solid border-2 rounded-[12px]`}
              key={reco._id}
            >
              <div className="flex flex-col items-center justify-start w-full flex-1 text-center">
                <div className=" py-0">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl break-word font-bold text-white 2xl:text-xlg">
                  &quot;{reco.content}&quot;
                  </p>
                  <h1 className="mt-10">
                    {reco.name}
                    <br /> {reco.position} at {reco.company}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='border-b border-gray-500 w-10/12'></div>
      <Footer />
    </div>
  );
}
