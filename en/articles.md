---
layout: page
title: Articles
lang: en
translation_key: articles
permalink: /en/articles/
description: "All published articles."
---

<div class="articles-listing">
  <header class="page-header">
    <h1>{{ page.title }}</h1>
    <p class="page-description">Reflections, tutorials, and notes on software development and technology.</p>
  </header>

  <div class="articles-controls">
    <div class="search-box">
      <label for="search-input" class="sr-only">Search articles</label>
      <input type="search" id="search-input" placeholder="Search by title, category, or tag..." autocomplete="off">
    </div>
    
    <div class="category-filters">
      <button class="filter-btn active" data-category="all">All</button>
      {% assign categories = site.posts | where: "lang", "en" | map: "categories" | flatten | uniq %}
      {% for category in categories %}
        <button class="filter-btn" data-category="{{ category | slugify }}">{{ category }}</button>
      {% endfor %}
    </div>
  </div>

  <div class="post-grid" id="articles-grid">
    {% assign articles = site.posts | where: "lang", "en" %}
    {% if articles.size > 0 %}
      {% for post in articles %}
        {% include post-card.html post=post lang="en" %}
      {% endfor %}
    {% else %}
      <div class="empty-state">
        <p>No articles published in this category yet. Check back soon.</p>
      </div>
    {% endif %}
  </div>
  
  <div id="no-results" class="empty-state" style="display: none;">
    <p>No articles found matching your search.</p>
  </div>
</div>
