---
layout: default
title: Sobre
lang: pt
translation_key: about
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
      <section class="about-section about-summary">
        <h2>Sobre mim</h2>
        {% for paragraph in data.summary %}
          <p>{{ paragraph }}</p>
        {% endfor %}
      </section>

      <section class="about-section">
        <h2>Formação Acadêmica</h2>
        <div class="experience-list">
          {% for edu in data.education %}
            <div class="experience-item education-item">
              <h3>{{ edu.course }} <span class="at-company">@ {{ edu.institution }}</span></h3>
              <p class="period">{{ edu.period }}</p>
              {% for paragraph in edu.description %}
                <p>{{ paragraph }}</p>
              {% endfor %}
              <p class="education-activities"><strong>Atividades:</strong> {{ edu.activities }}</p>
            </div>
          {% endfor %}
        </div>
      </section>
    </div>

    <aside class="about-sidebar">
      <section class="about-section">
        <h2>Competências Técnicas</h2>
        {% for group in data.skill_groups %}
          <div class="skill-group">
            <h3>{{ group.name }}</h3>
            <div class="tag-list">
              {% for skill in group.items %}
                <span class="tag">{{ skill }}</span>
              {% endfor %}
            </div>
          </div>
        {% endfor %}
      </section>

      <section class="about-section">
        <h2>Busco desafios em</h2>
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
