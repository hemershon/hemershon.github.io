---
layout: default
title: Projetos
lang: pt
translation_key: projects
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
      {% include project-card.html project=project lang="pt" full=true %}
    {% endfor %}
  </div>
</div>
