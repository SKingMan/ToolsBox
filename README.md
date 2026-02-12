# ToolBox - AI工具集合

<div align="center">
  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20clean%20toolbox%20website%20interface%20with%20AI%20tools%20grid%20layout&image_size=square_hd" alt="ToolBox 网站预览" width="400">
</div>

## 📋 项目简介

ToolBox 是一个包含多个AI工具的静态网站，每个工具独立页面，通过首页卡片导航访问。网站采用现代简洁的设计风格，响应式布局适配各种设备。

## ✨ 核心特性

- **纯静态网站**：无需后端服务器，无数据库依赖
- **响应式设计**：适配桌面、平板和移动设备
- **搜索功能**：支持按关键词搜索工具
- **工具集成**：模块化的工具页面结构
- **现代UI**：简洁美观的界面设计

## 🛠️ 包含工具

| 工具名称 | 功能描述 | 工具图标 |
|---------|---------|---------|
| AI人像生成 | 使用AI生成独特的人像图片 | 🎨 |
| AI起名助手 | 基于AI算法生成创意名字 | 📝 |
| AI营养分析师 | 分析食物营养成分和健康建议 | 🥗 |
| AI笑话生成 | 使用AI生成有趣的笑话和段子 | 😂 |
| 2048游戏 | 经典的2048数字合成游戏 | 🔢 |

## 🚀 本地运行

### 步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/你的用户名/仓库名.git
   cd 仓库名
   ```

2. **启动本地服务器**
   ```bash
   # 使用Python 3
   python -m http.server 8000
   
   # 或使用Python 2
   python -m SimpleHTTPServer 8000
   
   # 或使用Node.js（如果已安装）
   npx http-server -p 8000
   ```

3. **访问网站**
   打开浏览器访问：http://localhost:8000

## 📁 项目结构

```
项目根目录/
├── index.html              # 网站首页
├── style.css               # 全局样式文件
├── script.js               # 核心脚本文件
├── tools/                  # 工具页面目录
│   ├── face-generator/     # AI人像生成
│   │   └── index.html
│   ├── ai-namer/           # AI起名助手
│   │   └── index.html
│   ├── nutrition-analyst/  # AI营养分析师
│   │   └── index.html
│   ├── joke-generator/     # AI笑话生成
│   │   └── index.html
│   └── 2048/               # 2048游戏
│       ├── index.html
│       ├── style.css
│       └── script.js
└── README.md               # 项目说明文件
```

## 🔧 添加新工具

1. **修改工具数据**
   在 `script.js` 文件的 `toolsData` 数组中添加新工具对象：
   ```javascript
   {
       id: "tool-id",          // 工具唯一标识符
       name: "工具名称",       // 工具名称
       description: "工具描述", // 工具简短描述
       icon: "🔧",            // 工具图标（emoji）
       path: "tools/tool-id/index.html" // 工具页面路径
   }
   ```

2. **创建工具目录**
   在 `tools` 文件夹下创建与工具ID同名的目录：
   ```bash
   mkdir -p tools/tool-id
   ```

3. **创建工具页面**
   在工具目录中创建 `index.html` 文件，实现工具功能。

4. **测试**
   重启本地服务器，访问首页查看新工具卡片。

## 🎨 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **样式**: 纯CSS，无框架
- **脚本**: 原生JavaScript，无依赖
- **布局**: CSS Grid + Flexbox

---

<div align="center">
  <p>Made with ❤️ by ToolBox Team</p>
</div>
