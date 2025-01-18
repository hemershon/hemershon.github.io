---
layout: post
title: "Configurando o Vim com um IDE leve em 7 passos"
image: assets/images/Vimlogo.svg.png
permalink: configurando-o-vim-com-um-ide-leve-em-7-passos
date: 2024-07-06 08:39:46
comments: true
description: "Configurando o Vim com um IDE leve em 7 passos"
keywords: ""
categories:

tags:

---

# Configurando o Vim como um IDE Leve em 7 Passos

## 1. Crie um Vimrc Minimalista

O primeiro arquivo encontrado será usado:
- `$VIMINIT` (variável de ambiente)
- `$HOME/.vimrc`
- `$HOME/.vim/vimrc`
- `$EXINIT` (variável de ambiente)
- `$HOME/.exrc`
- `$VIMRUNTIME/defaults.vim`

**Vimrc Minimalista:**
```vim
filetype plugin indent on
syntax on
set backspace=indent,eol,start
set hidden
set noswapfile
```

## 2. Corrija a Formatação

### Exemplo de Python (seguindo os padrões PEP 8):
- 4 espaços por nível de indentação
- Limite de 79 caracteres por linha

**Configuração:**
```vim
$HOME/.vim/after/ftplugin/python.vim
set shiftwidth=4 tabstop=4 softtabstop=4 expandtab=4 autoindent smartindent
set colorcolumn=80
```

## 3. Ajuste seu Caminho

Certifique-se de que seu diretório atual (:pwd) seja a raiz do projeto. Identifique quais partes do projeto serão frequentemente exploradas e adicione-as ao seu `:path`.

**Configuração:**
```vim
$HOME/.vim/vimrc
set path=.,**

$HOME/.vim/after/ftplugin/python.vim
setlocal path=src/**,tests,bin/**
setlocal wildignore=*/__pycache__/*,*.pyc
```

## 4. Configure a Busca de Inclusão

A busca de inclusão é muito poderosa e define comandos e padrões que permitem localizar instantaneamente definições de símbolos (como funções, variáveis e macros).

**Configuração:**
```vim
$HOME/.vim/after/ftplugin/python.vim
setlocal include=^\\s*import
setlocal define=^\\s*\\<\\(def\\\|class\\)\\>
```

## 5. Configure Tags

Quando a busca de inclusão falhar, as tags são a melhor opção. Basta criar um arquivo de tags para o seu projeto e mantê-lo sincronizado após fazer alterações.

**Configuração:**
```vim
$HOME/.tags
--langdef=Go
--langmap=Go:.go
--regex-Go=/func([ \t]+\([^)]+\))?[ \t]+([a-zA-Z0-9_]+)/\2/d,func/
--regex-Go=/var[ \t]+([a-zA-Z_][a-zA-Z0-9_]+)/\1/d,var/
--regex-Go=/type[ \t]+([a-zA-Z_][a-zA-Z0-9_]+)/\1/d,type/
--regex-Go=/const[ \t]+([a-zA-Z_][a-zA-Z0-9_]+)/\1/d,const/
```

## 6. Adicione Suporte ao Compilador

Integre um compilador com `makeprg` e `errorformat` do Vim para fluxos de trabalho de compilação e edição contínuos.

**Configuração:**
```vim
$HOME/.vim/compiler/go.vim
let current_compiler = 'go'
CompilerSet makeprg=go\ build\ ./...
CompilerSet errorformat=%E%f:%l:%c:%m

$HOME/.vim/after/ftplugin/go.vim
compiler go
nnoremap <buffer> <space> :silent make <bar> redraw!<CR>
```

## 7. Torne a Configuração Portátil

Utilize o GNU Stow - envie seus dotfiles para um repositório no GitHub e use o Stow para distribuição.

---




**Agradecimentos!**
**Font:**
**Créditos:** Este modelo de apresentação foi criado pela Slidesgo, incluindo ícones da Flaticon e infográficos e imagens da Freepik.
[Lee Ren Talks](https://www.youtube.com/c/leerentalks)
- GitHub: leerenchang
- Twitter: leeren
