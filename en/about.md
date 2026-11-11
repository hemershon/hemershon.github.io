---
layout: default
title: About
lang: en
permalink: /en/about/
description: "Meet Hemershon Silva."
---
{% assign data = site.data.about.en %}
<div class="page-shell about-page">
  <header class="page-header">
    <h1>{{ data.intro }}</h1>
    <p class="page-description">{{ data.bio }}</p>
  </header>

  <div class="about-grid">
    <div class="about-main">
      <section class="about-section about-summary">
        <h2>About me</h2>
        {% for paragraph in data.summary %}
          <p>{{ paragraph }}</p>
        {% endfor %}
      </section>
    </div>

    <aside class="about-sidebar">
      <section class="about-section">
        <h2>Technical Skills</h2>
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
        <h2>Looking for challenges in</h2>
        <ul class="interest-list">
          {% for interest in data.interests %}
            <li>{{ interest }}</li>
          {% endfor %}
        </ul>
      </section>

      <section class="about-section">
        <h2>Connect</h2>
        <ul class="social-links-list">
          {% for link in data.social_links %}
            <li><a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{{ link.name }} <span aria-hidden="true">↗</span></a></li>
          {% endfor %}
        </ul>
      </section>
    </aside>
  </div>
</div>
