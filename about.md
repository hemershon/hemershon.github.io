---
layout: default
title: Sobre
lang: pt
permalink: /sobre/
description: "Conheça Hemershon Silva."
---
{% assign data = site.data.about.pt %}
<div class="page-shell about-page">
  <header class="page-header">
    <h1>{{ data.intro }}</h1>
    <p class="page-description">{{ data.bio }}</p>
  </header>

  <div class="about-grid">
    <div class="about-main">
      <section class="about-section">
        <h2>Experiência Profissional</h2>
        <div class="experience-list">
          {% for exp in data.experience %}
            <div class="experience-item">
              <h3>{{ exp.role }} <span class="at-company">@ {{ exp.company }}</span></h3>
              <p class="period">{{ exp.period }}</p>
              <p>{{ exp.description }}</p>
            </div>
          {% endfor %}
        </div>
      </section>
    </div>

    <aside class="about-sidebar">
      <section class="about-section">
        <h2>Habilidades</h2>
        <div class="tag-list">
          {% for skill in data.skills %}
            <span class="tag">{{ skill }}</span>
          {% endfor %}
        </div>
      </section>

      <section class="about-section">
        <h2>Interesses</h2>
        <ul class="interest-list">
          {% for interest in data.interests %}
            <li>{{ interest }}</li>
          {% endfor %}
        </ul>
      </section>

      <section class="about-section">
        <h2>Conecte-se</h2>
        <ul class="social-links-list">
          {% for link in data.social_links %}
            <li><a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{{ link.name }} <span aria-hidden="true">↗</span></a></li>
          {% endfor %}
        </ul>
      </section>
    </aside>
  </div>
</div>
