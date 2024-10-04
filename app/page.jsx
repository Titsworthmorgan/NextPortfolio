'use client'
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
import styles from './page.module.scss'

export default async function Home() {
  const reco = await getRecos()
  const projects = await getProjects()
  return (
    <div className={styles.main}>
      <div className={styles.header}>
      asdasd
      </div>
      <Footer />
    </div>
  );
}
