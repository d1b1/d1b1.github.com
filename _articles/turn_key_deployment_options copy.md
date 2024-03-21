---
title: Turn-key Deployment Options
subtitle: Deployment is a late stage development process that should be included from inceptions of a project.
layout: default
---

{% include subStyles.css %}

<p>
    Code deployment is just a code word for how you get your code
    from your local machine, or your developers laptop to your site. This 
    requirement is often something that get added to a project after the 
    team grows past its initial founders/coders.
</p>

<p>
    In the old days when we only had Hudsen and Jenkins to work with, and the 
    knowledge and experience to get this setup was high, it was often left out. But 
    that has changed, there are now vendors who offer this service. 
</p>

<div class="ceo-note">
    <h5>
        The CEO TL;DR
    </h5>
    <p>
        As a CEO, you only care about this part of your stack because it provides
        you with tools to get features live <b>quickly</b> and <b>safely</b>. Having a dev log into
        a production AWS EC2 instance to pull code live, is a bad sign. This feature 
        is cheap and pays off quickly.
    </p>
</div>

<br>

<h4>
    Some Options to get started.
</h4>

<p>
    Here are three good examples of (almost) turnkey simple 
    deployment tools (aka CI/CD).
</p>

<div class="row">
    <div class="col-4">
        <a href="https://github.com/features/actions" target="_blank">
            <img src="/assets/images/github-actions.png" width="300">
        </a>
    </div>
    <div class="col-8">
        <p>
            <b>Github Actions</b> - This features was launched in 2017, allows for code build, testing and
            deployment with a few simple file changes to your github repos. Getting setup with 
            their actions takes less then 30 minutes, and it has huge benefits. 
        </p>
        <p>
            First its free with a github account. Second, it conditions your team to start 
            using secrets to manage API keys etc. And finally, can be a good screening question
            for your new hires. (Is they do not know about github actions, then maybe they are too
            green to hire?
        </p>
    </div>
</div>

<hr>

<div class="row">
    <div class="col-4">
        <a href="https://www.cloudbees.com/products/codeship" target="_blank">
            <img src="/assets/images/codeship.png" style="float: left;" width="200">
        </a>
    </div>
    <div class="col-8">
        <p>
            Oh, <b>Codeship.io</b> (now owned by CloudBees). It has been a staple for dev teams for years. This company
            come through Techstars in 2011, has been offering perks for 10 years. They are very very startup friendly.
            Ping their support team and they help. And more importantly they support deployments from Github to either 
            a docker contains or directly to their build environment.
        </p>
    </div>
</div>

<hr>

<div class="row">
    <div class="col-4">
        <a href="https://www.travis-ci.com/" target="_blank">
            <img src="/assets/images/travis-ci.png" width="200">
        </a>
    </div>
    <div class="col-8">
        <p>
            Last I heard, this was a Berlin based startup! Killer product, very easy to configure, and 
            free for open-source, and afordable for private repos. It uses a local `yaml` file to configure 
            your deployment workflows.
        </p>
    </div>
</div>

<br>
<br>
<br>
<i>
    This is not a complete list. Not need to do the googling for you. :)
</i>
<br>
<br>

<div class="tech-note">
    <h5>
    Tech Note
    </h5>
    <p>
        Having your deployment workflows stored in code is a huge win at SOC2 audit time. If you can show
        that your processes for deploywing code are declaratrive, and tracked with version control (i.e. in Github) you are actually showing people that your company has already been complying with cyber security requirements. Basically its a easy win.
    </p>
</div>

[Back](/recipes)