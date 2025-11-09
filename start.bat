@echo off
chcp 65001 >nul
cls
echo.
echo ========================================
echo   布草芯科技官网 - 开发服务器
echo ========================================
echo.
echo   正在启动...
echo   访问地址: http://localhost:3000
echo.
echo   按 Ctrl+C 停止服务器
echo ========================================
echo.

npm run dev

