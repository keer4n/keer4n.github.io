---
layout: post
title: Using BFG to clean out unwanted/sensitive files
date: 2020-09-09 15:27 -0600
---

## Using BFG to clean out unwanted/sensitive files

The goal is to clean a git repository with unwanted/sensitive files. For eg. Some 
key/password files were uploaded to the remote git repo. Then, git will preserve their
history regardless of if you delete it later (that's what git is for). To completely 
eradicate it from your git history quickly and painlessly, BFG repo-cleaner[^1] can
be used.

[^1]: [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)

For arch linux, you can install the tool from AUR with `yay` with:

    $ yay -S bfg
    
First, start with deleting the unwanted files and commiting to remote as BFG won't 
modify your latest commit to delete those files. Once the files are deleted, the 
git history can be cleaned.

Next, clone the git database (.git folder) for your repo using:
    
    $ git clone --mirror git@github.com:username/some-unclean-repo.git
    
Now you can run BFG-specific commands to clean your repo.
To delete a file:

    $ bfg --delete-files file_name some-unclean-repo.git
    
To delete a folder:

    $ bfg --delete-folders folder_name some-unclean-repo.git
    
Then, go into your folder and clean unwanted data using:

    $ cd some-unclean-repo.git
    $ git reflog expire --expire=now --all && git gc --prune=now --aggressive
    
Now, you can push it to remote to have an updated clean history using `git push` and it is recommended
to reclone the repo for future use to prevent unwarranted pushing of dirty history.

