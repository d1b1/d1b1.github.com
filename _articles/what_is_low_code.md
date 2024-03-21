---
title: What is Low-Code?
subtitle: No-code has been around a while, and its maturing fast. But it has problems. SAS vendor lock-in concerns, scalability and supportability.
layout: default
---

{% include subStyles.css %}

<p>
    No-Code is a term that decribes a suite of Sas products that allow for 
    the building of workflows, user internaces and tools, with then for code. 
    Its not new. Ionic built a mobile app builder in 2010 that enable user 
    with a little knowledge of what they need, without the learning curves that 
    come with full native mobile application development.
</p>

<p>
    There is plenty of bad things said about no-code. Some is true, but some 
    is not. This is a break down of no-code, list of vendors. But more importantly
    it outline how an approach to 'low-code' can gain the benefits of both 
    approaches.
</p>

<div class="ceo-note">
    <h5>
        Is No-Code IP?
    </h5>
    <p>
        No CEO wants to be told by their investors what their no-code
        solutions are not IP. Think about these concerns when you approach
        these tools. No-code, with the right strategy and communications
        is IP!
    </p>
</div>

##### SMB vs Enterprise Vendors

As with any marketplace where money is being made lowerin the cost of code 
ownership, there is a huge range of solutions, aimed at different segemetns. Some
focus on SMBs, and other focus on larger enterprise clients and government agencies.

<img src="/assets/images/bubble.png" width="170" class="img-responsive img-thumbnail float-start">
&nbsp;
<img src="/assets/images/retool.png" width="120" class="img-responsive img-thumbnail ">
&nbsp;
<img src="/assets/images/outsystems.png" width="250" class="img-responsive img-thumbnail ">


##### Enterprise Solutions

<p>
    Domo, Outsystems are two examples of solutions targeting the enterprise market. 
    When a vendor leads with SOC and security concerns, its a clear sign they are speaking 
    to the CIO and CISO at large companies, who can block a vendor from their organizations.
    There are fewer of these vendors then your might expect.
</p>

<p>
    The ecosystems for no-code for SMBs is huge. This is not full list, but there 
    are some standouts: Bubble.com, Retool.com, ddd.com
</p>

<p>
    A good criteria to use when assessing a given no-code Sas product is how they 
    manage code changes. Being able to clone and manage changes in a git repo a huge
    feature set. Its not easy, and can pose issues for these vendors, as access to 
    no-code apps as large JSON configurations, breaks the vendor lock. 
</p>

--- 

##### Can I move my no-code app?
No. For now, there is no real way to move a no-code app between vendors. This vendor 
lock is one of the first objections you will hear when proposing this to your stack.

There are come options that can allow for some degree of portablity, but there is 
no wholesale portability option right now.

--- 

