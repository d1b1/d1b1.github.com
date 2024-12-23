---
title: Low-Code Backlog
layout: default
subtitle: The world of solutions and patterns that fall under the heading of low-code is huge. This is the holding pen for solutions that need to get reviewed and assets for their potential role.
---

{% include subStyles.css %}

{% assign articles = site.backlog | sort: "order" %}
{% for article in articles %}
  <div class="row">
    <div class="col-6">
      <h4>
        {{ article.title }}
      </h4>
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