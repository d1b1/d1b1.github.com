---
title: Low Friction Hosting Processes
subtitle: Don't over-thinking your hosting. No need to jump to EC2 or CloudFront.
layout: default
published: true
---

{% include subStyles.css %}

### Where do we put the applications?

Much like the selection process of SQL vs NoSQL, where to put your front-end application can be
a minefield. It can build in costs that are not needed, speed up or slow down deployment
and is often driven by the experience of your developers.

This is not a comprehensive list, but is a good sampling to open up some
options that are free, scalable and easy to use. Yes, you can split your API
hosting from your UI hosting.

---

#### Why not host your UI on Gitub? <span class="badge text-bg-success">&hearts;</span>
Github.com is rock solid. When Github has an outage the entire world knows it, because
we can not get to our code or deploy. The GitHub servers handle millions of transactions per second.
Because of this base capability for hosting git repositories, their hosting services
for static content are extremely table front-end applications.

What Github Pages does not offer is serverless functions, which just means your backend
code (API endpoints etc) needs to be hosted somewhere else.

We often think of Github pages for blogs and code documentation, but it supports CNAMES and
domain Apex records. It also provides SSL certifications by default to enable HTTPS.

---

#### or Heroku
Heroku is Amazon Web Services (AWS) but with a devOps-free wrapper (or it was). For many years
this was over powered solution for hosting a front end. It has a strong CLI and works well with
deployments from CI/CD processes. It is a bit long in the 'technology tooth'. It's been around a 
long time, and since Salesforce purchased it, the hobby __(free)__ options have gone away.

---

#### or Render.com <span class="badge text-bg-success">&hearts;</span>
[Render.com](https://Render.com) is the new hotness! It's the best of all the edge hosting options but with a strong
focus on the skills and challenges that front-end developers know the best. And it offers a free layer, for public repositories.
Since most starts do not have enough initial load to trigger the payment levels, it's a great place to build. Their
setup process works well with GitHub Actions, and your developers will find the deployment process mirrors their development
tooling processes.

---

#### or Fly.io
[Fly.io](https://fly.io) is a docker-centric hosting solution. This option has a strong hobby pricing option,
so unless you exceed 5$ a month, it's free. And most early-stage startups, this is a great solution. This solution
is great if you expect your team to need microservices or to move toward Kubernetes.

---

#### or Vercel.com
[Vercel](https://vercel.com) is designed for hosting UIs on the edge cloud. It's designed to work well
with the specific configurations needed for front-end apps. NextJS works out of the box. Their jump-start
libraries make spinning up UI solutions an easy learning curve.

---

#### or Firebase Hosting
While Github.com is my go-to, for now, [Firebase Hosting](https://firebase.google.com/products/hosting) has been my
default for a while now. It's turn-key easy. It works well with CI/CD processes, and can even be deployed directly
from your laptop if you want to get changes live quickly. You can use just the hosting service, and
ignore all the other GCP goodness. You can mix and match the solutions that site under the umbrella of Firebase;
auth, functions, hosting, AI etc.

<div class="mt-5 mb-5 tech-note">
    <h5>
    Tech Note
    </h5>
    <p>
        All these options are secure. For the past five years, SSL certificates have
        become free and standard. So no cybersecurity concerns with using any of these. If
        your deployment processes are managed from git repositories, then it's very solid.
    </p>
</div>

__* AWS EC & CloudFront__
Why, why why :) Most websites do not need load balancers and CDNs. The cost of DevOps does
not outweigh the other options above. Both AWS and GCP best practices lead startups to
over provisions long before business or scale is an issue. Scaling back can be painful
when a startup needs to cut cloud costs.

<style>
 hr { border: 1px solid #DFDFDF; }
</style>

{% include articleFooter.html %}