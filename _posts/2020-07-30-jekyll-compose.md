---
layout: post
title: jekyll-compose
date: 2020-07-30 01:47 -0700
---

## Jekyll::Compose[^1]

[^1]: [jekyll-compose](https://github.com/jekyll/jekyll-compose)

There exists a gem for jekyll called `jekyll-compose` which lets you create posts and publish them quickly without having to create the posts by hand.

To use this gem, add the following line to your `Gemfile`.
```yaml
  gem 'jekyll-compose', group: [:jekyll_plugins]
```        
Then, you can easily create new posts using:
```sh
  $ bundle exec jekyll post "my post"
```        
By default, this will only create the markdown document for the post. To enable auto opening of the file in your editor, add the following section to your jekyll config file (`_config.yml`).
```yaml
  jekyll_compose:
      auto_open: true
```               
 
