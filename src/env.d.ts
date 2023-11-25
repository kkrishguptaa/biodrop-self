/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly LINKFREE_USERNAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
