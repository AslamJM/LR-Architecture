import { type SchemaTypeDefinition } from "sanity";
import category from "./schemas/category-schema";
import project from "./schemas/project-scema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, project],
};
