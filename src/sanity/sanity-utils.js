import { createClient, groq } from "next-sanity";

export async function getProjects(){
    const client = createClient({
        projectId: 'qsd8xwuz',
        title: 'violet-locust',
        dataset: 'production',
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            content,
            url,
            tech,
            "slug": slug.current,
            "imageUrl": image.asset -> url,
            "imageAlt": image.alt,
        }`
    )
}
export async function getRecos(){
    const client = createClient({
        projectId: 'qsd8xwuz',
        title: 'violet-locust',
        dataset: 'production',
    });

    return client.fetch(
        groq`*[_type == "reco"]{
            _id,
            _createdAt,
            name,
            position,
            company,
            featured,
            content
        }`
    )
}

export async function getProject(slug){
    const client = createClient({
        projectId: 'qsd8xwuz',
        title: 'violet-locust',
        dataset: 'production',
    });
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "content",
            "slug": slug.current,
            "imageUrl": image.asset -> url,
            "imageAlt": image.alt,
            "imageURL": image.url,
        }`,
        { slug }
    )
}
//without the [0] you need to reference the first item in the array in your pages, or wherever you're pulling the data
//const projectItems = project[0] as an example