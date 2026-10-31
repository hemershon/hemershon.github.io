---
layout: default
title: Projetos
lang: pt
permalink: /projetos/
description: "Projetos e experiências com software."
---
<div class="page-shell">
  <header class="page-header">
    <h1>{{ page.title }}</h1>
    <p class="page-description">{{ page.description }}</p>
  </header>

  <div class="project-grid">
    {% for project in site.data.projects %}
      <article class="project-card">
        <div class="project-card__image-wrapper">
          <div class="project-image-placeholder"></div>
        </div>
        <div class="project-card__content">
          <h3 class="project-card__title">{{ project.name }}</h3>
          <p class="project-card__desc">{{ project.description }}</p>
          <div class="project-card__techs">
            {% for tech in project.techs %}
              <span class="tag">{{ tech }}</span>
            {% endfor %}
          </div>
          <a href="{{ project.link }}" target="_blank" rel="noopener noreferrer" class="project-card__link">Ver projeto <span aria-hidden="true">↗</span></a>
        </div>
      </article>
    {% endfor %}
  </div>
</div>
