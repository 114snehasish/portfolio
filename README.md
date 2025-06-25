# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Perfect for developers and professionals looking to showcase their work, skills, and experience with a clean, professional design.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC.svg)](https://tailwindcss.com/)
[![Azure](https://img.shields.io/badge/Azure-Static_Web_Apps-0078D4.svg)](https://azure.microsoft.com/en-us/services/app-service/static/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Project Structure](#project-structure)
- [Azure Deployment](#azure-deployment)
- [GitHub Actions CI/CD](#github-actions-cicd)
- [Customization Guide](#customization-guide)
- [Code Quality](#code-quality)
- [License & Attribution](#license--attribution)
- [Contributing](#contributing)
- [Support](#support)

## ✨ Features

- **Responsive Design**: Optimized for all device sizes with mobile-first approach
- **Modern UI/UX**: Clean, professional design with smooth animations and hover effects
- **Interactive Components**: Clickable cards, smooth scrolling navigation, and dynamic content
- **Article Integration**: WordPress API integration for dynamic blog content
- **Performance Optimized**: Built with Vite for lightning-fast development and production builds
- **SEO Friendly**: Proper meta tags, semantic HTML, and optimized content structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Type Safety**: Full TypeScript implementation for better development experience

## 🛠 Tech Stack

### Frontend Technologies
- **React 18** - Modern React with hooks, functional components, and concurrent features
- **TypeScript** - Type-safe JavaScript for enhanced developer experience and code reliability
- **Vite** - Next-generation frontend tooling for fast development and optimized builds
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Scroll** - Smooth scrolling navigation between sections
- **React Icons** - Comprehensive icon library for consistent iconography

### Cloud Infrastructure (Azure)
- **Azure Static Web Apps** - Serverless hosting with global CDN and automatic SSL
- **Azure Resource Groups** - Logical container for organizing related resources
- **Azure DNS** - Domain name resolution and custom domain management
- **Azure CDN** - Global content delivery network for optimal performance
- **Azure Key Vault** - Secure storage for application secrets and certificates

### Infrastructure as Code
- **Terraform** - Infrastructure provisioning and management with declarative configuration
- **Azure Provider** - Official Terraform provider for Azure resource management
- **GitHub Provider** - Terraform provider for GitHub repository and secrets management
- **Cloudflare Provider** - DNS and CDN configuration through Terraform

### CI/CD & DevOps
- **GitHub Actions** - Automated workflows for testing, building, and deployment
- **GitHub Secrets** - Secure storage for deployment credentials and API keys
- **SonarQube** - Continuous code quality analysis and security scanning
- **Automated Testing** - Unit tests, integration tests, and end-to-end testing

### Development Tools & Quality
- **ESLint** - Code linting for JavaScript/TypeScript with custom rules
- **Prettier** - Consistent code formatting across the entire codebase
- **PostCSS** - CSS processing with autoprefixer and optimization
- **Husky** - Git hooks for pre-commit quality checks

## 📋 Prerequisites

### Required Software
- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v8.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (v2.34.0 or higher) - [Download](https://git-scm.com/)

### Azure Development Prerequisites
- **Azure CLI** (v2.50.0 or higher) - [Installation Guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- **Terraform** (v1.5.0 or higher) - [Download](https://www.terraform.io/downloads)
- **Active Azure Subscription** with appropriate permissions
- **Azure Service Principal** (for automated deployments)

### Optional Tools
- **GitHub CLI** (v2.32.0 or higher) - For repository management
- **Visual Studio Code** - Recommended IDE with Azure extensions
- **Docker** - For containerized development (optional)

### Azure Permissions Required
- **Contributor** role on the target Azure subscription
- **DNS Zone Contributor** (if using custom domains)
- **Storage Account Contributor** for static website hosting

## 🚀 Local Development

### 1. Repository Setup

```bash
# Clone the repository
git clone https://github.com/114snehasish/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
yarn install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# WordPress API Configuration (Optional)
VITE_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
VITE_WORDPRESS_SITE_URL=https://your-wordpress-site.com

# Contact Form Configuration (Optional)
VITE_CONTACT_EMAIL=your-email@domain.com

# Analytics Configuration (Optional)
VITE_GA_TRACKING_ID=GA_MEASUREMENT_ID
```

### 3. Development Server

```bash
# Start development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` with hot module replacement enabled.

### 4. Build and Preview

```bash
# Build for production
npm run build
# or
yarn build

# Preview production build locally
npm run preview
# or
yarn preview
```

### 5. Code Quality Checks

```bash
# Run ESLint
npm run lint
# or
yarn lint

# Run TypeScript type checking
npm run type-check
# or
yarn type-check

# Format code with Prettier
npm run format
# or
yarn format
```

## 📁 Project Structure

```
portfolio/
├── public/                          # Static assets
│   ├── images/                     # Image assets and icons
│   ├── vite.svg                    # Vite logo
│   └── favicon.ico                 # Site favicon
├── src/
│   ├── components/                 # React components
│   │   ├── about/                  # About section component
│   │   ├── articles/               # Articles/blog section
│   │   ├── contact/                # Contact section
│   │   ├── experiences/            # Professional experiences
│   │   ├── footer/                 # Footer component
│   │   ├── header/                 # Header/navigation
│   │   ├── main/                   # Hero/main section
│   │   ├── projects/               # Projects showcase
│   │   └── skills/                 # Skills and expertise
│   ├── data/                       # Static data files
│   │   ├── aboutItems.ts           # About section content
│   │   ├── experiencesItems.ts     # Professional experience data
│   │   ├── projectsItems.ts        # Project portfolio data
│   │   └── skillsItems.ts          # Skills and technologies
│   ├── hooks/                      # Custom React hooks
│   ├── types/                      # TypeScript type definitions
│   ├── utils/                      # Utility functions
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles and Tailwind imports
├── terraform/                      # Infrastructure as Code
│   ├── main.tf                     # Main Terraform configuration
│   ├── variables.tf                # Variable definitions
│   ├── outputs.tf                  # Output definitions
│   └── terraform.tfvars.example    # Example variables file
├── .github/
│   └── workflows/                  # GitHub Actions workflows
│       ├── ci.yml                  # Continuous Integration
│       └── deploy.yml              # Automated deployment
├── package.json                    # Node.js dependencies and scripts
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite build configuration
└── README.md                       # Project documentation
```

## ☁️ Azure Deployment

### Option 1: Automated Deployment with Terraform (Recommended)

#### 1. Azure Authentication Setup

```bash
# Login to Azure CLI
az login

# Set your subscription (if you have multiple)
az account set --subscription "your-subscription-id"

# Create a service principal for Terraform
az ad sp create-for-rbac --name "terraform-portfolio" --role Contributor --scopes /subscriptions/your-subscription-id
```

#### 2. Terraform Configuration

```bash
# Navigate to terraform directory
cd terraform

# Copy and customize variables
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars with your specific values

# Initialize Terraform
terraform init

# Plan the deployment
terraform plan

# Apply the infrastructure
terraform apply
```

#### 3. Deploy Application Code

```bash
# Build the application
npm run build

# Get the deployment token from Terraform output
DEPLOYMENT_TOKEN=$(terraform output -raw azure_static_web_app_api_key)

# Deploy using Azure CLI
az staticwebapp environment set \
  --name "portfolio-prod" \
  --environment-name "default" \
  --source ./dist
```

### Option 2: Manual Azure Static Web Apps Deployment

#### 1. Create Resource Group

```bash
# Create resource group
az group create \
  --name "portfolio-rg" \
  --location "East US 2"
```

#### 2. Create Static Web App

```bash
# Create Static Web App
az staticwebapp create \
  --name "portfolio-swa" \
  --resource-group "portfolio-rg" \
  --location "East US 2" \
  --source "https://github.com/yourusername/portfolio" \
  --branch "main" \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

#### 3. Configure Custom Domain (Optional)

```bash
# Add custom domain
az staticwebapp hostname set \
  --name "portfolio-swa" \
  --resource-group "portfolio-rg" \
  --hostname "yourdomain.com"
```

### Option 3: Azure Storage Static Website

#### 1. Create Storage Account

```bash
# Create storage account
az storage account create \
  --name "portfoliostorage$(date +%s)" \
  --resource-group "portfolio-rg" \
  --location "East US 2" \
  --sku "Standard_LRS" \
  --kind "StorageV2"

# Enable static website hosting
az storage blob service-properties update \
  --account-name "portfoliostorage$(date +%s)" \
  --static-website \
  --404-document "404.html" \
  --index-document "index.html"
```

#### 2. Deploy Built Files

```bash
# Build the application
npm run build

# Upload files to storage
az storage blob upload-batch \
  --account-name "portfoliostorage$(date +%s)" \
  --destination '$web' \
  --source ./dist \
  --overwrite
```

## 🔄 GitHub Actions CI/CD

### Workflow Configuration

The repository includes two main workflows:

#### 1. Continuous Integration (`.github/workflows/ci.yml`)

```yaml
name: CI
on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
```

#### 2. Deployment (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to Azure
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          action: "upload"
          app_location: "/"
          output_location: "dist"
```

### Required GitHub Secrets

Configure these secrets in your GitHub repository settings:

```bash
# Azure deployment secrets
AZURE_CLIENT_ID              # Service Principal Application ID
AZURE_CLIENT_SECRET          # Service Principal Password
AZURE_SUBSCRIPTION_ID        # Azure Subscription ID
AZURE_TENANT_ID              # Azure Active Directory Tenant ID
AZURE_STATIC_WEB_APPS_API_TOKEN  # Static Web App deployment token

# Code quality secrets
SONAR_TOKEN                  # SonarQube authentication token
SONAR_HOST_URL              # SonarQube server URL

# Optional: Cloudflare secrets (if using custom domain)
CLOUDFLARE_API_TOKEN        # Cloudflare API token
CLOUDFLARE_ZONE_ID          # Cloudflare Zone ID
```

### Setting up Secrets

```bash
# Using GitHub CLI
gh secret set AZURE_CLIENT_ID --body "your-client-id"
gh secret set AZURE_CLIENT_SECRET --body "your-client-secret"
gh secret set AZURE_SUBSCRIPTION_ID --body "your-subscription-id"
gh secret set AZURE_TENANT_ID --body "your-tenant-id"

# Or use the GitHub web interface:
# Repository → Settings → Secrets and variables → Actions → New repository secret
```

## 🎨 Customization Guide

### 1. Personal Information

Update the following files with your information:

#### Main/Hero Section (`src/components/main/Main.tsx`)
```typescript
// Update the hero section content
const Main = () => {
  return (
    <main className="main">
      <section className="main-section">
        <div className="section-container">
          <p className="text-regular">
            <span className="text-secondary">Hi,</span> I am
          </p>
          <div className="big-text">
            <h1>Your Name Here.</h1>
            <h1 className="caption">Your tagline or profession.</h1>
          </div>
          {/* Update description */}
        </div>
      </section>
    </main>
  );
};
```

#### About Section (`src/data/aboutItems.ts`)
```typescript
export const aboutItems: AboutItem[] = [
  {
    id: 'introduction',
    icon: FaUser,
    text: 'Your introduction paragraph with $highlighted$ keywords.',
  },
  // Add more about items
];
```

### 2. Professional Experience

Update `src/data/experiencesItems.ts`:

```typescript
export const experienceItems: ExperienceItem[] = [
  {
    id: 1,
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'START DATE - END DATE',
    icon: YourIcon,
    rolesAndResponsibilities: 'Detailed description of your role...',
    keyOutcomes: 'Key achievements and outcomes...',
    skills: ['Skill1', 'Skill2', 'Skill3'],
    type: 'Professional', // or 'Personal'
  },
];
```

### 3. Skills and Technologies

Update `src/data/skillsItems.ts`:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: FaCode,
    description: 'Your description of frontend skills...',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
  },
];
```

### 4. Projects Portfolio

Update `src/data/projectsItems.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Detailed project description...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/yourusername/project',
    live: 'https://your-project.com',
    image: '/images/project-screenshot.jpg',
  },
];
```

### 5. Styling and Theming

#### Color Scheme (`tailwind.config.js`)
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-primary-color',
        secondary: '#your-secondary-color',
        accent: '#your-accent-color',
      },
    },
  },
};
```

#### Typography and Fonts (`src/index.css`)
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');

:root {
  --font-family: 'YourFont', sans-serif;
}
```

### 6. WordPress Blog Integration

To integrate with WordPress for dynamic articles:

#### 1. WordPress Setup
- Install WordPress with REST API enabled
- Install a plugin like "Application Passwords" for API authentication
- Configure CORS settings if needed

#### 2. Environment Configuration
```env
VITE_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
VITE_WORDPRESS_SITE_URL=https://your-wordpress-site.com
```

#### 3. Customize Article Component
Update `src/components/articles/Articles.tsx` to match your WordPress structure.

## 🔍 Code Quality & Testing

### SonarQube Integration

#### Local SonarQube Analysis
```bash
# Run SonarQube scanner locally
sonar-scanner.bat \
  -D"sonar.projectKey=portfolio" \
  -D"sonar.sources=." \
  -D"sonar.host.url=http://192.168.29.100:9090" \
  -D"sonar.token=your_token"
```

#### Quality Gates
The project maintains high code quality standards:
- **Coverage**: Minimum 80% code coverage
- **Duplications**: Less than 3% duplicated lines
- **Maintainability**: A rating for technical debt
- **Reliability**: A rating for bugs
- **Security**: A rating for vulnerabilities

### Code Standards

#### ESLint Configuration
```json
{
  "extends": [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
  }
}
```

#### Prettier Configuration
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

### Performance Optimization

#### Bundle Analysis
```bash
# Analyze bundle size
npm run build -- --analyze

# Check for unused dependencies
npx depcheck
```

#### Optimization Features
- **Tree Shaking**: Automatic removal of unused code
- **Code Splitting**: Dynamic imports for route-based splitting
- **Asset Optimization**: Image compression and lazy loading
- **CDN Integration**: Global content delivery through Azure CDN

## 📄 License & Attribution

### MIT License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Attribution Requirements

**If you use this repository as a template for your portfolio, you must provide proper attribution:**

#### Required Attribution
1. **Keep the original LICENSE file** in your repository
2. **Add attribution in your website footer**:
   ```html
   <footer>
     <p>
       Portfolio template by 
       <a href="https://github.com/114snehasish/portfolio" target="_blank" rel="noopener noreferrer">
         Snehasish Chakraborty
       </a>
     </p>
   </footer>
   ```

3. **Include attribution in your README**:
   ```markdown
   ## Attribution
   This portfolio is built using a template created by [Snehasish Chakraborty](https://github.com/114snehasish/portfolio).
   ```

#### What You Don't Need to Attribute
- Your personal content (text, images, projects, experiences)
- Your customizations and style modifications  
- Your deployment configuration and infrastructure
- Your additional features and functionality

### Example Attribution

```html
<!-- Minimal footer attribution -->
<p class="text-sm text-gray-500">
  Built with a template by 
  <a href="https://www.snehasish-chakraborty.com" 
     target="_blank" 
     rel="noopener noreferrer"
     class="text-blue-500 hover:text-blue-600">
    Snehasish Chakraborty
  </a>
</p>
```

### Commercial Use

This template can be used for:
- ✅ Personal portfolios
- ✅ Commercial projects
- ✅ Client work
- ✅ Educational purposes
- ✅ Open source projects

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test your changes**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```
5. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Create a Pull Request**

### Contribution Types

- 🐛 **Bug fixes**
- ✨ **New features**
- 📚 **Documentation improvements**
- 🎨 **UI/UX enhancements**
- ⚡ **Performance optimizations**
- 🔧 **Infrastructure improvements**

### Code Review Process

1. All submissions require review
2. Automated checks must pass (CI/CD)
3. Code must follow established patterns
4. Documentation must be updated for new features

## 📞 Support & Community

### Getting Help

1. **Check existing issues**: [GitHub Issues](https://github.com/114snehasish/portfolio/issues)
2. **Create a new issue**: Provide detailed description and reproduction steps
3. **Discussions**: Use GitHub Discussions for questions and ideas

### Reporting Issues

When reporting issues, please include:
- **Environment details** (Node.js version, OS, browser)
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Screenshots or error logs** (if applicable)
- **Configuration files** (sanitized)

### Community Guidelines

- Be respectful and constructive
- Help others when possible
- Share your success stories and customizations
- Contribute back improvements when feasible

## 🗺️ Roadmap

### Upcoming Features
- [ ] **Content Management**: Admin dashboard for dynamic content updates
- [ ] **Analytics Integration**: Google Analytics and Azure Application Insights
- [ ] **Contact Form**: Serverless contact form with Azure Functions
- [ ] **Multi-language Support**: Internationalization (i18n) implementation
- [ ] **Progressive Web App**: PWA features with service workers
- [ ] **Advanced SEO**: Schema markup and enhanced meta tags
- [ ] **Performance Monitoring**: Real User Monitoring (RUM) integration

### Infrastructure Improvements
- [ ] **Container Support**: Docker containerization
- [ ] **Kubernetes Deployment**: K8s manifests and Helm charts
- [ ] **Monitoring Stack**: Prometheus and Grafana integration
- [ ] **Security Enhancements**: OWASP security best practices
- [ ] **Automated Testing**: E2E testing with Playwright
- [ ] **Load Testing**: Performance testing automation

---

**Made with ❤️ by [Snehasish Chakraborty](https://www.snehasish-chakraborty.com)**

*Built using React, TypeScript, Tailwind CSS, Azure, and Terraform*