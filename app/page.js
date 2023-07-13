import Image from 'next/image'
import Nav from './Components/nav/nav'
import styles from './page.module.scss'
import CenterCard from './Components/centerCard/centerCard'
import i1 from '../public/Assets/HTML5logoandwordmark.svg.png'
import i2 from '../public/Assets/CSS.3.svg.png'
import i3 from '../public/Assets/Typescript.svg.png'
import i4 from '../public/Assets/React-icon.svg.png'
import i5 from '../public/Assets/next.png'
import i6 from '../public/Assets/Git_icon.svg.png'
import i7 from '../public/Assets/Vercel.png'
import i8 from '../public/Assets/Google-cloud-platform.svg.png'
import i9 from '../public/Assets/logo-vertical.png'
import i10 from '../public/Assets/Sanity.png'
import i11 from '../public/Assets/Strapi-Monogram.png'
import { innerHTML } from '../public/Assets/particles.js'
import Link from 'next/link'

import { getProjects, getRecos } from '@/sanity/sanity-utils'
// import Link from 'next/link'
// import Footer from './Components/footer/footer'
 
export default async function Home() {
  const reco = await getRecos()

  const projects = await getProjects()
  return (
    <>
      <di dangerouslySetInnerHTML={{__html : innerHTML}}></di>
      <Nav />
      <div className={styles.section1}>
        <CenterCard />
        <div className={styles.columnCenter}>
          <p className={styles.profText}>Languages, library's, tooling, and back end management</p>
          <div className={styles.cardRow}>
            <Image src={i1} width={50} height={50}/>
            <Image src={i2} width={40} height={50}/>
            <Image src={i3} width={50} height={50}/>
            <Image src={i4} width={50} height={50}/>
            <Image src={i5} width={50} height={50}/>
            <Image src={i6} width={50} height={50}/>
            <Image src={i7} width={50} height={50}/>
            <Image src={i8} width={50} height={50}/>
            <Image src={i9} width={50} height={50}/>
            <Image src={i10} width={50} height={50}/>
            <Image src={i11} width={50} height={50}/>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <h1>Featured Projects</h1>
        {projects.map((thing, index) => (
          <div key={thing._id} className={index % 2 === 0 ? styles.projectBox : styles.projectBoxReverse}>
            <div className={styles.projectText}>
              <h2>{thing.name}</h2>
                <p>lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum </p>
            </div>
            <div>
              <Image src={thing.imageUrl} alt={thing.name} width={300} height={150}/>
            </div>
          </div>
        ))}
      </div>
        {reco.map((that) => (
          <div className={styles.section3}>
          <h2> "{that.content}" </h2>
          <h3> {that.name} </h3>
          <p> {that.position}, {that.company} </p>
          </div>
        ))}
    </>
  )
}
