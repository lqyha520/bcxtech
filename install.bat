@echo off
chcp 65001 >nul
echo ========================================
echo 布草芯科技官网 - 安装依赖
echo ========================================
echo.

echo 正在检查 Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 未检测到 Node.js，请先安装 Node.js
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js 已安装
echo.

echo 正在安装依赖包...
echo 这可能需要几分钟时间，请耐心等待...
echo.

call npm install

if errorlevel 1 (
    echo.
    echo ❌ 安装失败，请检查网络连接或尝试使用淘宝镜像:
    echo npm config set registry https://registry.npmmirror.com
    pause
    exit /b 1
)

echo.
echo ========================================
echo ✅ 安装完成！
echo ========================================
echo.
echo 运行以下命令启动开发服务器:
echo   npm run dev
echo.
echo 然后在浏览器中打开: http://localhost:3000
echo.
pause

