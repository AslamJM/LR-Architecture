import { type SchemaTypeDefinition } from "sanity";
import category from "./schemas/category-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category],
};
