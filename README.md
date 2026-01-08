# 🚀 Modern Portfolio Website

> *"Just because you're building your digital presence, doesn't mean you have to start from scratch... unless you're into that sort of masochisti## 📚 Documentation

Additional documentation available in the `docs/` folder:

- [📋 **CV Generator**](docs/CV_GENERATOR.md) - How to generate and customize your PDF resume
- [🖼️ **Image Optimization**](docs/IMAGE_OPTIMIZATION.md) - Image processing and performance
- [🔍 **SEO Configuration**](docs/SEO_CONFIG.md) - Search engine optimization setup
- [🏗️ **Architecture Guide**](docs/ARCHITECTURE.md) - Technical architecture and project structure
- [🔄 **CI/CD Guide**](docs/CICD.md) - Continuous integration and deploymentg adventure!"* 😄

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC.svg)](https://tailwindcss.com/)
[![Azure Static Web Apps CI/CD](https://github.com/114snehasish/portfolio/actions/workflows/azure-static-web-apps.yml/badge.svg)](https://github.com/114snehasish/portfolio/actions/workflows/azure-static-web-apps.yml)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Perfect for developers looking to showcase their work with a clean, professional design.

## 📋 Table of Contents

- [✨ Features](#-features)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [🎨 Making It Your Own](#-making-it-your-own)
- [☁️ Deployment](#️-deployment)
- [📚 Documentation](#-documentation)
- [📄 License & Attribution](#-license--attribution)

## ✨ Features

- 🎨 **Clean Design**: Professional and modern interface
- 📱 **Fully Responsive**: Works on all device sizes
- ⚡ **Fast Loading**: Optimized with Vite and image compression
- 🔍 **SEO Ready**: Meta tags and structured data included
- 📄 **CV Generator**: Automated PDF resume generation
- 🖼️ **Image Optimization**: WebP format with multiple sizes
- 🎯 **Easy Customization**: Simple data files to update content

## 📁 Project Structure

```
portfolio/
├── 📁 public/                      # Static files
│   ├── 🖼️ images/                 # Image assets
│   ├── 📄 manifest.json           # PWA manifest
│   ├── 🤖 robots.txt              # SEO crawler rules
│   └── 📋 CV.pdf                  # Generated resume
├── 📁 src/
│   ├── 📁 components/              # React components by section
│   │   ├── 👋 main/                # Hero section
│   │   ├── ℹ️ about/               # About section
│   │   ├── 💼 experiences/         # Work experience
│   │   ├── 🛠️ skills/             # Skills section
│   │   └── 📞 contact/             # Contact section
│   ├── 📁 data/                    # Content configuration
│   │   ├── 📝 aboutItems.ts        # About content
│   │   ├── 💼 experiencesItems.ts  # Work history
│   │   ├── 🎯 skillsItems.ts       # Skills data
│   │   └── 📞 contactItems.ts      # Contact info
│   └── 📁 scripts/                 # Build scripts
├── 📁 terraform/                   # Infrastructure code (optional)
├── 📁 docs/                        # Documentation
└── 📋 README.md                    # This file
```

The structure is **component-based** - each portfolio section is self-contained, making it easy to customize individual parts without affecting others.

## 🚀 Quick Start

### 1. � Get Started

```bash
# Clone the repository
git clone https://github.com/114snehasish/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` to see your portfolio!

### 2. 🎨 Update Your Content

The main content files to customize:

- `src/data/aboutItems.ts` - Your introduction and background
- `src/data/experiencesItems.ts` - Work history and achievements
- `src/data/skillsItems.ts` - Technical skills and expertise
- `src/data/contactItems.ts` - Contact information and social links

### 3. 🏗️ Build for Production

```bash
# Create production build
npm run build

# Generate your CV PDF
npm run generate-cv
```

## 🎨 Making It Your Own

### 📝 Content Updates

Replace placeholder content in the data files:

```typescript
// src/data/aboutItems.ts - Update with your story
export const aboutItems = [
  {
    id: 'intro',
    icon: FaUser,
    text: 'Your introduction with $highlighted$ keywords',
  }
];

// src/data/experiencesItems.ts - Add your work experience
export const experienceItems = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'START DATE - END DATE',
    // ... more details
  }
];
```

### 🎨 Visual Customization

Update colors in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-brand-color',
        secondary: '#your-secondary-color',
      }
    }
  }
};
```

### 🖼️ Images

- Replace `src/assets/picture.jpg` with your profile photo
- Update `public/icon.svg` with your personal logo

> 💡 **Pro Tip**: Use the `$highlighted$` syntax in your text content to automatically style important keywords!

## ☁️ Deployment

### 🚀 Azure Static Web Apps (Recommended)

```bash
# Install Azure CLI if needed
# Then create your static web app
az staticwebapp create \
  --name "your-portfolio" \
  --resource-group "your-rg" \
  --source "https://github.com/yourusername/portfolio" \
  --location "Central US" \
  --branch "main" \
  --app-location "/" \
  --output-location "dist"
```

### 🏗️ Using Terraform (Optional)

If you want Infrastructure as Code:

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

The Terraform files will set up Azure Static Web Apps with all necessary configurations.

## 📚 Documentation

Additional documentation available in the `docs/` folder:

- [� **CV Generator**](docs/CV_GENERATOR.md) - How to generate and customize your PDF resume
- [🖼️ **Image Optimization**](docs/IMAGE_OPTIMIZATION.md) - Image processing and performance
- [🔍 **SEO Configuration**](docs/SEO_CONFIG.md) - Search engine optimization setup

## 📄 License & Attribution

### 📜 MIT License

This project is open-source under the MIT License. Use it for personal or commercial projects!

### 🎭 Attribution (The Fun Part!)

**If you use this template** (and we hope you do! 🤞), here's the deal:

#### Required (But Easy!) 📋
- Keep the LICENSE file 
- Add a small footer credit
- Mention it in your README

#### Simple Attribution 😎
```html
<!-- Just add this to your footer -->
<p>Portfolio template by <a href="https://github.com/original-author">Original Author</a></p>
```

#### What You DON'T Need to Credit 🙌
- Your personal content
- Your customizations
- Your projects and experience
- Your brilliant personality ✨

> **💡 Fun Fact**: By using this template, you join the exclusive club of developers who appreciate good code without reinventing the wheel. Welcome! 🎉

### 🏢 Perfect For
- ✅ Personal portfolios
- ✅ Freelance developers
- ✅ Job hunting
- ✅ Client projects
- ✅ Learning React/TypeScript

---

<div align="center">

**🚀 Built for developers, by developers 🚀**

*Simple, fast, and effective portfolio solution*

</div>

## ✨ Features

- 🎨 **Modern UI/UX**: Clean, professional design with smooth animations
- 📱 **Fully Responsive**: Optimized for all device sizes (mobile-first approach)
- ⚡ **Performance Optimized**: Built with Vite for lightning-fast loading
- 🔍 **SEO Friendly**: Proper meta tags and structured data
- ♿ **Accessible**: WCAG compliant with proper ARIA labels
- 🎯 **Type Safe**: Full TypeScript implementation
- 📄 **CV Generator**: Automated PDF resume generation
- 🖼️ **Image Optimization**: Multiple formats and sizes for performance
- 🌐 **Blog Integration**: WordPress API support for dynamic content
- 📊 **Analytics Ready**: Google Analytics and Application Insights

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern hooks and concurrent features
- **TypeScript** - Type safety and enhanced developer experience  
- **Vite** - Next-generation build tool for fast development
- **Tailwind CSS** - Utility-first CSS framework
- **React Scroll** - Smooth navigation between sections

### Cloud & Infrastructure
- **Azure Static Web Apps** - Serverless hosting with global CDN
- **Azure Key Vault** - Secure credential management
- **Terraform** - Infrastructure as Code
- **GitHub Actions** - CI/CD automation

### Developer Tools
- **ESLint & Prettier** - Code quality and formatting
- **PostCSS** - CSS processing and optimization
- **Puppeteer** - PDF generation for CV

## � Project Structure

<details>
<summary>Click to expand detailed folder structure</summary>

```
portfolio/
├── 📁 public/                      # Static assets and public files
│   ├── 🖼️ images/                 # Image assets and icons
│   ├── 📄 manifest.json           # PWA manifest
│   ├── 🤖 robots.txt              # SEO crawler instructions
│   ├── 🗺️ sitemap.xml             # Site structure for search engines
│   └── 📋 [NAME]_CV.pdf           # Generated resume PDF
├── 📁 src/
│   ├── 📁 components/              # React components organized by section
│   │   ├── 👋 main/                # Hero/landing section
│   │   ├── ℹ️ about/               # About section
│   │   ├── 💼 experiences/         # Professional experience
│   │   ├── 🛠️ skills/             # Skills and technologies
│   │   ├── 📞 contact/             # Contact information
│   │   ├── 📰 articles/            # Blog/articles section
│   │   ├── 📄 header/              # Navigation header
│   │   └── 🦶 footer/              # Site footer
│   ├── 📁 data/                    # Static content and configuration
│   │   ├── 📝 aboutItems.ts        # About section content
│   │   ├── 💼 experiencesItems.ts  # Work experience data
│   │   ├── 🎯 skillsItems.ts       # Skills and expertise
│   │   └── 📞 contactItems.ts      # Contact information
│   ├── 📁 utils/                   # Utility functions and helpers
│   ├── 📁 types/                   # TypeScript type definitions
│   ├── 📁 scripts/                 # Build and generation scripts
│   ├── 🎨 App.css                  # Global styles
│   └── 📱 main.tsx                 # Application entry point
├── 📁 terraform/                   # Infrastructure as Code
│   ├── 🏗️ main.tf                 # Primary Terraform configuration
│   ├── 📋 variables.tf             # Input variables
│   ├── 📤 outputs.tf               # Output values
│   └── ⚙️ terraform.tfvars         # Environment-specific values
├── 📁 .github/workflows/           # GitHub Actions CI/CD
│   ├── 🔄 ci.yml                   # Continuous Integration
│   └── 🚀 deploy.yml               # Deployment workflow
├── 📁 docs/                        # Project documentation
└── 📋 README.md                    # This file
```
</details>

The architecture follows a **component-based structure** where each section of the portfolio is a self-contained React component with its own styling and data. This makes it easy to:

- 🔧 **Modify individual sections** without affecting others
- 📊 **Manage content** through TypeScript data files
- 🎨 **Customize styling** using Tailwind CSS classes
- 🚀 **Deploy incrementally** with modular updates

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Git for version control
- Azure CLI (for deployment)
- Terraform (for infrastructure)

### 1. 📥 Clone & Setup

```bash
# Clone the repository (replace with your fork)
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 2. ⚙️ Environment Configuration

Create `.env.local` file:

```env
# WordPress API (optional - for blog integration)
VITE_WORDPRESS_API_URL=https://your-blog.com/wp-json/wp/v2
VITE_WORDPRESS_SITE_URL=https://your-blog.com

# Contact configuration
VITE_CONTACT_EMAIL=your-email@domain.com

# Analytics (optional)
VITE_GA_TRACKING_ID=your-ga-id
```

### 3. 🏃‍♂️ Development Server

```bash
# Start development server with hot reload
npm run dev
```

Open `http://localhost:5173` to see your portfolio!

### 4. 🎨 Customize Your Content

Update these key files with your information:

- `src/data/aboutItems.ts` - Your introduction and background
- `src/data/experiencesItems.ts` - Work history and achievements
- `src/data/skillsItems.ts` - Technical skills and expertise  
- `src/data/contactItems.ts` - Contact information and social links

### 5. 🏗️ Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Customization Guide

### 🎯 Making It Your Own

This template is designed to be easily customizable. Here's how to personalize it:

#### 1. **Content Updates**
Replace placeholder content in data files:
```typescript
// src/data/aboutItems.ts
export const aboutItems: AboutItem[] = [
  {
    id: 'intro',
    icon: FaUser,
    text: 'Your personal introduction with $highlighted$ keywords',
  }
];
```

#### 2. **Visual Customization**
Update colors and fonts in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-brand-color',
        secondary: '#your-secondary-color',
      }
    }
  }
};
```

#### 3. **Component Structure**
Each section is modular - modify `src/components/[section]/` to change layout or functionality.

#### 4. **Assets & Images**
- Add your profile image to `src/assets/`
- Update image references in components
- Use the image optimization system for performance

> 💡 **Pro Tip**: Use `$highlighted$` syntax in text content to automatically style important keywords!

## ☁️ Azure Deployment

### 🚀 Automated Deployment (Recommended)

#### 1. **Azure Setup**
```bash
# Login to Azure
az login

