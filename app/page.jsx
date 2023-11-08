import { getRecos, getProjects } from '@/sanity/sanity-utils'
import React from 'react'
import styles from './index.module.scss'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
//

export default async function Home() {
  const reco = await getRecos()
  const projects = await getProjects()
  return (
    <div className={styles.parent}>
      asdasd
    </div>
  );
}
