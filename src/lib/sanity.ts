import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";

export async function getCategories(): Promise<Category[]> {
  return client.fetch(groq`*[_type=="category"]{
  _id,
  name,
  "slug":slug.current,
  "image":image.asset->url  
}`);
}
