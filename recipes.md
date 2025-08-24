---
title: Low-Code Recipes
layout: default
subtitle: For a non-technical founder the mix of code and no-code can be a challenge. Here are some approaches to demystify the decision-making processes.
---

{% include subStyles.css %}

{% assign articles = site.articles | sort: "date" %}
{% for article in articles %}
  <div class="row">
    <div class="col-6">
      <h4>
        {{ article.title }}
      </h4>

      {% assign now = 'now' | date: '%s' %}
      {% assign published = article.date | date: '%s' %}
      {% assign diff_seconds = now | minus: published %}
      {% assign diff_days = diff_seconds | divided_by: 86400 %}
      {% if diff_days == 0 %}
        <span style="font-size: 0.8em; color: #666;">Published today</span>
      {% elsif diff_days == 1 %}
        <span style="font-size: 0.8em; color: #666;">Published yesterday</span>
      {% else %}
        <span style="font-size: 0.8em; color: #666;">{{ diff_days }} days ago</span>
      {% endif %}

    </div>
    <div class="col-6">
      {{ article.subtitle }}
      <a href="{{ article.url }}">read more...</a>
    </div>
  </div>
  <hr>
{% endfor %}

<div class="mt-5 mb-5 tech-note">
    <h5>
     The CEO Perspective
    </h5>
    <p>
        These articles are written to give CEOs and Founders with
        a non-technical perspective on decisions that are often left
        to developers to address. Look for these panels to understand
        the impact.
    </p>
</div>

<style>
 hr { border: 1px solid #DFDFDF; }
</style>