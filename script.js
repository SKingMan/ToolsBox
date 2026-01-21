// 工具数据
const toolsData = [
    {
        id: "face-generator",
        name: "AI人像生成",
        description: "使用AI生成独特的人像图片",
        icon: "🎨",
        path: "tools/face-generator/index.html"
    },
    {
        id: "ai-namer",
        name: "AI起名助手",
        description: "基于AI算法生成创意名字",
        icon: "📝",
        path: "tools/ai-namer/index.html"
    },
    {
        id: "nutrition-analyst",
        name: "AI营养分析师",
        description: "分析食物营养成分和健康建议",
        icon: "🥗",
        path: "tools/nutrition-analyst/index.html"
    },
    {
        id: "joke-generator",
        name: "AI笑话生成",
        description: "使用AI生成有趣的笑话和段子",
        icon: "😂",
        path: "tools/joke-generator/index.html"
    },
{
        id: "joke-generator002",
        name: "AI笑话生成",
        description: "使用AI生成有趣的笑话和段子",
        icon: "😂",
        path: "tools/joke-generator002/index.html"
    },
{
        id: "joke-generator003",
        name: "AI笑话生成",
        description: "使用AI生成有趣的笑话和段子",
        icon: "😂",
        path: "tools/joke-generator002/index.html"
    },
{
        id: "joke-generator004",
        name: "AI笑话生成",
        description: "使用AI生成有趣的笑话和段子",
        icon: "😂",
        path: "tools/joke-generator002/index.html"
    }
];

// 生成工具卡片
function generateToolCards() {
    const toolsGrid = document.getElementById('toolsGrid');
    
    toolsData.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.onclick = () => window.location.href = tool.path;
        
        card.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <h3 class="tool-name">${tool.name}</h3>
            <p class="tool-description">${tool.description}</p>
        `;
        
        toolsGrid.appendChild(card);
    });
}

// 页面加载完成后生成卡片
document.addEventListener('DOMContentLoaded', generateToolCards);