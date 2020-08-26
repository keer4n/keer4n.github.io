---
layout: post
title: Configuring i3 with polybar for named workspace
date: 2020-08-26 16:31 -0600
---

## Configuring i3wm[^1] with polybar[^2] for named workspace

[^1]: [i3wm](https://i3wm.org)
[^2]: [polybar](https://github.com/polybar/polybar)

Naming workspaces in i3wm helps when you have too many open applications
everywhere.
Polybar, which is one of the popular status bars for i3wm, does not display the
name of the workspace by default.

The goal is to configure polybar to properly display names of workspaces which
are defined in i3 configuration files. 

### Environment: 

Polybar 3.4.3
i3 4.18.1

i3 userguide[^3] says that workspaces can be named by having following
configuration. Configuration file for i3 is generally located at
`~/.config/i3/config`

```bash
    bindsym $mod+1 workspace 1: name_of_workspace_1
    bindsym $mod+2 workspace 2: name_of_workspace_2
```

[^3]: [i3 userguide](https://i3wm.org/docs/userguide.html#_named_workspaces)

However, doing so will not be reflected to polybar by default. To view
workspace name in the bar, further configuration of polybar module for
i3 is required, which can be found at `~/.config/polybar/modules.ini`. 

```bash
    [module/i3]
    label-focused = %index% %name% 
```
Basically, the `%name` placeholder which is mapped to the workspace name should
be added to `label-*` variable which only has `%index%` fixing our problem.

These workspaces can be further organized using assignments[^4] to force certain
applications to be opened in specific workspace.

[^4]: [i3 config - assignment](https://i3wm.org/docs/userguide.html#assign_workspace)

For the full configuration files, view
[dotfiles](https://github.com/keer4n/dotFiles).

