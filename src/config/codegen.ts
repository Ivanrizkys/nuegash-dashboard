import "dotenv/config";
import { CodegenConfig } from "@graphql-codegen/cli";

const url: string = process.env.VITE_SUPABASE_GRAPH_URL ?? "";
const apikey: string = process.env.VITE_SUPABASE_ANON_APIKEY ?? "";

const config: CodegenConfig = {
  schema: [
    {
      [url]: {
        headers: {
          apikey,
        },
      },
    },
  ],
  documents: ["src/**/*.ts?(x)"],
  ignoreNoDocuments: false,
  generates: {
    "./src/libs/dto/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
