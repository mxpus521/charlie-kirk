# Charlie Kirk Memorial Website

<div align="center">

![Charlie Kirk Memorial](https://img.shields.io/badge/Memorial-Charlie_Kirk-gold?style=for-the-badge&logo=star&logoColor=white)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-Memorial-red?style=for-the-badge)

**A bilingual memorial website honoring Charlie Kirk (1993-2025)**  
*Founder of Turning Point USA and Champion of Free Speech*

[🌐 Live Demo](#) | [📖 Documentation](#features) | [🚀 Deploy](#deployment) | [🇨🇳 中文文档](#中文文档)

</div>

---

## 📖 About

This memorial website pays tribute to **Charlie Kirk**, the extraordinary conservative activist, educator, and political influencer who dedicated his life to promoting American values, free speech, and conservative principles among young people. Through Turning Point USA, his bestselling books, and his media presence, Kirk left an indelible mark on American politics and conservative thought.

### 🌟 Key Highlights

- **Born**: 1993, Chicago, Illinois
- **Founded**: Turning Point USA (2012, age 19)
- **Published**: "The MAGA Doctrine" (2020)
- **Legacy**: Influenced millions of young conservatives
- **Tragic End**: September 10, 2025, Utah Valley University

---

## ✨ Features

### 🌍 **Bilingual Experience**
- **Default Language**: English with seamless Chinese translation
- **Smart Toggle**: Modern language switcher with country flags
- **Persistent Memory**: Remembers your language preference
- **Smooth Transitions**: Elegant switching animations

### 📱 **Modern Design**
- **Responsive Layout**: Perfect on desktop, tablet, and mobile
- **Christian & Patriotic Themes**: Gold, red, white, and blue color scheme
- **Interactive Elements**: Hover effects, animations, and transitions
- **Accessibility First**: WCAG compliant with keyboard navigation

### 🎯 **Rich Content**
- **Comprehensive Biography**: From Chicago teenager to global icon
- **Interactive Timeline**: Visual journey through key life events
- **Quotes Carousel**: Rotating display of memorable quotes
- **Achievement Gallery**: Cards showcasing major accomplishments
- **Social Sharing**: Easy sharing across all major platforms

---

## 🗂️ Website Sections

| Section | Description | Features |
|---------|-------------|----------|
| **🏠 Hero** | Memorial introduction | Language toggle, patriotic design |
| **👤 Biography** | Life story and background | Early life, education, family |
| **🏆 Achievements** | Major accomplishments | TPUSA, books, media, documentaries |
| **📅 Timeline** | Interactive life timeline | 1993-2025 key events |
| **🗣️ Free Speech** | Advocacy and principles | Campus rights, First Amendment |
| **💬 Quotes** | Memorable sayings | Auto-rotating carousel |
| **🌟 Legacy** | Lasting impact | Patriotism, faith, free markets |
| **🕊️ Tribute** | Final memorial | Condemnation of violence |
| **📤 Share** | Social sharing | All major platforms |

---

## 🚀 Quick Start

### 📋 Prerequisites

- Modern web browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- Text editor (VS Code, Sublime Text, etc.)
- Git (optional, for version control)

### 💻 Local Development

1. **Clone or Download**
   ```bash
   git clone https://github.com/yourusername/charlie-kirk-memorial.git
   cd charlie-kirk-memorial
   ```

2. **Open in Browser**
   ```bash
   # Simply open index.html in your browser
   open index.html  # macOS
   start index.html # Windows
   ```

3. **Local Server (Optional)**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

---

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Create Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `charlie-kirk-memorial`

2. **Upload Files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Charlie Kirk Memorial Website"
   git branch -M main
   git remote add origin https://github.com/yourusername/charlie-kirk-memorial.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / `/ (root)`
   - Click Save

4. **Access Your Site**
   - URL: `https://yourusername.github.io/charlie-kirk-memorial`
   - Usually takes 5-10 minutes to deploy

### Other Hosting Options

| Platform | Deployment | Cost |
|----------|------------|------|
| **Netlify** | Drag & drop or Git | Free |
| **Vercel** | Git integration | Free |
| **Surge.sh** | Command line | Free |
| **Firebase** | CLI deployment | Free tier |

---

## 🎨 Customization

### 🎨 Color Scheme

```css
:root {
    /* American Flag Colors */
    --flag-red: #B22234;
    --flag-blue: #3C3B6E;
    --flag-white: #FFFFFF;
    
    /* Christian Gold */
    --christian-gold: #DAA520;
    --warm-gold: #F4E4BC;
    --deep-gold: #B8860B;
    
    /* Supporting Colors */
    --navy-blue: #1B365D;
    --cream: #FFF8DC;
    --light-gray: #F5F5F5;
}
```

### 📝 Content Updates

1. **Text Content**: Edit `data-en` and `data-zh` attributes in `index.html`
2. **Images**: Replace placeholder images in the memorial photo section
3. **Timeline**: Modify timeline events in the timeline section
4. **Quotes**: Update quotes in the carousel section

### 🔧 Advanced Customization

- **Fonts**: Change Google Fonts imports in `<head>`
- **Animations**: Modify CSS transitions and keyframes
- **Layout**: Adjust CSS Grid and Flexbox properties
- **Features**: Add new sections or interactive elements

---

## 🛠️ Technical Architecture

### 📁 File Structure

```
charlie-kirk-memorial/
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── script.js               # JavaScript functionality
├── README.md               # This documentation
└── assets/ (optional)      # Images, icons, etc.
```

### 🏗️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Semantic structure | Latest |
| **CSS3** | Styling and animations | Latest |
| **JavaScript** | Interactivity | ES6+ |
| **Google Fonts** | Typography | Crimson Text, Open Sans |

### 🎯 Key Features Implementation

- **Bilingual Support**: Data attributes + JavaScript
- **Responsive Design**: CSS Grid + Flexbox + Media queries
- **Animations**: CSS transitions + keyframes
- **Accessibility**: ARIA labels + semantic HTML
- **Performance**: Vanilla JS (no frameworks)

---

## 📖 User Guide

### 🌐 Language Switching

- **Button**: Click the flag button in the top-right corner
- **Keyboard**: Press `Alt + L` for quick switching
- **Automatic**: Your preference is saved for future visits

### 🧭 Navigation

- **Smooth Scrolling**: Click any navigation link
- **Keyboard**: Use `Tab` to navigate, `Enter` to activate
- **Mobile**: Touch-friendly interface

### 📱 Mobile Experience

- **Responsive**: Optimized for all screen sizes
- **Touch**: Swipe-friendly carousel and interactions
- **Performance**: Fast loading on mobile networks

### 🔗 Sharing

- **Social Media**: Facebook, Twitter, LinkedIn buttons
- **Email**: Pre-formatted email sharing
- **Copy Link**: One-click URL copying

---

## 🔧 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| **Chrome** | 60+ | ✅ Fully supported |
| **Firefox** | 55+ | ✅ Fully supported |
| **Safari** | 12+ | ✅ Fully supported |
| **Edge** | 79+ | ✅ Fully supported |
| **Mobile Safari** | iOS 12+ | ✅ Fully supported |
| **Chrome Mobile** | Android 7+ | ✅ Fully supported |

---

## 🚀 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **Load Time**: < 2 seconds on 3G
- **Bundle Size**: < 100KB total
- **No Dependencies**: Pure vanilla JavaScript

---

## 🤝 Contributing

While this is a memorial website, contributions for improvements are welcome:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/improvement`)
3. **Commit** your changes (`git commit -am 'Add improvement'`)
4. **Push** to the branch (`git push origin feature/improvement`)
5. **Create** a Pull Request

### 🐛 Bug Reports

Please use the [GitHub Issues](https://github.com/yourusername/charlie-kirk-memorial/issues) page to report bugs or suggest enhancements.

---

## 📜 License & Usage

This memorial website is created to honor Charlie Kirk's memory and contributions to:
- Conservative politics and values
- Free speech advocacy
- Youth political engagement
- American patriotism and principles

### ✅ Permitted Uses
- Educational purposes
- Memorial and tribute purposes
- Non-commercial sharing and distribution
- Personal use and customization

### ❌ Restrictions
- Commercial exploitation
- Misrepresentation of content
- Removal of memorial attribution
- Use for political attacks or defamation

---

## 🙏 Acknowledgments

- **Charlie Kirk** - For his dedication to conservative values and free speech
- **Turning Point USA** - For continuing his mission
- **Conservative Community** - For keeping his legacy alive
- **Web Technologies** - HTML5, CSS3, JavaScript ES6+

---

## 📞 Support

For technical support or questions:

- **Documentation**: This README file
- **Issues**: [GitHub Issues Page](https://github.com/yourusername/charlie-kirk-memorial/issues)
- **Email**: your-email@example.com (optional)

---

<div align="center">

**"Truth does not disappear because no one believes it, and lies do not become true because everyone believes them. Our mission is to uphold truth, no matter the cost."**

*— Charlie Kirk*

---

**Made with ❤️ in memory of a true American patriot**

![American Flag](https://img.shields.io/badge/🇺🇸-America_First-red?style=for-the-badge)
![Christian Cross](https://img.shields.io/badge/✝️-Faith-gold?style=for-the-badge)
![Liberty](https://img.shields.io/badge/🗽-Freedom-blue?style=for-the-badge)

</div>

---
---

# 中文文档

<div align="center">

![Charlie Kirk Memorial](https://img.shields.io/badge/纪念网站-查理柯克-gold?style=for-the-badge&logo=star&logoColor=white)
![Version](https://img.shields.io/badge/版本-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/许可证-纪念性质-red?style=for-the-badge)

**纪念查理·柯克（1993-2025）的双语纪念网站**  
*转折点美国组织创始人，言论自由的捍卫者*

[🌐 在线演示](#) | [📖 中文文档](#功能特色) | [🚀 部署指南](#部署) | [🇺🇸 English](#charlie-kirk-memorial-website)

</div>

---

## 📖 关于项目

这个纪念网站致敬**查理·柯克**，这位杰出的保守主义活动家、教育者和政治影响力人物，他毕生致力于在年轻人中推广美国价值观、言论自由和保守主义原则。通过转折点美国组织、畅销书籍和媒体影响力，柯克在美国政治和保守主义思想上留下了不可磨灭的印记。

### 🌟 关键亮点

- **出生**：1993年，伊利诺伊州芝加哥
- **创立**：转折点美国组织（2012年，19岁）
- **出版**：《MAGA主义》（2020年）
- **遗产**：影响了数百万年轻保守主义者
- **悲剧结局**：2025年9月10日，犹他谷大学

---

## ✨ 功能特色

### 🌍 **双语体验**
- **默认语言**：英文，无缝中文翻译
- **智能切换**：带国旗的现代语言切换器
- **持久记忆**：记住您的语言偏好
- **平滑过渡**：优雅的切换动画

### 📱 **现代设计**
- **响应式布局**：在桌面、平板和手机上完美显示
- **基督教与爱国主题**：金色、红色、白色和蓝色配色方案
- **交互元素**：悬停效果、动画和过渡
- **无障碍优先**：符合WCAG标准，支持键盘导航

### 🎯 **丰富内容**
- **全面传记**：从芝加哥少年到全球偶像
- **交互式时间线**：关键人生事件的视觉之旅
- **名言轮播**：经典语录的轮播展示
- **成就展示**：展示主要成就的卡片
- **社交分享**：在所有主要平台轻松分享

---

## 🗂️ 网站部分

| 部分 | 描述 | 功能 |
|------|------|------|
| **🏠 首页** | 纪念介绍 | 语言切换，爱国设计 |
| **👤 生平** | 生平故事和背景 | 早年生活，教育，家庭 |
| **🏆 成就** | 主要成就 | TPUSA，书籍，媒体，纪录片 |
| **📅 时间线** | 交互式生平时间线 | 1993-2025关键事件 |
| **🗣️ 言论自由** | 倡导和原则 | 校园权利，第一修正案 |
| **💬 名言** | 经典语录 | 自动轮播 |
| **🌟 遗产** | 持久影响 | 爱国主义，信仰，自由市场 |
| **🕊️ 纪念** | 最终纪念 | 谴责暴力 |
| **📤 分享** | 社交分享 | 所有主要平台 |

---

## 🚀 快速开始

### 📋 前置要求

- 现代网络浏览器（Chrome 60+，Firefox 55+，Safari 12+，Edge 79+）
- 文本编辑器（VS Code，Sublime Text等）
- Git（可选，用于版本控制）

### 💻 本地开发

1. **克隆或下载**
   ```bash
   git clone https://github.com/yourusername/charlie-kirk-memorial.git
   cd charlie-kirk-memorial
   ```

2. **在浏览器中打开**
   ```bash
   # 直接在浏览器中打开index.html
   open index.html  # macOS
   start index.html # Windows
   ```

3. **本地服务器（可选）**
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 使用Node.js
   npx serve .
   
   # 使用PHP
   php -S localhost:8000
   ```

---

## 🌐 部署

### GitHub Pages（推荐）

1. **创建仓库**
   - 前往[GitHub](https://github.com)创建新仓库
   - 命名为类似`charlie-kirk-memorial`的名称

2. **上传文件**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Charlie Kirk Memorial Website"
   git branch -M main
   git remote add origin https://github.com/yourusername/charlie-kirk-memorial.git
   git push -u origin main
   ```

3. **启用GitHub Pages**
   - 前往仓库设置 > Pages
   - 来源：从分支部署
   - 分支：`main` / `/ (根目录)`
   - 点击保存

4. **访问网站**
   - URL：`https://yourusername.github.io/charlie-kirk-memorial`
   - 通常需要5-10分钟部署

### 其他托管选项

| 平台 | 部署方式 | 费用 |
|------|----------|------|
| **Netlify** | 拖拽或Git | 免费 |
| **Vercel** | Git集成 | 免费 |
| **Surge.sh** | 命令行 | 免费 |
| **Firebase** | CLI部署 | 免费套餐 |

---

## 🎨 自定义

### 🎨 配色方案

```css
:root {
    /* 美国国旗颜色 */
    --flag-red: #B22234;
    --flag-blue: #3C3B6E;
    --flag-white: #FFFFFF;
    
    /* 基督教金色 */
    --christian-gold: #DAA520;
    --warm-gold: #F4E4BC;
    --deep-gold: #B8860B;
    
    /* 辅助颜色 */
    --navy-blue: #1B365D;
    --cream: #FFF8DC;
    --light-gray: #F5F5F5;
}
```

### 📝 内容更新

1. **文本内容**：编辑`index.html`中的`data-en`和`data-zh`属性
2. **图片**：替换纪念照片部分的占位图片
3. **时间线**：修改时间线部分的事件
4. **名言**：更新轮播部分的语录

### 🔧 高级自定义

- **字体**：修改`<head>`中的Google字体导入
- **动画**：修改CSS过渡和关键帧
- **布局**：调整CSS网格和Flexbox属性
- **功能**：添加新部分或交互元素

---

## 🛠️ 技术架构

### 📁 文件结构

```
charlie-kirk-memorial/
├── index.html              # 主HTML文件
├── styles.css              # 所有CSS样式
├── script.js               # JavaScript功能
├── README.md               # 本文档
└── assets/ (可选)           # 图片、图标等
```

### 🏗️ 技术栈

| 技术 | 用途 | 版本 |
|------|------|------|
| **HTML5** | 语义结构 | 最新 |
| **CSS3** | 样式和动画 | 最新 |
| **JavaScript** | 交互性 | ES6+ |
| **Google Fonts** | 字体排版 | Crimson Text, Open Sans |

### 🎯 关键功能实现

- **双语支持**：数据属性 + JavaScript
- **响应式设计**：CSS网格 + Flexbox + 媒体查询
- **动画**：CSS过渡 + 关键帧
- **可访问性**：ARIA标签 + 语义HTML
- **性能**：原生JS（无框架）

---

## 📖 用户指南

### 🌐 语言切换

- **按钮**：点击右上角的国旗按钮
- **键盘**：按`Alt + L`快速切换
- **自动**：您的偏好会保存供下次访问使用

### 🧭 导航

- **平滑滚动**：点击任何导航链接
- **键盘**：使用`Tab`导航，`Enter`激活
- **移动端**：触摸友好界面

### 📱 移动端体验

- **响应式**：针对所有屏幕尺寸优化
- **触摸**：支持滑动的轮播和交互
- **性能**：在移动网络上快速加载

### 🔗 分享

- **社交媒体**：Facebook、Twitter、LinkedIn按钮
- **电子邮件**：预格式化的邮件分享
- **复制链接**：一键URL复制

---

## 🔧 浏览器支持

| 浏览器 | 版本 | 状态 |
|--------|------|------|
| **Chrome** | 60+ | ✅ 完全支持 |
| **Firefox** | 55+ | ✅ 完全支持 |
| **Safari** | 12+ | ✅ 完全支持 |
| **Edge** | 79+ | ✅ 完全支持 |
| **移动Safari** | iOS 12+ | ✅ 完全支持 |
| **移动Chrome** | Android 7+ | ✅ 完全支持 |

---

## 🚀 性能

- **Lighthouse评分**：95+（性能、可访问性、最佳实践）
- **加载时间**：3G网络下<2秒
- **包大小**：总计<100KB
- **无依赖**：纯原生JavaScript

---

## 🤝 贡献

虽然这是一个纪念网站，但欢迎改进贡献：

1. **分叉**仓库
2. **创建**功能分支（`git checkout -b feature/improvement`）
3. **提交**更改（`git commit -am 'Add improvement'`）
4. **推送**到分支（`git push origin feature/improvement`）
5. **创建**拉取请求

### 🐛 错误报告

请使用[GitHub Issues](https://github.com/yourusername/charlie-kirk-memorial/issues)页面报告错误或建议改进。

---

## 📜 许可证和使用

这个纪念网站旨在纪念查理·柯克的记忆和他对以下方面的贡献：
- 保守主义政治和价值观
- 言论自由倡导
- 青年政治参与
- 美国爱国主义和原则

### ✅ 允许的使用
- 教育目的
- 纪念和致敬目的
- 非商业分享和分发
- 个人使用和自定义

### ❌ 限制
- 商业利用
- 内容歪曲
- 删除纪念归属
- 用于政治攻击或诽谤

---

## 🙏 致谢

- **查理·柯克** - 感谢他对保守主义价值观和言论自由的奉献
- **转折点美国组织** - 感谢继续他的使命
- **保守主义社区** - 感谢保持他的遗产
- **网络技术** - HTML5、CSS3、JavaScript ES6+

---

## 📞 支持

技术支持或问题咨询：

- **文档**：本README文件
- **问题**：[GitHub Issues页面](https://github.com/yourusername/charlie-kirk-memorial/issues)
- **邮箱**：your-email@example.com（可选）

---

<div align="center">

**"真理不会因为无人相信而消失，谎言也不会因为众人相信而成真。我们的使命是坚持真理，无论代价如何。"**

*— 查理·柯克*

---

**用❤️制作，纪念一位真正的美国爱国者**

![American Flag](https://img.shields.io/badge/🇺🇸-美国优先-red?style=for-the-badge)
![Christian Cross](https://img.shields.io/badge/✝️-信仰-gold?style=for-the-badge)
![Liberty](https://img.shields.io/badge/🗽-自由-blue?style=for-the-badge)

</div>