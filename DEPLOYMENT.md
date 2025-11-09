# 快速部署指南

这是部署文档的快速参考版本。详细说明请查看 [部署文档.md](./部署文档.md)

## 🚀 快速开始

### Vercel 部署（推荐）

1. **准备代码**
   ```bash
   git add .
   git commit -m "准备部署"
   git push origin main
   ```

2. **在 Vercel 部署**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "Add New Project"
   - 选择你的 GitHub 仓库
   - 配置环境变量：`NEXT_PUBLIC_SITE_URL=https://your-domain.com`
   - 点击 "Deploy"

3. **完成**
   - 等待构建完成（1-3分钟）
   - 访问生成的 URL
   - 配置自定义域名（可选）

### Docker 部署

```bash
# 构建镜像
docker build -t bucaoxin-website .

# 运行容器
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://your-domain.com \
  --name bucaoxin-website \
  bucaoxin-website
```

### 服务器部署

```bash
# 1. 安装依赖
npm install

# 2. 构建项目
npm run build

# 3. 启动服务
npm start

# 4. 使用 PM2（推荐）
pm2 start npm --name "bucaoxin-website" -- start
pm2 save
pm2 startup
```

## ⚙️ 环境变量

创建 `.env.production` 文件：

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## ✅ 部署检查清单

- [ ] 代码已提交到 Git
- [ ] 环境变量已配置
- [ ] 本地构建测试通过
- [ ] 图片资源已准备
- [ ] 域名已配置
- [ ] SSL 证书已配置
- [ ] 监控已设置

## 🔍 验证部署

1. **功能测试**
   - 访问首页
   - 测试所有页面
   - 测试移动端

2. **SEO 验证**
   - 访问 `/sitemap.xml`
   - 访问 `/robots.txt`
   - 使用 OpenGraph 验证工具

3. **性能测试**
   - Google PageSpeed Insights
   - GTmetrix

## 📚 详细文档

查看 [部署文档.md](./部署文档.md) 获取完整部署说明。

