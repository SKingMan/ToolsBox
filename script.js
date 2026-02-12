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
        id: "2048",
        name: "2048",
        description: "合成2048游戏",
        icon: "🔢",
        path: "tools/2048/index.html"
    }

];

// 保存原始工具数据
let originalToolsData = [...toolsData];

// 生成工具卡片
function generateToolCards(tools = toolsData) {
    const toolsGrid = document.getElementById('toolsGrid');
    
    // 清空现有卡片
    toolsGrid.innerHTML = '';
    
    // 如果没有工具，显示提示
    if (tools.length === 0) {
        toolsGrid.innerHTML = `
            <div class="no-results">
                <div class="tool-icon">🔍</div>
                <h3>未找到匹配的工具</h3>
                <p>请尝试使用其他关键词搜索</p>
            </div>
        `;
        return;
    }
    
    tools.forEach(tool => {
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

// 搜索工具
function searchTools() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // 如果搜索框为空，显示所有工具
        generateToolCards(originalToolsData);
        return;
    }
    
    // 根据关键词搜索工具
    const filteredTools = originalToolsData.filter(tool => {
        return (
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm)
        );
    });
    
    generateToolCards(filteredTools);
}

// 页面加载完成后生成卡片
document.addEventListener('DOMContentLoaded', () => {
    originalToolsData = [...toolsData];
    generateToolCards();
    
    // 为搜索框添加键盘事件监听
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchTools();
            }
        });
    }
});