# Create service principal for Terraform
az ad sp create-for-rbac --name "terraform-portfolio" \
  --role Contributor \
  --scopes /subscriptions/your-subscription-id
```

#### 2. **Terraform Deployment**
```bash
cd terraform

# Initialize and apply infrastructure
terraform init
terraform plan
terraform apply
```

#### 3. **Deploy Application**
```bash
# Build and deploy
npm run build
az staticwebapp environment set --name "your-app" --source ./dist
```

### 🏗️ Manual Azure Static Web Apps

```bash
# Create Static Web App
az staticwebapp create \
  --name "your-portfolio" \
  --resource-group "your-rg" \
  --location "East US 2" \
  --source "https://github.com/yourusername/portfolio" \
  --branch "main" \
  --app-location "/" \
  --output-location "dist"
```

For detailed deployment instructions, see [📖 Azure Deployment Guide](docs/DEPLOYMENT.md).

## 🔄 CI/CD Pipeline

### 🤖 GitHub Actions Workflow

The repository includes automated workflows for:

- **🔍 Code Quality**: Linting, type-checking, and testing
- **🏗️ Build**: Production build creation  
- **🚀 Deployment**: Automatic deployment to Azure
- **📊 Monitoring**: Performance and error tracking

#### Required Secrets

Configure these in your GitHub repository:

```bash
AZURE_CLIENT_ID              # Service Principal ID
AZURE_CLIENT_SECRET          # Service Principal Secret  
AZURE_SUBSCRIPTION_ID        # Azure Subscription
AZURE_TENANT_ID              # Azure AD Tenant
AZURE_STATIC_WEB_APPS_API_TOKEN  # Deployment token
```

### 🔧 Local Development Workflow

```bash
# Quality checks (run before committing)
npm run lint          # ESLint code analysis
npm run type-check    # TypeScript validation
npm run format        # Prettier code formatting
npm run build         # Production build test
```

For complete CI/CD setup instructions, see [📖 CI/CD Guide](docs/CICD.md).

## 📚 Documentation

Comprehensive documentation is available in the `docs/` folder:

- [� **CV Generator**](docs/CV_GENERATOR.md) - Automated PDF resume generation
- [🖼️ **Image Optimization**](docs/IMAGE_OPTIMIZATION.md) - Performance and SEO image handling
- [🔍 **SEO Configuration**](docs/SEO_CONFIG.md) - Search engine optimization setup
- [🏗️ **Architecture Guide**](docs/ARCHITECTURE.md) - Technical architecture and project structure
- [🔄 **CI/CD Guide**](docs/CICD.md) - Continuous integration and deployment

## � License & Attribution

### 📜 MIT License

This project is open-source under the MIT License. You're free to use, modify, and distribute it for personal or commercial purposes.

### 🎭 Attribution (The Fun Part!)

**If you use this template** (and we secretly hope you do! 🤞), here's the deal:

#### Required (The Serious Stuff) 📋
- Keep the LICENSE file in your repo
- Add a small attribution link in your footer
- Include attribution in your README

#### The Attribution That Won't Cramp Your Style 😎
```html
<!-- Just a tiny footer note -->
<footer>
  <p class="text-sm">
    Portfolio template by 
    <a href="https://github.com/original-author/portfolio" class="text-blue-500">
      Original Author
    </a>
  </p>
</footer>
```

#### What You DON'T Need to Attribute 🙌
- Your personal content (duh!)
- Your styling modifications  
- Your custom features
- Your deployment setup
- Your brilliant personality ✨

> **💡 Fun Fact**: By using this template, you join an exclusive club of developers who appreciate good architecture without reinventing the wheel. Welcome to the club! 🎉

### 🏢 Commercial Use Welcome!

This template is perfect for:
- ✅ Personal portfolios
- ✅ Client projects  
- ✅ Commercial websites
- ✅ Educational purposes
- ✅ That side project you've been putting off

## 🤝 Contributing

We love contributions! Whether it's fixing bugs, adding features, or improving documentation.

### 🔄 Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run quality checks (`npm run lint && npm run type-check`)
5. Commit your changes (`git commit -m "feat: add amazing feature"`)
6. Push to your fork (`git push origin feature/amazing-feature`)
7. Create a Pull Request

### 🎯 Contribution Ideas

- 🐛 Bug fixes and improvements
- ✨ New components or sections
- 📚 Documentation updates
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- 🌐 Internationalization (i18n)

---

<div align="center">

**🚀 Built with modern web technologies for the modern developer 🚀**

*Made with ❤️ and lots of ☕*

</div>