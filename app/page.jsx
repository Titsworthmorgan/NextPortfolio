import Image from 'next/image'
import { getProjects, getRecos } from '@/sanity/sanity-utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
//using tailwind for all styles
 
export default async function Home() {
  const reco = await getRecos()
  const projects = await getProjects()
  return (
    <>
      <div className='h-screen w-full flex justify-center items-center flex-wrap'>
        <div className='flex justify-center items-center flex-wrap'>
          <Image src={'/../public/Assets/Morgan-1003-LinkedIn.jpg'} alt='Picture of morgan' width={200} height={200} quality={100} className='rounded-[5px]'/>
          <div className='flex flex-col items-center justify-center mx-4'>
            <h1 className='text-5xl font-bold text-amber-400'>Morgan Titsworth</h1>
            <Separator className="my-4 bg-neutral-700" />
            <h2 className='text-3xl font-bold text-gray-300'>Fullstack developer</h2>
          </div>
        </div>
      </div>
      <div className="bg-midnight flex justify-center items-center flex-wrap w-full gap-5 h-full">
        {projects.map((project) => (
              <Card className='bg-black text-white w-min flex flex-col items-center justify-center py-2 border-gray-500 h-max' key={project._id}>
                <CardHeader  className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                  <CardTitle className='text-3xl font-bold mb-5 text-amber-400'>{project.name}</CardTitle>
                  <Image src={`${project.imageUrl}`} className="relative w-25 h-25" alt='Picture of the project' width={300} height={300} quality={100}/>
                </CardHeader>
                <CardContent>
                  <p>{project.content}</p>
                </CardContent>
                <CardFooter>
                  <Link className={'w-20 bg-white hover:bg-black text-black hover:text-white text-center rounded-[5px]'} href={`${project.url}`}>See here</Link>
                </CardFooter>
              </Card>
        ))}
      </div>
    </>
  );
}
