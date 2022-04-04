---
layout: post
title: cheatsheets
date: 2020-08-15 22:45 -0600
---

## Cheatsheet

### Browsers:
- Next Tab -> Ctrl + Tab
- Previous Tab -> Ctrl + Shift + Tab

### Linux:
- Power supply, battery status -> /sys/class/power_supply/BAT0/
- Regularly updating archlinux is recommended and updating may occasionally fail during integrity check. This is due to revoked or failed keys. You can update the keys using[^1]:

```shell
pacman -Sy archlinux-keyring
```
 
### Github:
- To get the permalink for a commit/file on github, press `y`[^2].

### VS Code:
- zenmode: `Ctrl + K,Z` or  `Cmd + K,Z` 

[^1]: [pacman/Package signing - ArchWiki](https://wiki.archlinux.org/title/Pacman/Package_signing)
[^2]: [Getting permanent links to files - GitHub Docs](https://docs.github.com/en/repositories/working-with-files/using-files/getting-permanent-links-to-files)

