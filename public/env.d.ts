/// <reference types="vite/client" />
declare module '*.png' {
  const src: string[]
  export default src
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
