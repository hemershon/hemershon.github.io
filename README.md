# Hemershon Silva — Blog

Blog pessoal bilíngue (Português / English), feito com Jekyll e publicado no GitHub Pages.

## Requisitos

- Ruby (use uma versão suportada pelo GitHub Pages; Ruby 3.1+ é uma boa base local)
- Bundler
- Git

## Rodar localmente

```bash
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```

Abra http://localhost:4000.

## Criar um artigo

Crie um arquivo em `_posts/` com a data no nome:

`_posts/2026-11-01-primeiro-artigo.md`

Cada artigo deve definir `lang` (`pt` ou `en`) e um `permalink` explícito para manter as URLs separadas por idioma.

Exemplo em português:

```yaml
---
layout: post
title: "Meu primeiro artigo"
description: "Uma breve apresentação do blog."
date: 2026-11-01 09:00:00 -0300
lang: pt
translation_key: first-post
categories: [desenvolvimento]
tags: [jekyll, ruby]
permalink: /pt/artigos/meu-primeiro-artigo/
---
```

Versão em inglês: crie outro arquivo com `lang: en`, o mesmo `translation_key` e `permalink: /en/articles/my-first-post/`.

## Publicação no GitHub Pages

1. Crie um repositório chamado `hemershon.github.io`.
2. Envie este projeto para a branch `main`.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **GitHub Actions**.
5. O workflow em `.github/workflows/pages.yml` fará o build e o deploy a cada push na `main`.

O endereço inicial será `https://hemershon.github.io`.

## Idiomas

A página inicial em `/` apresenta o conteúdo em português. A versão em inglês fica em `/en/`.
Os artigos são separados por idioma e relacionados por `translation_key`. Ao criar uma tradução, use a mesma chave nos dois artigos.

## Personalização

- `_sass/`: tokens, layout, componentes e estilos de código.
- `_includes/`: cabeçalho, rodapé, cartões e controles.
- `_layouts/`: estruturas das páginas.
- `assets/js/main.js`: menu mobile e tema claro/escuro.
- `_data/navigation.yml`: links de navegação.
