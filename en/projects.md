---
layout: default
title: Projects
lang: en
permalink: /en/projects/
description: "Software projects and experiments."
---
<div class="page-shell">
  <header class="page-header">
    <h1>{{ page.title }}</h1>
    <p class="page-description">{{ page.description }}</p>
  </header>

  <div class="project-grid">
    {% for project in site.data.projects %}
      {% include project-card.html project=project lang="en" full=true %}
    {% endfor %}
  </div>
</div>
