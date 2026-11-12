---
layout: post
title: "Setting up Vim as a lightweight IDE in 7 steps"
description: "Seven steps to turn Vim into a lightweight, portable IDE."
date: 2024-07-06 08:39:46 -0300
lang: en
translation_key: configurando-o-vim-com-um-ide-leve-em-7-passos
categories: [Tools]
tags: [vim, productivity, linux]
image: /assets/images/posts/vim-logo.png
permalink: /en/articles/setting-up-vim-as-a-lightweight-ide-in-7-steps/
---
## 1. Create a minimal vimrc

The first file found will be used:
- `$VIMINIT` (environment variable)
- `$HOME/.vimrc`
- `$HOME/.vim/vimrc`
- `$EXINIT` (environment variable)
- `$HOME/.exrc`
- `$VIMRUNTIME/defaults.vim`

**Minimal vimrc:**
```vim
filetype plugin indent on
syntax on
set backspace=indent,eol,start
set hidden
set noswapfile
```

## 2. Fix the formatting

### Python example (following PEP 8):
- 4 spaces per indentation level
- 79-character line limit

**Configuration:**
```vim
$HOME/.vim/after/ftplugin/python.vim
set shiftwidth=4 tabstop=4 softtabstop=4 expandtab=4 autoindent smartindent
set colorcolumn=80
```

## 3. Adjust your path

Make sure your current directory (:pwd) is the project root. Identify which parts of the project you'll explore often and add them to your `:path`.

**Configuration:**
```vim
$HOME/.vim/vimrc
set path=.,**

$HOME/.vim/after/ftplugin/python.vim
setlocal path=src/**,tests,bin/**
setlocal wildignore=*/__pycache__/*,*.pyc
```

## 4. Set up include search

Include search is very powerful: it defines commands and patterns that let you instantly locate symbol definitions (such as functions, variables, and macros).

**Configuration:**
```vim
$HOME/.vim/after/ftplugin/python.vim
setlocal include=^\\s*import
setlocal define=^\\s*\\<\\(def\\\|class\\)\\>
```

## 5. Set up tags

When include search fails, tags are the best option. Just create a tags file for your project and keep it in sync after making changes.

**Configuration:**
```vim
$HOME/.tags
--langdef=Go
--langmap=Go:.go
--regex-Go=/func([ \t]+\([^)]+\))?[ \t]+([a-zA-Z0-9_]+)/\2/d,func/
--regex-Go=/var[ \t]+([a-zA-Z_][a-zA-Z0-9_]+)/\1/d,var/
--regex-Go=/type[ \t]+([a-zA-Z_][a-zA-Z0-9_]+)/\1/d,type/
--regex-Go=/const[ \t]+([a-zA-Z_][a-zA-Z0-9_]+)/\1/d,const/
```

## 6. Add compiler support

Integrate a compiler with Vim's `makeprg` and `errorformat` for seamless build-and-edit workflows.

**Configuration:**
```vim
$HOME/.vim/compiler/go.vim
let current_compiler = 'go'
CompilerSet makeprg=go\ build\ ./...
CompilerSet errorformat=%E%f:%l:%c:%m

$HOME/.vim/after/ftplugin/go.vim
compiler go
nnoremap <buffer> <space> :silent make <bar> redraw!<CR>
```

## 7. Make your setup portable

Use GNU Stow: push your dotfiles to a GitHub repository and use Stow to deploy them.

---

**Source:** [Lee Ren Talks](https://www.youtube.com/c/leerentalks)
- GitHub: leerenchang
- Twitter: leeren
