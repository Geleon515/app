@echo off
cd /d "%~dp0"
where node >nul 2>&1
if %errorlevel%==0 (node serve.mjs) else (py -3 serve.py)
pause
