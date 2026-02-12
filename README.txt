# AI工具箱网站

## 项目简介
这是一个包含多个AI工具的静态网站，每个工具独立页面，通过首页卡片导航访问。

## 包含工具
1. AI人像生成 - 使用AI生成独特的人像图片
2. AI起名助手 - 基于AI算法生成创意名字
3. AI营养分析师 - 分析食物营养成分和健康建议
4. AI笑话生成 - 使用AI生成有趣的笑话和段子

## 技术栈
- 纯静态HTML/CSS/JS网站
- 无后端，无数据库
- 工具页面独立HTML文件

## 启动方式
1. 打开命令行工具，进入项目根目录
2. 运行以下命令启动本地服务器：
   ```
   # 使用Python 3
   python -m http.server 8000
   
   # 或使用Python 2
   python -m SimpleHTTPServer 8000
   
   # 或使用Node.js（如果已安装）
   npx http-server -p 8000
   ```
3. 打开浏览器访问：http://localhost:8000

## 项目结构
```
项目根目录/
├── index.html              # 网站首页
├── style.css               # 样式文件
├── script.js               # 脚本文件
├── tools/                  # 工具页面目录
│   ├── face-generator/    # AI人像生成
│   │   └── index.html
│   ├── ai-namer/          # AI起名助手
│   │   └── index.html
│   ├── nutrition-analyst/ # AI营养分析师
│   │   └── index.html
│   └── joke-generator/    # AI笑话生成
│       └── index.html
└── README.txt              # 项目说明文件
```

## 添加新工具
1. 修改 `script.js` 文件，在 `toolsData` 数组中添加新工具数据
2. 在 `tools` 文件夹下创建对应工具的目录
3. 创建工具页面 `index.html`
4. 实现工具功能
5. 重启服务器查看效果
