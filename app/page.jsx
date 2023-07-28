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
import Link from "next/link"
//using tailwind instead of typical styles
 
export default async function Home() {
  const reco = await getRecos()

  const projects = await getProjects()
  console.log(projects)
  return (
    <div className="bg-midnight flex justify-center items-center flex-wrap w-full gap-5 h-full">
      {projects.map((project) => (
            <Card className='bg-black text-white w-min flex flex-col items-center justify-center py-2 border-gray-500 h-max' key={project._id}>
              <CardHeader  className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <CardTitle className='text-3xl font-bold'>{project.name}</CardTitle>
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
  );
}
