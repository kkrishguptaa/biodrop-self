/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BIODROP_USERNAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
