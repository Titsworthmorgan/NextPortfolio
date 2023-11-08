import React from "react";
import { getProjects } from '@/sanity/sanity-utils'

export async function generateStaticParams() {
    const posts = await await getProjects()
   
    return posts.map((post) => ({
      slug: post.slug,
    }))
  }

export default async function ProjectsPage({ params }) {
    const { slug } = params
    return (
        <div className=" text-white">
            asdasd123123
        </div>
    )
}
