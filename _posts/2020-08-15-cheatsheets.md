---
layout: post
title: cheatsheets
date: 2020-08-15 22:45 -0600
---
[##](##) Cheatsheet

[###](###) Browsers:
    - Next Tab -> Ctrl + Tab
    - Previous Tab -> Ctrl + Shift + Tab

[###](###) Linux:
    - Power supply, battery status -> /sys/class/power_supply/BAT0/
    - Regularly updating archlinux is recommended and updating may occasionally 
      fail during integrity check. This is due to revoked or failed keys. You can
      update the keys using[^1]:
      ```shell
        pacman -Sy archlinux-keyring
      ```

[^1]: pacman/Package signing - ArchWiki

