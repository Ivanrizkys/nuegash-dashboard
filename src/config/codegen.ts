import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "https://iazwrmzzrxmmzqirdrdh.supabase.co/graphql/v1":
        {
          headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhendybXp6cnhtbXpxaXJkcmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3NTUzNzMsImV4cCI6MjAwMzMzMTM3M30.p6Tof_IH6OI5TyRniMnnXj7K4OZ2CvYJQ20XGbOpUHM",
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
