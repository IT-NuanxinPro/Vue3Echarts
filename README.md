<div align="center">

# 🚀 Vue3 ECharts 大屏数据可视化

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3.3.10-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue 3" />
  <img src="https://img.shields.io/badge/ECharts-5.4.3-AA344D?style=for-the-badge&logo=apache-echarts&logoColor=white" alt="ECharts" />
  <img src="https://img.shields.io/badge/Element_Plus-2.4.3-409EFF?style=for-the-badge&logo=element&logoColor=white" alt="Element Plus" />
  <img src="https://img.shields.io/badge/Vite-5.0.5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/IT-NuanxinPro/Vue3Echarts?style=flat-square" alt="License" />
  <img src="https://img.shields.io/github/stars/IT-NuanxinPro/Vue3Echarts?style=flat-square" alt="Stars" />
  <img src="https://img.shields.io/github/forks/IT-NuanxinPro/Vue3Echarts?style=flat-square" alt="Forks" />
  <img src="https://img.shields.io/github/issues/IT-NuanxinPro/Vue3Echarts?style=flat-square" alt="Issues" />
</p>

<p align="center">
  一个基于 Vue 3 + ECharts 5 的现代化大屏数据可视化解决方案
</p>

<p align="center">
  <a href="#-特性">特性</a> •
  <a href="#-技术栈">技术栈</a> •
  <a href="#-快速开始">快速开始</a> •
  <a href="#-项目结构">项目结构</a> •
  <a href="#-开发指南">开发指南</a> •
  <a href="#-贡献">贡献</a>
</p>

</div>

---

## ✨ 特性

🎯 **现代化技术栈** - 基于 Vue 3 Composition API + Vite 构建，享受最新的开发体验

📊 **丰富的图表组件** - 集成 ECharts 5，支持多种数据可视化图表类型

🎨 **响应式设计** - 完美适配各种屏幕尺寸，支持大屏展示和移动端访问

⚡ **高性能** - Vite 构建工具提供极速的开发和构建体验

🔧 **开箱即用** - 预配置 ESLint、自动导入、组件自动注册等开发工具

🎪 **动画效果** - 集成 GSAP 动画库，提供流畅的交互体验

📱 **移动端适配** - 内置 px 转 vw 插件，完美适配移动端设备

🛠️ **组件化开发** - 模块化的组件架构，易于维护和扩展

## 🛠️ 技术栈

