---
layout: page
title: Artigos
lang: pt
translation_key: articles
permalink: /artigos/
description: "Todos os artigos publicados."
---

<div class="articles-listing">
  <header class="page-header">
    <h1>{{ page.title }}</h1>
    <p class="page-description">Reflexões, tutoriais e anotações sobre desenvolvimento de software e tecnologia.</p>
  </header>

  <div class="articles-controls">
    <div class="search-box">
      <label for="search-input" class="sr-only">Buscar artigos</label>
      <input type="search" id="search-input" placeholder="Buscar por título, categoria ou tag..." autocomplete="off">
    </div>
    
    <div class="category-filters">
      <button class="filter-btn active" data-category="all">Todos</button>
      {% assign categories = site.posts | where: "lang", "pt" | map: "categories" | flatten | uniq %}
      {% for category in categories %}
        <button class="filter-btn" data-category="{{ category | slugify }}">{{ category }}</button>
      {% endfor %}
    </div>
  </div>

  <div class="post-grid" id="articles-grid">
    {% assign articles = site.posts | where: "lang", "pt" %}
    {% if articles.size > 0 %}
      {% for post in articles %}
        {% include post-card.html post=post lang="pt" %}
      {% endfor %}
    {% else %}
      <div class="empty-state">
        <p>Ainda não há artigos publicados nesta categoria. Volte em breve.</p>
      </div>
    {% endif %}
  </div>
  
  <div id="no-results" class="empty-state" style="display: none;">
    <p>Nenhum artigo encontrado para a sua busca.</p>
  </div>
</div>
