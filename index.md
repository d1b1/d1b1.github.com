---
layout: none
title: Home
---

{% include head.html %}
{% include ga.html %}

<body>

  {% include svgs.html %}
  {% include colors.html %}

  <div class="container py-3">
    <header>
      {% include colors.html %}
      {% include navbar.html %}
      {% include homepage/hero.html %}
      {% include homepage/profile.html %}
      {% include homepage/fcto_why.html %}
    </header>

    <main>
      <hr>
      {% include homepage/engagement.html %}

      <!-- {% include homepage/pricing.html %} -->
      <!-- {% include homepage/packages_legacy.html %} -->

      {% include homepage/packages.html %}
      {% include homepage/package_stack_review.html %}
      
      {% include homepage/tools.html %}
      {% include homepage/perspective.html %}
      {% include homepage/references.html %} 
      {% include homepage/tldr.html %}
      {% include homepage/schedule_cta.html %}
    </main>

  {% include footer.html %}
