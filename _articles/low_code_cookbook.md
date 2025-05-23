---
title:  Low Code Cookbook!
subtitle: Every solution builder needs alternatives to expand their understanding of possibilities.
layout: default
published: false
date: 2024-05-01 00:00:00
topic: general
order: 100
---

{% include subStyles.css %}

### My Low Code Cookbook

This is a personal project, driven by the pain and learnings of my last startup Meenta.io (R.I.P). We were a Techstars company
from the Boston 2018 program. We ran for six years and executed like crazy. We died when COVID-19 ended. We were not able to pivot
out of some of the business decisions driven by the pandemic supply chain requirements. As the CTO and Co-Founder, I was painfully
capital-efficient.

After exiting, I realized that I had written code for six years straight. Six years of writing code full-time. I realized I could rebuild
the entire stack in record time if I changed my mindset: "Code is CapEx".

I devolved all the diagnostic workflow features, services and learnings and spent a year researching alternatives to building
in-house. This was a painful learning process! If I had had more context and perspective, while I was in the weeds, I would have
made very different decisions.

This is the core thesis of my fractional CTO practice.

A long story short, my research results in an Airtable, and that led to this. This is not a survey of the entire industry. It's not
complete. It's my view of a set of technology alternatives. Solutions that might have changed the arc of my startup.

---

### Primary Criteria: The 'Stack Need'

This is a larger set of tags that allow for mapping a given solution into a larger tech stack. If you think any given solution, it's
a composite of different technologies that knit together. This is set up to make it easy to abstract the role and provide other
related solutions.

For example, show all the 'Authentication' solutions. This will yield any solution that solves this problem, in some way or form.

---

### Secondary Criteria: The 'Type'

The following are three categories that best group solution types. Another view of the these is as a 'cost' indicator.
Code costs more. Code takes longer. Teams are needed to support.

<div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
            <div class="card-header py-3 text-bg-primary border-primary">
                <h4 class="my-0 fw-normal">"No Code"</h4>
            </div>
            <div class="card-body">
                <p>
                    This category denotes a solution, pattern or library that offers a pure
                    no-code experience. If the primary use case is code-less, then it gets this
                    status, even if other features can utilize some code.
                </p>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>100% code free solution</li>
                    <li>Works with other low-code options.</li>
                    <li>Make Devs mad.</li>
                    <li>Low switching cost.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">"Low Code"</h4>
            </div>
            <div class="card-body">
                <p>
                    This category denotes solutions that lower the overall volume of code
                    in a given solution. So a library like Platformatic.dev, would be a low-code
                    solution. This is reserved for solutions that need a bit of code to customize
                    or delivery.
                </p>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>Some Code required.</li>
                    <li>Makes developer feel better.</li>
                    <li>Some switching costs</li>
                    <li>Feels like Glue Code.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">"Less Code"</h4>
            </div>
            <div class="card-body">
                <p>
                    This category is for solutions that support or enable the other two categories. It's a catch-all.
                    A no-code purist will __hate__ these solutions, but these solutions can help transition a traditional tech team
                    into new patterns.
                </p>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>Healthy Code Required</li>
                    <li>Developers are fine with it</li>
                    <li>High Switching Cost</li>
                </ul>
            </div>
        </div>
    </div>
</div>

### Misc Criteria: Founded, Funding etc.

I have included a few other facets that I find helpful. When was a specific company founded? This is helpful for
understanding the maturity of a given solution. Funding helps with this understanding. __Governance<__ is a new category
I am working on, that let me know if I can expect an impact on my SOC2, if I get a BAA, etc.



Happy to take new entries. Happy to take your ideas. But in this mine, it solves my [tech itch](https://github.com/liftoff-app/liftoff/issues/423").

<a class="btn btn-primary btn-lg" href="https://less-code.stephansmith.solutions" target="_blank">
    Search the Low Code Cookbook
</a>

Good luck and happy hunting. :)

{% include articleFooter.html %}
