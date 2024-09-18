---
title: Design Programs
layout: default
subtitle: New, early-stage tech startups need traction. To get there they need a special type of design partner, someone who has pressing needs, and needs a solution ASAP.
order: 0
sitemap: false
---

{% include subStyles.css %}

{% assign programs = site.programs %}
{% for article in programs %}
  <div class="row">
    <div class="col-2">
      <a href="{{ article.url }}">
        <img src="{{ article.logo}}" class="img-fluid img-thumbnail">
      </a>
    </div>
    <div class="col-4">
      <h4>
        {{ article.title }}
      </h4>
      <span class="badge bg-success">Status: {{ article.status}}</span>
      <span class="badge bg-success">Stage: {{ article.stage}}</span>
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
       Feature Adoption Curve
    </h5>
    <p>
        Startups are always fighting the feature/adoption curve. Said another
        way, what are the features that generate the most early traction? One
        or two good 'must-have' features can be enough. These startups are
        looking for insights, usually from CTOs or engineering leaders on how
        to stage their features
    </p>
</div>

<style>
 hr { border: 1px solid #DFDFDF; }
</style>