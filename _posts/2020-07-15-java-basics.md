---
layout: post
title: Java Basics
date: 2020-07-15 11:54 -0700
---
> Basics

<!--more-->
1. Three types of variables: 
   - Class variables/Static variables - available via class, without the need to create on object
   - Instance variables - variables denoting the state of class
   - Local variable - variables inside the methods
2. Access modifiers/specifiers:

      |                       | Class | Package | Subclass (same pkg) | Subclass (diff pkg) | World |
      |-----------------------|-------|---------|---------------------|---------------------|-------|
      | public                | +     | +       | +                   | +                   | +     |
      | protected             | +     | +       | +                   | +                   |       |
      | no modifier (default) | +     | +       | +                   |                     |       |
      | private               | +     |         |                     |                     |       |

3. StringBuffer are thread-safe version of StringBuilder.
4. String literals live in string constant pool whereas string objects live in heap.
5. AWS VPC allows you to configure/setup a networking environment among different EC2 instances. Limited to a region but can be multi-AZ.
