import { z } from "zod";

const variables = z.object({
  ENVIRONMENT: z.enum(["local", "development", "preview", "production"]),
  HYGRAPH_CONTENT_API_KEY: z.string(),
  BASE_URL: z.string(),
});

variables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof variables> {}
  }
}

export default variables;
