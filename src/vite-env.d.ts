/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV: "Development" | "Production";
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
