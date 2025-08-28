# ☁️ Azure Deployment Guide

> *"From localhost to the cloud - because your portfolio deserves a global audience!"* 🌍🚀

This comprehensive guide covers all deployment methods for your portfolio on Microsoft Azure, from simple static hosting to enterprise-grade infrastructure with Terraform.

## 🎯 Deployment Options Overview

Choose the deployment method that best fits your needs:

| Method | Complexity | Cost | Features | Best For |
|--------|------------|------|----------|----------|
| **🚀 Static Web Apps** | Low | Free/Low | Auto-deploy, CDN, SSL | Most users |
| **🏗️ Terraform (Recommended)** | Medium | Low | IaC, Scalable, Repeatable | Professional setups |
| **💾 Storage Static Website** | Low | Very Low | Basic hosting | Simple hosting |
| **🐳 Container Apps** | High | Medium | Full control, Scalable | Advanced users |

## 🚀 Option 1: Azure Static Web Apps (Quickest)

Perfect for most users - zero-config deployment with global CDN.

### ⚡ Quick Deploy

```bash
# 1. Build your portfolio
npm run build

# 2. Install Azure CLI (if not installed)
# Windows: https://aka.ms/installazurecliwindows
# macOS: brew install azure-cli
# Linux: curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# 3. Login to Azure
az login

# 4. Create Static Web App
az staticwebapp create \
  --name "your-portfolio-name" \
  --resource-group "your-resource-group" \
  --source "https://github.com/yourusername/portfolio" \
  --location "Central US" \
  --branch "main" \
  --app-location "/" \
  --output-location "dist"
```

### 🎯 Features Included

- ✅ **Global CDN**: Lightning-fast worldwide delivery
- ✅ **Free SSL**: Automatic HTTPS certificates  
- ✅ **Auto-deploy**: Deploys on every GitHub push
- ✅ **Custom Domains**: Free custom domain support
- ✅ **Staging Environments**: Preview branches automatically

### 💰 Cost Breakdown

```
Free Tier Includes:
├── 🌐 100GB bandwidth/month
├── 📁 0.5GB storage
├── 🔄 Unlimited deployments
├── 🌍 Global CDN
└── 🔒 Free SSL certificates

Standard Tier ($9/month):
├── 📈 500GB bandwidth/month  
├── 📁 2GB storage
├── 👥 Custom authentication
└── 📊 Advanced analytics
```

## 🏗️ Option 2: Terraform Deployment (Recommended)

Infrastructure as Code for professional, reproducible deployments.

### 📋 Prerequisites

```bash
# Install required tools
# 1. Azure CLI
az --version

# 2. Terraform
terraform --version

# 3. Verify Azure subscription access
az account show
```

### ⚙️ Terraform Setup

#### 1. **Service Principal Creation**

```bash
# Create service principal for Terraform
az ad sp create-for-rbac \
  --name "terraform-portfolio-sp" \
  --role Contributor \
  --scopes /subscriptions/YOUR_SUBSCRIPTION_ID \
  --sdk-auth

# Save the output - you'll need it for GitHub secrets
```

#### 2. **Configure Terraform Variables**

```bash
# Navigate to terraform directory
cd terraform

# Create terraform.tfvars from example
cp terraform.tfvars.example terraform.tfvars

# Edit with your values
nano terraform.tfvars
```

```hcl
# terraform/terraform.tfvars
project_name     = "your-portfolio"
location         = "East US 2"
environment      = "prod"

# GitHub repository details  
github_owner     = "yourusername"
github_repo      = "portfolio"
github_branch    = "main"

# Custom domain (optional)
custom_domain    = "yourdomain.com"

# Tags for resource organization
tags = {
  Project     = "Portfolio"
  Environment = "Production"
  ManagedBy   = "Terraform"
}
```

#### 3. **Deploy Infrastructure**

```bash
# Initialize Terraform
terraform init

# Review deployment plan
terraform plan

# Deploy infrastructure
terraform apply

# Save important outputs
terraform output
```

### 📊 Terraform Resources Created

```hcl
# Resource overview from main.tf
resource "azurerm_resource_group" "portfolio" {
  # Resource group for organization
}

resource "azurerm_static_site" "portfolio" {
  # Main static web app
}

resource "azurerm_dns_zone" "portfolio" {
  # DNS management (if custom domain)
}

resource "azurerm_key_vault" "portfolio" {
  # Secure secrets storage
}

resource "github_actions_secret" "deployment_token" {
  # Automated CI/CD setup
}
```

## 💾 Option 3: Azure Storage Static Website

Minimal cost option for simple hosting needs.

### 🔧 Setup Process

```bash
# 1. Create storage account
az storage account create \
  --name "portfoliostorage$(date +%s | tail -c 6)" \
  --resource-group "your-rg" \
  --location "eastus2" \
  --sku "Standard_LRS" \
  --kind "StorageV2"

# 2. Enable static website hosting
az storage blob service-properties update \
  --account-name "your-storage-account" \
  --static-website \
  --404-document "404.html" \
  --index-document "index.html"

# 3. Build and upload
npm run build
az storage blob upload-batch \
  --account-name "your-storage-account" \
  --destination '$web' \
  --source ./dist
```

