---
title: Low-Code Recipes
layout: default
subtitle: Practical approaches to tech stack decisions for growth-stage SMBs navigating code vs. low-code trade-offs
sitemap: true
---

{% include subStyles.css %}

I write regularly about tech leadership challenges I see working with growth-stage SMBs. These articles 
share practical approaches to common decisions: when to use custom code vs. low-code solutions, how to 
reduce delivery risk, and ways to optimize tech costs without sacrificing outcomes. If you want to read 
as I write, [subscribe](https://lowcodecto.com/subscribe).

The value of interim tech leadership comes from applying learnings across different companies and 
situations. Everyone benefits when ideas are **shared** and **applied**.


{% assign articles = site.articles | sort: "date" | reverse %}
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
     The Executive Perspective
    </h5>
    <p>
        These articles are written for CEOs and executive teams at growth-stage SMBs who need to make 
        informed tech decisions without getting lost in technical details. Each article focuses on business 
        outcomes: cost, speed, risk, and delivery cadence—helping you understand the trade-offs and 
        make better choices for your business.
    </p>
</div>

<style>
 hr { border: 1px solid #DFDFDF; }
</style>