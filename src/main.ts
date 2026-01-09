// 1. 引入全域樣式 (Global CSS)
import './assets/main.css'

// 2. 引入 Vue 引擎的核心功能
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 3. 引入你的主角 (Root Component)
import App from './App.vue'
// import router from './router'

// 4. 實例化遊戲 (Instantiate)
const app = createApp(App)// 這裡創建了一個 Vue 應用實例，把 App.vue 當作根節點

// 5. 安裝插件 (Add Components / Managers)
app.use(createPinia()) // 狀態管理器 (像是 GameData Singleton)
// app.use(router) // 路由管理器 (像是 SceneManager，負責切換頁面)

// 6. 掛載 (Mount)
app.mount('#app')// 這一步最關鍵！它把上面創建好的整包東西，塞進 index.html 裡的 <div id="app">
