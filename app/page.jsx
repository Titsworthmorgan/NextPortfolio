'use client'
import { getRecos, getProjects } from "@/sanity/sanity-utils";
import React from "react";
import Footer from "../Components/footer/footer";
import styles from "./page.module.scss";
import { Button } from "@mui/material";

export default async function Home() {
  const reco = await getRecos();
  const projects = await getProjects();
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Button>asdasd</Button>
      </div>
      <Footer />
    </div>
  );
}