##### Is there one vendor to go with?
No. For a lot of reasons going with a single vendor to handle everthing is a bad 
idea. Its the no-code equivalent of building a [monolithic application](https://en.wikipedia.org/wiki/Monolithic_application). Below are links to 
reference is you need some background on the concept. The TLDR for non-coders, is stay
way from monolithic solutions.

<hr>

##### What are low-code patterns?
Low-code is a more of an approach and a set of techniques then a single vendor
or solution. The primary goal of low-code is to gain the benefits of  no-code,
while keeping the power of code. A gentle balance gives a company a suite of
solutions that are free from vendor locking, scalable either toward or way from
a specific vendor, and have a lower cost of code ownership.

Below are four examples. A good approach to low-code is the approach that 
companies have taken with Agile. There is a standard, but every company is 
different and its adapted to met specific needs.

__Here is a selection of vendors that can be knit to powerful solutions:__

<div class="row">
    <div class="col-4">
        <a href="https://platformatic.dev/" target="_blank">
            <img src="/assets/images/platformatic.png" width="100">
        </a>
    </div>
    <div class="col-8">
        <b>
            Value Prop: World class Schema driven API.
        </b>
        <p>
            Platformatic is the brain child of Matteo and his team. The builders 
            of the fastify ecosystem of ultra fast Node.js API tools. The secret 
            sauce of this tool is that it builds a rest API in seconds using the 
            schema in SQL database. As business logic changes, endpoints come out 
            of the library and into plugins. 
        </p>
        <p>
            Also it support on-prem. An open source that can be taken on 
            prem is huge. 
        </p>
    </div>
</div>

<hr> 

<div class="row">
    <div class="col-4">
        <a href="https://platformatic.dev/" target="_blank">
            <img src="/assets/images/retool.png" width="200">
        </a>
    </div>
    <div class="col-8">
        <b>
            Value Prop: development free admin tools.
        </b>
        <p>
            Retool.com is a no-code for admin tools. Admin tools are an 
            infinite code time sink. In the six years I build my startup, we 
            committed to our backend UI tooling almost daily. Retool 
            makes this easy. It moves the admin tooling out of the dev 
            teams responsbiltiy and empowers a product owner to drive 
            process improvements.
        </p>
    </div>
</div>

<hr> 

<div class="row">
    <div class="col-4">
        <a href="https://platformatic.dev/" target="_blank">
            <img src="/assets/images/neon.jpeg" width="200">
        </a>
    </div>
    <div class="col-8">
        <b>
            Value Prop: fully managed DB.
        </b>
        <p>
            Neon.tech. Fully managed Postgres, with branch 
            controls for changes. Someone decided to merge the 
            power of git branches with the SQL schemas of Postgres
        </p>
    </div>
</div>

<hr> 

<div class="row">
    <div class="col-4">
        <a href="https://sperta.com/" target="_blank">
            <img src="/assets/images/sperta.png" width="100" style="border-radius: 10px;">
        </a>
    </div>
    <div class="col-8">
        <b>
            Value Prop: API Rules Engines
        </b>
        <p>
            <a href="https://sperta.com/" target="_blank">Sperta</a>. My newest find. A json 
            rules engine deployed as a SAS, via a REST API. This allows
            one team to own the rules engine and workflow, and the 
            API team to utilize.
        </p>
        <p>
            Keeps your business logic out of code and accessible.
        </p>
    </div>
</div>

<hr> 

<div class="row">
    <div class="col-4">
        <a href="https://fly.io/" target="_blank">
            <img src="/assets/images/fly.png" width="170">
        </a>
    </div>
    <div class="col-8">
        <b>
            Value Prop: devOps-less Edge Hosting
        </b>
        <p>
            <a href="https://fly.io/" target="_blank">Fly.io</a>.Edge hosting 
            without the devOps of every other cloud provider. This service 
            makes scalable edge computing turn-key.
        </p>
        <i>
            This is just one of four similar vendors.
        </i>
    </div>
</div>

<hr> 

<div class="row">
    <div class="col-4">
        <a href="https://pliable.co/" target="_blank">
            <img src="/assets/images/pliable.png" width="170" style="border-radius: 10px;">
        </a>
    </div>
    <div class="col-8">
        <b>
            Value Prop: a No-code Data Scientists
        </b>
        <p>
            <a href="https://fly.io/" target="_blank">Pliable.io</a> is a 
            data science tool that replaced some of the transformation tasks
            of inhouse data science teams.
        </p>
    </div>
</div>

<hr> 

<div class="row">
    <div class="col-4">
        <a href="https://pliable.co/" target="_blank">
            <img src="/assets/images/slack.png" width="170" style="border-radius: 10px;">
        </a>
    </div>
    <div class="col-8">
        <b>
            Value Prop: Customizable Operations
        </b>
        <p>
            <a href="https://slack.com/" target="_blank">Slack.com</a> is the 
            low-code orchistration layer. 
        </p>
    </div>
</div>

<br>

#### Wrap Up
These tools are not monolithic solutions. These are components that can 
combined and tasked to build the pieces of a technology stack that used the 
power of both systems.

<div class="tech-note text-center">
    <h5 style="margin: 5px;">API + Database + Admin UI + Data Science + Business Rules + Edge Hosting</h5>
</div>

When combined with new patterns in product ownership, code of code ownership 
and AI, hold the promise of more responsive solutions. The reason we all adopted 
agile in the 2000's was the need shorten deployment cycles and keep our product 
aligned to the customers needs. 

<div class="mt-5 tech-note">
    <h5>
    Tech Note
    </h5>
    <p>
        While low-code impact my SOC? Yes it will. There is no single answer.
        It all depends upon your mix and how you implement. Each of these
        support enforced 2FA.
    </p>
</div>

[Back](/recipes)