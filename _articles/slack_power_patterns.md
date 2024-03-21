---
title: Slack Power Patterns
layout: default
subtitle: Most people look past the value of slack in building solutions. Don't.
---

{% include subStyles.css %}

<div class="ceo-note">
    <h5>
        The CEO TL;DR
    </h5>
    <p>
        Slack is free. When you hire a CFO, they will love it. And it 
        is very easy to onboard new staff. Its better than email, and 
        less agreesive then SMS.
    </p>
</div>

<img src="/assets/images/slack.png" style="border-radius: 10px; width: 300px;">

<br>

<p>
    Most people would not describe Slack as a no-code tool. But if you reframe
    what it does, how it can be used and its longevity in your techstack it becomes 
    a power tool.
</p>

<p> 
    Here is how some companies think about Slack.
</p>

<h5>
    1. All Browsers, all Devices and All OSs
</h5>

<p>
    No startup wants to build device or OS specific solutions, 
    if they can help it. This might seem strange to call out, 
    but it is; slack works out of the box. 
</p>

<hr>

<h5>
    2. Frictionless Deployment
</h5>

<p>
    Many employees start work on day one with Slack already installed 
    on their mobile devices, on their laptops. No custom installs, or 
    readme.
</p>

<hr>

<h5>
    3. Slack Webhooks
</h5>

<p>
    Sending messages from your other technology stack components 
    to slack is a great way to knit together your systems. Webhooks 
    and Apps are fundamental to the Slack value prop. Lever away.
</p>

<hr>

<h5>
    4. Slack Forms
</h5>
<p>
    Slack support custom forms. This means its starts to drop into the no-code/low-code
    category of solutions. To see the value, take a look at their library of templates and
    tools for <a href="https://app.slack.com/block-kit-builder"> Builder Tool</a> processes.
    This tool will let you build sample forms, and send them to slack to try out.
</p>

<div class="row">
    <div  class="col-md-6">
      <p>
        Simple JSON tools.
      </p>
      <img src="/assets/images/slack-json.png" class="img-fluid img-thumbnail">
    </div>
    <div  class="col-md-6">
      <p>
        Rendered in your slack channels.
      </p>
      <img src="/assets/images/slack-form.png" class="img-fluid img-thumbnail">
    </div>
</div>

<hr>

<h5>
    5. Command Line?
</h5>

<p>
    This is a power tool that some slack users, usually when they are not familiar 
    with the concept of command line tools, overlook. Slack comes with a ton of command 
    to do starndard slack-like activities: send a message etc. But it also support 
    allowing you to build your own set of command line options.
</p>

<div class="row">
    <div  class="col-md-6">
      <p>
        In any slack channel, type '/'. You will see a list commands 
        you can use. These are standard. The money feature is that you
        can extend this with some basic configurations and serverless function
        to handle specific tasks specific to your business.
      </p>
    </div>
    <div  class="col-md-6">
      <img src="/assets/images/slack-cli.png" class="img-fluid img-thumbnail">
    </div>
</div>

<br>

<h5>
   ROI for Slack in your tech stack
</h5>

<p>
    If you think in terms of replacement value, then Slack can be a stable, 
    scalable and cost effective tool. No need to build a React.js front end, 
    no need to write Auth/Login code. Not need to host or support the codebase.
</p>

<p>
    You might need to setup a simple API, and host is somewhere, Firebase Functions, AWS
    Lambda. The cost of a few hours of serverless coding, can offset the larger costs 
    of building and supporting a UI codebase for years to come.
</p>

<ul>
    <li>Rapid deployment</li>
    <li>Pre-installed</li>
    <li>Secure</li>
    <li>Scalable</li>
</ul>

<div class="ceo-note">
    <h5>
        Tech Note
    </h5>
    <p>
        Slack is free safe to use, support 2FA and easy to collect audit evidence 
        for. Enable and force 2FA for your users gives you security from step on.
    </p>
</div>

[Back](/recipies)