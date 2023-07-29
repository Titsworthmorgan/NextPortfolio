import Link from "next/link"

export default function Nav() {


    return (
        <>
            <Link
                className={"ml-6 w-max bg-black text-neutral-300 hover:text-white   text-center p-1 2xl:text-base xl:text font-medium"}
                href='#projects'>
                Projects
            </Link>
            <Link className={"ml-6 w-max bg-black text-neutral-300 hover:text-white   text-center p-1 2xl:text-base xl:text font-medium"}
                href='#recommendations'>
                Recommendations
            </Link>
        </>
    )
}