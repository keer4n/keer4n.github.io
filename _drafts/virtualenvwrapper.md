---
layout: post
title: virtualenvwrapper
---

## `virtualenvwrapper` python package[^1]

[^1]: [Python virtual environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/development_environment)

helps to create a consistent interface for managing interfaces on all platforms.

### Setup 

install using `sudo pip install virtualenvwrapper`

on `.bashrc` add the following lines:
```bash
    export WORKON_HOME=$HOME/.virtualenvs
    
    export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
    export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
    export PROJECT_HOME=$HOME/Devel
    source /usr/local/bin/virtualenvwrapper.sh
```
The `virtualenvwrapper.sh` file may be installed in local bin i.e. ~/.local/bin/
if pip installed it in the user space.

### Usage

```shell
    $ mkvirtualenv 'env_name'
```

- `deactivate` - exit current Python virtual environment
- workon - list available virtual environments
- workon 'env_name' - activate the specified Python virutal environment
- rmvirtualenv 'env_name' - remove the specified environment

