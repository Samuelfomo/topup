import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@views': fileURLToPath(new URL('./views', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5173,
    fs: {
      allow: [resolve(__dirname, 'src'), resolve(__dirname, 'views')],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});


// import { fileURLToPath, URL } from 'node:url'
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import { resolve } from 'path'
//
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//       '@views': fileURLToPath(new URL('./views', import.meta.url))
//     }
//   },
//   server: {
//     host: true,
//     port: 5173,
//     fs: {
//       allow: [
//         resolve(__dirname, 'src'),
//         resolve(__dirname, 'views')
//       ]
//     }
//   }
// })
//
//
//
