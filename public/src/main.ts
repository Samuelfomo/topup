
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

const app = createApp(App);
app.use(router);
app.mount('#app');



// import './assets/main.css'
//
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
//
// const app = createApp(App)
//
// app.use(router)
//
// app.mount('#app')
