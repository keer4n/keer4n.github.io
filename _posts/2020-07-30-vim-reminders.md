---
layout: post
title: Vim reminders
date: 2020-07-30 02:05 -0700
---

## Vim reminders

Some vim tricks/tips that I keep forgetting:

1. ### Deleting between tags[^1]: 
   `dat` for deleting a tag and its inner html
   `dit` for deleting the inner html only
2. ### File name auto completion[^2]:
   `C-x C-f` to access a scrollable list of files in current directory. Use `C-n` for next and `C-f` for previous to scroll the list.
3. ### Deleting blocks of text inside parenthesis[^3] (see `help text-objects`):
   `dab` for deleting a block of text. eg. (.....)
   `dib` for deleting inner block of text.
   
[^1]: [Vim 101: Efficient HTML Editing with Text Objects](https://medium.com/usevim/vim-101-efficient-html-editing-with-text-objects-1571734718e3)
[^2]: [Code Yarns - How to autocomplete path in Vim insert mode](https://codeyarns.github.io/tech/2016-10-06-how-to-autocomplete-path-in-vim-insert-mode.html)
[^3]: [Stack Overflow](https://stackoverflow.com/questions/405415/can-you-grab-or-delete-between-parentheses-in-vi-vim)
