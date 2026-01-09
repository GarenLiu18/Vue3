export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface HeaderData {
  name: string;
  title: string;
  contact: ContactInfo;
}

export interface ExperienceData {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface ProjectData {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

// SideProject structure is identical to Project for now
export type SideProjectData = ProjectData;

export interface SkillData {
  id: number;
  category: string;
  items: string[];
}

export interface ResumeData {
  header: HeaderData;
  about: string;
  experience: ExperienceData[];
  projects: ProjectData[];
  sideProjects: SideProjectData[];
  skills: SkillData[];
  footer: {
    year: number;
    copyright: string;
  };
}

export const resumeData: ResumeData = {
  header: {
    name: "王小明",
    title: "前端工程師 (Frontend Engineer)",
    contact: {
      email: "xiaoming@example.com",
      phone: "0912-345-678",
      github: "https://github.com/xiaoming",
      linkedin: "https://linkedin.com/in/xiaoming"
    }
  },
  about: "熱衷於網頁開發技術，具備 Vue.js 與 React 實戰經驗。喜歡挑戰新技術，注重程式碼品質與使用者體驗。擁有良好的團隊溝通能力，致力於打造高效能且易維護的網頁應用程式。",
  experience: [
    {
      id: 1,
      title: "資深前端工程師",
      company: "科技股份有限公司",
      period: "2021 - Present",
      description: [
        "主導公司核心產品的前端架構重構，提升頁面載入速度 30%。",
        "導入自動化測試流程，減少 20% 的線上 Bug。",
        "帶領 3 人前端團隊，負責 Code Review 與技術指導。"
      ]
    },
    {
      id: 2,
      title: "前端工程師",
      company: "創意數位工作室",
      period: "2019 - 2021",
      description: [
        "負責企業形象網站與活動頁面開發。",
        "與設計師密切合作，實現高品質的互動視覺效果。",
        "優化 RWD 體驗，確保在各裝置上呈現完美。"
      ]
    }
  ],
  projects: [
    {
      id: 1,
      name: "電商購物平台",
      description: "使用 Vue 3 + Vite 開發的全功能電商平台，包含商品瀏覽、購物車、結帳流程與會員中心。",
      technologies: ["Vue 3", "Pinia", "TypeScript", "Tailwind CSS"],
      link: "https://shop.example.com"
    },
    {
      id: 2,
      name: "個人部落格系統",
      description: "基於 Node.js 與 Express 建置的部落格後端 API，支援文章 CRUD、標籤管理與 Markdown 解析。",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      link: "https://github.com/xiaoming/blog-api"
    }
  ],
  sideProjects: [
    {
      id: 1,
      name: "To-Do List Chrome Extension",
      description: "一個輕量級的待辦事項 Chrome 擴充功能，支援拖即排序與離線儲存。",
      technologies: ["JavaScript", "Chrome API", "HTML/CSS"],
      link: "https://chrome.google.com/webstore/detail/..."
    },
    {
      id: 2,
      name: "天氣查詢 Bot",
      description: "Line Bot 聊天機器人，串接中央氣象局 API 提供即時天氣資訊。",
      technologies: ["Node.js", "Line Messaging API", "Heroku"],
      link: "https://github.com/xiaoming/weather-bot"
    }
  ],
  skills: [
    {
      id: 1,
      category: "Frontend",
      items: ["HTML/CSS", "JavaScript", "TypeScript", "Vue.js", "React"]
    },
    {
      id: 2,
      category: "Tools",
      items: ["Git", "Webpack", "Vite", "Jest"]
    },
    {
      id: 3,
      category: "Backend / Others",
      items: ["Node.js", "Express", "RESTful API"]
    }
  ],
  footer: {
    year: 2024,
    copyright: "All Rights Reserved."
  }
};
