import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";

export async function getCategories(): Promise<Category[]> {
  return client.fetch(groq`*[_type=="category"]| order(_createdAt asc){
  _id,
  name,
  "slug":slug.current,
  "image":image.asset->url  
}`);
}

export async function getCategoryName(slug: string) {
  return client.fetch<{
    name: string;
  }>(groq`*[_type=="category" && slug.current=="${slug}"][0]{
  name 
}`);
}

export async function getCategoryProjects(slug: string) {
  const categoryId = await client.fetch<{ _id: string; name: string }>(groq`
    *[_type=="category" && slug.current=="${slug}"][0]{
    _id,
}
  `);

  if (!categoryId) {
    return [];
  }

  const projects = client.fetch<
    ProjectCard[]
  >(groq`*[_type=="project" && category._ref=="${categoryId._id}"  ]{
  _id,
  name,
  "slug":slug.current,
  "image":images[0].asset->url      
}`);
  return projects;
}

export async function getSingleProject(slug: string) {
  return client.fetch<ProjectType>(groq`
    *[_type=="project" && slug.current=="${slug}"][0]{
    _id,
    name,
    description,
    "images":images[].asset->url,
    "alts":images[].alt
}
  `);
}
