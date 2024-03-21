---
title: Low Friction Hosting Processes
subtitle: Don't over thinking your hosting. No need to jump to EC2 or CloudFront.
layout: default
---

{% include subStyles.css %}

### Where do we put the applications?

Much like the selection process of SQL vs NoSQL, where to put your frontend can be 
a minefield. It can build in costs that are not needed, speed up or slow down deployment
and is often driven by the experience of your developers.

This is not a comphrensive list, but is a good sampling to open up some
options that are free, scalable and easy to use. Yes, you can split your API 
hosting from your UI hosting. 

--- 

#### Why not host your UI on Gitub? <span class="badge text-bg-success">&hearts;</span>
Github is rock solid. When github has an outage the entire world knows it, because
we can not get to our code or deploy. Github handles a millions of transactions per second.
Because of this base capability for hosting git repositories, its super stable front-end apps.

What github pages does not offer is serverless functions. So use on the the following.

We often think of Github pages for blogs and code documentation, but it supports CNAMES and 
domain Apex records.

---

#### or Heroku
Heroku is AWS, but with a wrapper (or it was). For many years this was overpowered solution
for hosting a front end. It has a strong CLI and works well with deployments from CI/CD processes. 
It is a bit long in the 'technology tooth'. Its been around a long time, and since Salesforce 
purchased it, the hobby __(free)__ options has gone away.

---

#### or Render.com <span class="badge text-bg-success">&hearts;</span>
[Render.com](https://Render.com) is the new hotness! Its the best of all the edge hosting options, but with a strong 
focus on the skills and challenges that front end developers know the best. And it got a free layer. Since most starts do not have enough initial load to trigger the payment levels, its a great place 
to build.

---

#### or Fly.io
[Fly](https://fly.io) is a docker centric hosting solutions. This option has a strong hobby pricing option, so unless you exceed 5$ a month, its free. And most most early stage startups, this is a great solution. 

---

#### or Vercel.com
[Vercel](https://vercel.com) is designed for hosting UIs on the edge cloud. Its designed to work well
with the specific configurations needed for front end apps. NextJS works out of the box.

---

#### or Firebase Hosting
While Github is my go to, for now, [Firebase Hosting](https://firebase.google.com/products/hosting) was my default for so long. It's turn key easy. Works well 
with CI/CD systems, and can even be deployed directly from your laptop if you want to get changes live 
in seconds. You can use just the hosting service, and ignore all the other GCP goodness.

<div class="mt-5 mb-5 tech-note">
    <h5>
    Tech Note
    </h5>
    <p>
        All these options are secure. For the past five years SSL certificates have 
        become free and standard. So no cybersecurity concerns by using any of theses. If 
        your deployment processes are managed from git repos, then its very solid.
    </p>
</div>

__* AWS EC & CloudFront__
Why, why why :) Most websites do not need load balancer, and CDNS. The cost of devOps does 
not out-weight the other options above. Both AWS and GCP best practices lead startups to over provisions
long before business or scale is an issue.

<style>
 hr { border: 1px solid #DFDFDF; }
</style>

[Back](/recipies)