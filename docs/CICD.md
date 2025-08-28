# 🚀 CI/CD Guide

> *"Because manually deploying in 2025 is like using Internet Explorer - technically possible, but why would you?"* 🤖😄

## 🎯 What You Actually Have

Your portfolio has **3 simple workflows**:

### 1. 🌐 **Main Deployment** (`azure-static-web-apps.yml`)
- **When**: Every push to `main` branch
- **What**: Builds and deploys your portfolio to Azure
- **Magic**: Creates preview deployments for PRs too!

### 2. 🏗️ **Create Infrastructure** (`terraform_create.yml`) 
- **When**: Manual trigger only (you click a button)
- **What**: Sets up Azure resources using Terraform
- **Options**: Choose dev, staging, or prod environment

### 3. 💥 **Destroy Infrastructure** (`terraform_destroy.yml`)
- **When**: Manual trigger only 
- **What**: Tears down Azure resources (when you want to save money!)
- **Options**: Choose which environment to destroy

## 🔄 How Your Deployment Actually Works

```
You Push Code → GitHub Actions → Builds → Azure Static Web Apps → Live!
```

**That's it!** No complex pipelines, no 47-step processes.

## 🛠️ The Real Files You Have

Your workflows live in `.github/workflows/`:
- `azure-static-web-apps.yml` - The main deployment
- `terraform_create.yml` - Infrastructure setup
- `terraform_destroy.yml` - Infrastructure teardown

## 🎯 What Happens When You Push

1. **🔍 GitHub detects your push**
2. **📦 Installs dependencies** (`npm ci`)
3. **🏗️ Builds your app** (`npm run build` → `dist/` folder)
4. **🚀 Deploys to Azure** (uploads `dist/` contents)
5. **✅ Done!** (usually takes 2-3 minutes)

## 💡 Quick Tips

- **🌿 Work in branches** → Create PR → Auto-preview → Merge → Live
- **👀 Watch Actions tab** → Green ✅ = good, Red ❌ = fix it  
- **⚡ Manual infrastructure** → Use the terraform workflows when needed
- **💸 Save money** → Destroy dev/staging when not needed

---

**🎉 Simple, real, and actually what you have! 🎉**