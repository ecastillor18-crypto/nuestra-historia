@echo off
setlocal enabledelayedexpansion
cd /d "d:\VISUAL CODE CODIGOS\FERR"
for /r img %%F in (*.mp4 *.MP4) do (
    set "size=%%~zF"
    set "name=%%~nxF"
    if !size! GEQ 104857600 (
        echo [GRANDE - !size! bytes = !size:~0,-6!.!size:~-6,1! MB] !name!
    ) else (
        echo [OK - !size! bytes] !name!
    )
)