| 技术 | 版本 | 描述 |
|------|------|------|
| [Vue 3](https://vuejs.org/) | 3.3.10 | 渐进式 JavaScript 框架 |
| [ECharts](https://echarts.apache.org/) | 5.4.3 | 强大的数据可视化库 |
| [Element Plus](https://element-plus.org/) | 2.4.3 | Vue 3 组件库 |
| [Vite](https://vitejs.dev/) | 5.0.5 | 下一代前端构建工具 |
| [Vue Router](https://router.vuejs.org/) | 4.2.5 | Vue.js 官方路由 |
| [Pinia](https://pinia.vuejs.org/) | 2.1.7 | Vue 状态管理库 |
| [Axios](https://axios-http.com/) | 1.6.2 | HTTP 客户端 |
| [GSAP](https://greensock.com/gsap/) | 3.12.3 | 专业级动画库 |
| [Sass](https://sass-lang.com/) | 1.62.0 | CSS 预处理器 |

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- Yarn >= 1.22.0 (推荐) 或 npm >= 8.0.0

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/IT-NuanxinPro/Vue3Echarts.git

# 进入项目目录
cd Vue3Echarts

# 安装依赖
yarn install
# 或者
npm install
```

### 开发环境

```bash
# 启动开发服务器
yarn dev
# 或者
npm run dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看项目

### 生产构建

```bash
# 构建生产版本
yarn build
# 或者
npm run build
```

### 预览生产版本

```bash
# 预览构建结果
yarn preview
# 或者
npm run preview
```

### 代码检查

```bash
# 运行 ESLint 检查并自动修复
yarn lint
# 或者
npm run lint
```

## 📁 项目结构

```
Vue3Echarts/
├── public/                 # 静态资源
│   └── favicon.ico        # 网站图标
├── src/                   # 源代码
│   ├── assets/           # 资源文件
│   │   ├── img/         # 图片资源
│   │   ├── json/        # JSON 数据
│   │   └── style/       # 全局样式
│   ├── components/       # 公共组件
│   ├── plugins/         # 插件配置
│   │   └── stylePxToVw.js # px转vw插件
│   ├── router/          # 路由配置
│   │   └── index.js     # 路由入口
│   ├── stores/          # 状态管理
│   ├── utils/           # 工具函数
│   ├── views/           # 页面组件
│   │   └── bigScreen/   # 大屏可视化页面
│   │       ├── Layout.vue      # 布局组件
│   │       └── components/     # 页面组件
│   │           ├── navBar/     # 导航栏
│   │           └── content/    # 内容区域
│   │               ├── leftBox/    # 左侧图表区
│   │               ├── centerBox/  # 中央图表区
│   │               └── rightBox/   # 右侧图表区
│   ├── App.vue          # 根组件
│   └── main.js          # 应用入口
├── index.html           # HTML 模板
├── package.json         # 项目配置
├── vite.config.mjs      # Vite 配置
├── postcss.config.js    # PostCSS 配置
└── README.md           # 项目说明
```

## 🎯 核心功能

### 📊 数据可视化
- **多样化图表** - 支持柱状图、折线图、饼图、散点图等多种 ECharts 图表
- **实时数据** - 支持数据实时更新和动态展示
- **交互式图表** - 丰富的图表交互功能，提升用户体验

### 🎨 界面设计
- **大屏适配** - 专为大屏显示优化的界面布局
- **响应式布局** - 自适应不同屏幕尺寸和分辨率
- **美观主题** - 现代化的 UI 设计和配色方案

### ⚡ 性能优化
- **组件懒加载** - 路由级别的代码分割
- **自动导入** - Vue 组件和 API 自动导入
- **构建优化** - Vite 提供的极速构建体验

## 🔧 开发指南

### 添加新图表

1. 在对应的区域组件中创建新的图表组件：

```javascript
// src/views/bigScreen/components/content/leftBox/components/newChart.vue
<template>
  <div ref="chartRef" class="chart-container"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)

onMounted(() => {
  const chart = echarts.init(chartRef.value)

  const option = {
    // ECharts 配置项
  }

  chart.setOption(option)
})
</script>
```

2. 在父组件中引入并使用：

```javascript
import NewChart from './components/newChart.vue'
```

### 自定义主题

项目支持自定义 ECharts 主题，在 `src/assets/` 目录下添加主题文件：

```javascript
// src/assets/theme/custom.js
export const customTheme = {
  color: ['#3398DB', '#FF6B6B', '#4ECDC4'],
  backgroundColor: 'transparent',
  // 更多主题配置...
}
```

### 响应式适配

项目内置了 px 转 vw 的插件，支持以下特性：

- **自动转换** - 模板中的 px 单位自动转换为 vw
- **精确适配** - 基于 1920px 设计稿的精确适配
- **灵活配置** - 可在 `src/plugins/stylePxToVw.js` 中调整配置

## 🌟 最佳实践

### 组件开发
- 使用 Composition API 编写组件
- 合理使用 `ref` 和 `reactive` 管理状态
- 组件间通信优先使用 props 和 emit

### 性能优化
- 图表组件使用 `shallowRef` 避免深度响应
- 大数据量时考虑使用虚拟滚动
- 合理使用 `v-memo` 优化渲染性能

### 代码规范
- 遵循 ESLint 配置的代码规范
- 使用 TypeScript 类型注解（可选）
- 组件和文件命名采用 PascalCase

## 🤝 贡献

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 贡献指南

- 提交前请运行 `yarn lint` 检查代码规范
- 确保新功能有对应的文档说明
- 重大更改请先开 Issue 讨论

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [ECharts](https://echarts.apache.org/) - 强大的数据可视化库
- [Element Plus](https://element-plus.org/) - Vue 3 组件库
- [Vite](https://vitejs.dev/) - 下一代前端构建工具

---

<div align="center">

**如果这个项目对你有帮助，请给它一个 ⭐️**

Made with ❤️ by [IT-NuanxinPro](https://github.com/IT-NuanxinPro)

</div>
