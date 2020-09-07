---
layout: post
title: Configuring notification daemon - dunst
date: 2020-09-04 15:02 -0600
---

## Configuring notification daemon - dunst

The goal is to configure `dunst` which describes itself as a lightweight notification daemon on i3-wm. You can get dunst from the community repository. Install it by:
```bash
  #pacman -S dunst
```
You should add it to the startup.

For i3 you can add `exec_always dunst` to you config file (`~/.config/i3/config`).

Next, a simple bash script where we will use the notification daemon to display a primitive ticking timer.
```bash
  #!/bin/bash
  
  i=0
  limit=$1 
  while true; do
    notify-send -h int:value:$i Timer
    sleep 1
    i=$[$i+1]
    if [ $i -eq $time ]; then
      exit
    fi
  done
```
What this script will do is invoke `notify-send` with a `hint` value to dunst which handles this as progress value using `%p` or `%n` format specifier. To enable this, you need to change some configuration options in dunstrc file (`~/.config/dunst/dunstrc`).
```bash
  format = "<b>%s %n</b>\n%b"
  
  stack_duplicates = yes
  hide_duplicate_count = yes
```

### Refs:

1. [Dunst project home](https://dunst-project.org/)
2. [Way to display a countdown in a terminal](https://superuser.com/questions/611538/is-there-a-way-to-display-a-countdown-or-stopwatch-timer-in-a-terminal)