### 💰 Ultra-Low Cost

```
Monthly costs (approximately):
├── 📁 Storage (1GB): ~$0.02
├── 📤 Bandwidth (10GB): ~$0.87
├── 🔄 Transactions: ~$0.01
└── 💰 Total: < $1/month
```

## 🐳 Option 4: Container Apps (Advanced)

For users who need full control and advanced features.

### 🏗️ Containerized Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
# Build and deploy container
docker build -t portfolio .
docker tag portfolio yourregistry.azurecr.io/portfolio:latest
docker push yourregistry.azurecr.io/portfolio:latest

# Deploy to Container Apps
az containerapp create \
  --name portfolio-app \
  --resource-group your-rg \
  --environment your-env \
  --image yourregistry.azurecr.io/portfolio:latest \
  --target-port 80 \
  --ingress external
```

## 🔧 Custom Domain Setup

### 📝 Domain Configuration

#### 1. **Add Custom Domain**

```bash
# For Static Web Apps
az staticwebapp hostname set \
  --name "your-portfolio" \
  --resource-group "your-rg" \
  --hostname "yourdomain.com"
```

#### 2. **DNS Configuration**

```dns
# Add these DNS records at your domain registrar:

# For apex domain (yourdomain.com)
@ ALIAS target-domain.azurestaticapps.net

# For www subdomain  
www CNAME target-domain.azurestaticapps.net

# For verification (temporary)
asverify CNAME asverify.target-domain.azurestaticapps.net
```

## 🔄 CI/CD Pipeline Setup

### 🤖 GitHub Actions Integration

Your repository automatically gets configured with deployment workflows:

```yaml
# .github/workflows/azure-static-web-apps.yml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true
      
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          output_location: "dist"
```

### 🔐 Required GitHub Secrets

Configure these secrets in your repository:

```bash
# Using GitHub CLI
gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN --body "your-deployment-token"

# Additional secrets for Terraform deployments
gh secret set AZURE_CLIENT_ID --body "service-principal-id"
gh secret set AZURE_CLIENT_SECRET --body "service-principal-secret"
gh secret set AZURE_SUBSCRIPTION_ID --body "your-subscription-id"
gh secret set AZURE_TENANT_ID --body "your-tenant-id"
```

## 📊 Monitoring & Analytics

### 🔍 Built-in Monitoring

```bash
# View deployment logs
az staticwebapp show \
  --name "your-portfolio" \
  --resource-group "your-rg"

# Monitor performance metrics
az monitor metrics list \
  --resource "your-resource-id" \
  --metric-names "Requests,ResponseTime"
```

### 📈 Analytics Integration

```javascript
// Add to your index.html
// Google Analytics 4
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: 'Portfolio',
  page_location: window.location.href
});

// Azure Application Insights
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
const appInsights = new ApplicationInsights({
  config: {
    connectionString: 'your-connection-string'
  }
});
```

## 🔧 Troubleshooting Common Issues

### ❌ Deployment Failures

#### Build Errors
```bash
# Check build locally first
npm run build
npm run preview

# Verify all environment variables are set
echo $NODE_ENV
```

#### Permission Issues
```bash
# Verify Azure CLI is authenticated
az account show

# Check resource group permissions
az role assignment list --assignee "your-user-id"
```

#### Custom Domain Issues
```bash
# Verify DNS propagation
nslookup yourdomain.com
dig yourdomain.com

# Check certificate status
az staticwebapp hostname show \
  --name "your-portfolio" \
  --resource-group "your-rg"
```

### 🚀 Performance Optimization

```bash
# Analyze bundle size
npm run build -- --report

# Check Core Web Vitals
lighthouse --only-categories=performance https://yourdomain.com

# Monitor real user metrics
az monitor app-insights metrics show \
  --app "your-app-insights" \
  --metric "pageViews"
```

## 💡 Best Practices

### 🔒 Security

- ✅ Enable HTTPS redirect
- ✅ Set proper security headers
- ✅ Use managed identities for Azure resources
- ✅ Implement Content Security Policy (CSP)
- ✅ Regular security audits with tools like Snyk

### 📈 Performance

- ✅ Enable gzip/brotli compression
- ✅ Implement proper caching headers
- ✅ Use CDN for global distribution
- ✅ Optimize images and assets
- ✅ Monitor Core Web Vitals

### 💰 Cost Optimization

- ✅ Use appropriate service tiers
- ✅ Implement auto-scaling policies
- ✅ Monitor usage with budgets and alerts
- ✅ Clean up unused resources regularly

---

<div align="center">

**☁️ Your portfolio, deployed to the world! ☁️**

*From code to cloud in minutes!*

</div>
