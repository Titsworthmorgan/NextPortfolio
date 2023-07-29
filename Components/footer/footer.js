import { Separator } from "../ui/separator"
import Link from "next/link"
export default function Footer(){
    return (
      <div className="w-full h-fit flex flex-col items-center justify-center mt-10 relative">
        <Separator className="my-4 bg-neutral-400  w-5/6" />
        <h1 className="text-4xl lg:text-5xl font-bold text-amber-300 text-center">
          Connect with me!
        </h1>
        <div className="flex flex-row items-center justify-around w-2/4 text-white flex-wrap">
          <div className=" flex flex-col items-center justify-center">
            <h1 className="text-xl lg:text-2xl font-bold text-amber-300 my-4">
                Socials
            </h1>
            <Link
              className={
                "w-max bg-black text-neutral-300 hover:text-white   text-center p-1 2xl:text-base xl:text font-medium"
              }
              href={`https://www.linkedin.com/in/morgan-titsworth/`}
              target="_blank"
            >
              linkedIn
            </Link>
            <Link
              className={
                "w-max bg-black text-neutral-300 hover:text-white   text-center p-1 2xl:text-base xl:text font-medium"
              }
              href={`mailto:titsworthmorgan@gmail.com`}
              target="_blank"
            >
              Email
            </Link>
            <p className={
                "w-max bg-black text-neutral-300 hover:text-white   text-center p-1 2xl:text-base xl:text font-medium cursor-default"
              }>971-219-1691</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-6">
          <Link
              className={
                "w-max bg-black text-neutral-300 hover:text-white   text-center p-1 2xl:text-base xl:text font-medium"
              }
              href='#projects'
            >
              Projects
          </Link>
          <Link
              className={
                "w-max bg-black text-neutral-300 hover:text-white   text-center p-1 2xl:text-base xl:text font-medium"
              }
              href='#recommendations'
            >
              Recommendations
          </Link>
          </div>
        </div>
        <div className="my-5 flex flex-col items-center justify-center content-center">
            <Separator className="bg-neutral-400 w-screen" />
            <p className="text-white mt-5">Copyright © 2023 Morgan Titsworth</p>
        </div>
      </div>
    );
}