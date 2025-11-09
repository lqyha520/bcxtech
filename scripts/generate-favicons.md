# 生成 Favicon 和图标文件指南

## 快速开始

### 1. 使用 RealFaviconGenerator（推荐）

访问 https://realfavicongenerator.net/

1. 上传 `public/icon.svg` 或你的 Logo 图片
2. 配置选项：
   - iOS: 启用 Apple Touch Icon（180x180）
   - Android: 启用 Android Chrome Icons
   - Favicon: 启用传统 favicon
3. 生成并下载
4. 将生成的文件放到 `public` 目录

### 2. 使用命令行工具（ImageMagick）

```bash
# 安装 ImageMagick
# Windows: choco install imagemagick
# macOS: brew install imagemagick
# Linux: sudo apt-get install imagemagick

# 从 SVG 生成 PNG
convert public/icon.svg -resize 180x180 public/apple-touch-icon.png

# 生成多种尺寸的 favicon
convert public/icon.svg -resize 16x16 public/favicon-16x16.png
convert public/icon.svg -resize 32x32 public/favicon-32x32.png
convert public/icon.svg -resize 48x48 public/favicon-48x48.png

# 生成 ICO 文件（Windows）
convert public/favicon-16x16.png public/favicon-32x32.png public/favicon-48x48.png public/favicon.ico
```

### 3. 使用 Inkscape

```bash
# 安装 Inkscape
# Windows: 下载安装包
# macOS: brew install inkscape
# Linux: sudo apt-get install inkscape

# 导出 PNG
inkscape public/icon.svg --export-filename=public/apple-touch-icon.png -w 180 -h 180
```

### 4. 使用在线转换工具

- SVG to PNG: https://convertio.co/svg-png/
- PNG to ICO: https://convertio.co/png-ico/
- Favicon Generator: https://www.favicon-generator.org/

## OpenGraph 图片生成

### 使用设计工具

1. **Figma**（推荐）
   - 创建 1200x630 像素的画布
   - 设计包含 Logo、标题和描述的图片
   - 导出为 JPG 或 PNG
   - 保存为 `public/og-image.jpg`

2. **Canva**
   - 选择 "社交媒体图片" 模板
   - 选择 "Facebook 帖子" 尺寸（1200x630）
   - 设计并导出

3. **Photoshop/GIMP**
   - 创建 1200x630 像素的新文档
   - 设计图片
   - 导出为 JPG（文件更小）或 PNG（支持透明）

### 使用代码生成（高级）

可以使用 Canvas API 或服务器端图片生成库（如 sharp）动态生成。

## 验证

生成文件后，验证它们是否正确：

1. **Favicon**: 在浏览器中访问网站，查看标签页图标
2. **Apple Touch Icon**: 在 iOS Safari 中添加网站到主屏幕
3. **OpenGraph**: 使用以下工具测试：
   - https://www.opengraph.xyz/
   - https://developers.facebook.com/tools/debug/
   - https://cards-dev.twitter.com/validator

## 文件清单

确保以下文件存在于 `public` 目录：

- ✅ `favicon.svg` - SVG favicon（已创建）
- ❌ `favicon.ico` - 传统 favicon（需要生成）
- ✅ `icon.svg` - 通用图标（已创建）
- ❌ `apple-touch-icon.png` - Apple 设备图标（需要生成，180x180）
- ✅ `og-image.svg` - OpenGraph 图片占位符（已创建）
- ❌ `og-image.jpg` - OpenGraph 图片（建议生成，1200x630）
- ✅ `logo.svg` - Logo（已创建）
- ❌ `logo.png` - Logo PNG 版本（可选）

## 注意事项

1. **文件大小**: 保持图片文件尽可能小
   - Favicon: < 50KB
   - Apple Touch Icon: < 200KB
   - OG Image: < 500KB

2. **格式选择**:
   - SVG: 现代浏览器，可缩放
   - PNG: 支持透明，质量好
   - JPG: 文件小，适合照片
   - ICO: 传统 favicon，兼容性好

3. **测试**: 在不同设备和浏览器上测试图标显示

4. **更新**: 如果更改了 Logo，记得更新所有图标文件

