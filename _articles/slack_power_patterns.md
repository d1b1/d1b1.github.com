---
title: Slack as your v0.1 Product?
layout: default
subtitle: Most people look past the value of Slack in building solutions. Don't.
published: true
---

{% include subStyles.css %}

<img src="/assets/images/slack.png" align="left" style="border-radius: 10px; width: 200px; margin-right: 20px;">
Most people would not describe Slack as a No-code tool or a GTM platform! But if you reframe
what it does, how it can be used and its place in your technology stack it becomes a power tool.
It can be your GTM product, at least for v. 0.01.

Last year I connected with Bay Area startup that deployed its first three versions as an Excel spreadsheet. Plain old vanilla
Excel, with macros and a ton of customized features. The conversation with their CTO helped me cement my thinking about how startups can
use off-the-shelf tools and patterns to get early traction.

Slack was a natural target for this reframe. Here are five aspects of this ubiquitous tool that can be used differently.

#### 1. All Browsers, all Devices and All OSs

No startup wants to build device or OS-specific solutions if they can help it. This might seem strange to call out,
but it is; Slack works out of the box, on all devices and operating systems.

---

#### 2. Frictionless Customer Onboarding

Many employees start work on day one with Slack already installed on their mobile devices, on their laptops. No custom
installs, or readme. This means that you are delivering a service into a tool your customers, your employees and your
co-founders already know and love.

---

#### 3. Slack Webhooks

Sending messages from your other technology stack components to Slack is a great way to knit together your systems. Webhooks
and Apps are fundamental to the Slack value prop. Lever away. No SMS costs. Since Slack supports push notifications to all their
devices, you don't have to do any work to send updates or messages.

---

#### 4. Slack Forms

Slack supports custom forms and workflows. This means it starts to drop into the no-code/low-code category of solutions. To see the value,
take a look at their library of templates and tools for <a href="https://app.slack.com/block-kit-builder"> Builder Tool</a> processes.
This tool will let you build sample forms, and send them to Slack to try out. Once the user completes the form, slack sends the results
out to an endpoint.

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

---

#### 5. Command Line?

This is a power tool that some slack users, usually when they are not familiar with the concept of command line tools, overlook.
Slack comes with command line options to do standard activities: 'send a message' etc. But it also supports allowing you to
build your own set of command line options.

<div class="row">
    <div  class="col-md-6">
      <p>
        In any slack channel, type '/'. You will see a list of commands
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

#### ROI for Slack Solution

Finally, lets think in terms of ROI. The code you do not write, can be your most valuable product. Building a web application and all the
work needed to make it production, ready takes time, effort and money. Slack is stable, installed and secure. It might not provide the startup founders'
need for branding and logo visibility, but is very cost-effective. Free is always cost-effective!

The replacement cost of Slack, if it's reframed as a No-code/GTM platform that delivers value directly to your customer, can be substantial. The actual
savings depends upon your specific business and the number of developers you did not have to hire. Keep in mind that startups raise money to hire teams.

Slack in the place of React App; Slack as your Identity Provider; Slack as your cloud hosting provider (GCP or AWS). You will still have to write some API endpoints,
maybe a few Lambda or serverless functions, but that work will cost a fraction of what a full-stack solution will cost.

Now, if you tell your lead developer you want your first version to be a slack integration, expect to be punched, or at the very least gently ridiculed.
This approach will not get a whole-hearted YAAAAAA from your tech team. It will feel like cheating. In a way, this approach is cheating. Your first GTM is
a hermit crab living in the shell of Slack. It will not have your logo on it, but if it gets your team the learnings and starts the revenue flowing, it's fine.

Again, this approach does not work for every startup, but it can be a healthy thought process to break the "...let's write [expensive] code..." pattern of thinking.

<div class="ceo-note">
    <h5>
        Security Point
    </h5>
    <p>
        Slack is free safe to use, supports 2FA and enables audit evidence.
        I recommend you configure 'Enable & Enforce 2FA' for your users. This
        ensures that your users are secure, and the integration you set up is equally
        protected.
    </p>
</div>

{% include articleFooter.html %}