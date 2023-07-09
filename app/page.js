import Image from 'next/image'
import styles from './page.module.scss'
import { getProjects, getRecos } from '@/sanity/sanity-utils'
import Link from 'next/link'
import Footer from './Components/footer/footer'

export default async function Home() {
  const reco = await getRecos()
  const projects = await getProjects()
  return (
    <>
    <div className={styles.main}>
      {projects.map((thing) => (
        <Link key={thing._id} href={`/projects/${thing.slug}`}>
          {thing.name}
          <Image src={thing.imageUrl} alt={thing.name} width={250} height={100}/>
        </Link>
      ))}
      
    </div>
    <Footer recos={reco} />
    </>
  )
}
