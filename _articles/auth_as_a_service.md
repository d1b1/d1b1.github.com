---
title:  How to understand Identity Management?
subtitle: Usernames and Passwords are easy, but come with a roadmap cost later on as a project matures.
layout: default
published: true
date: 2024-01-15 00:00:00
topic: general
order: 6
---

{% include subStyles.css %}

One of the easiest features to add to your applications and technology stack is
identity management. Identity is the information your application uses to manage
login, access and permissions. Getting your application up and running will require
you to choose to either store usernames and passwords in your database or delegate
this feature to an outside service.

The simplest approach is to just have your developer go with the standard approach
and add fields to the database to store the `username` and `password` values for each
user. While this might seem like a simple solution, this decision can have long-term impacts.

For the past ten years, the identity management industry has matured. Now this option
is simple to add to your application. Each of the major providers offers developer-friendly
documentation and SDKs (Software Development Kits).

A good way to think about this feature in your application is to look at other
solutions that offer services you do not need to build and scale your
business quickly. i.e. Paas as Ioc, CI/CD and cloud providers.

Adding identity as a service to our applications offers huge wins
as soon as you start to add your first group of users.

<div class="ceo-note">
    <h5>
        Are passwords bad?
    </h5>
    <p>
        They are not bad, but they open up security issues that your
        application and team do not need to take on. Not having passwords in your
        control, stored on your database, means that your team does not need
        to be encryption and identity experts.
    </p>
    <p>
        Using a third-party identity provider can allow you to safely assert to
        your customers and investors that your company uses the most current cyber
        security patterns and best practices. Your business insurance can be lower
        if you can provide you have 2FA patterns fully enabled.
    </p>
</div>

##### Which solution to use?

So this is a big question. If you check out the marketing materials on the big providers,
you will get the sales pitch. The sales pitch is just that: Fluff + Promise + Cost.

A better way to think about this decision is to decide if you need a B2C or B2C identity
solution. A B2C identity provider is going to give you pricing assuming you have a larger
number of customers. A B2B identity will have pricing options assuming you have fewer
customers who might need more complex permission models. The leading vendors say they offer
both options, but in reality you want pricing that matches your specific user case.

B2C providers will talk about monthly active user accounts, while B2B will talk about
enterprise IDP and SSO options (in general).

Both of these vendor types will usually offer some identity options standard; Google, Apple,
Facebook etc. When you set up custom identity options for a large partner, then the costs
will change.

#### Active Monthly Users?
Why is this important? If your users log into your applications daily, then you care
about the total number of active users your vendors allow, and how they charge you as
your demand increases.

Hopefully, engaged and active users mean you have matching revenue. So as demand and costs
go up, your identity costs will go up. I recommend you think about and model these costs
on a per-user basis, and make sure it maps to your business model.

For example, my last startup required a combination. We offer B2B type identity options for
diagnostic labs and their staff you need to manage different aspects of their GTM
products on our platform.

We also had B2C-style individual diagnostic testing, so needed to allow a high volume
of individuals to access their medical test results. These users might share their data
with their company, but they own the data, so the pricing model was simpler.

We had a mix of both models and ended up having to select the B2C options. There are
options to have a blend of different providers, but its not simple.

#### Can we build our own?
Yes, you can. There are plenty of identity framework solutions to choose from. But this means
you are now in the identity management business. Your tech team will need to own the technology
and the subsequent sprint tickets to build and maintain.

The long-tail cost of building an in-house identity solution will show up in your SOC2 audits. It
will show us in your insurance costs, and it will show up in your training, hiring and roadmap
velocity.

#### Can I change my mind?
Yes. Moving between identity providers is very possible. Not easy, but not terrible. There
are event solutions that make the transition seamless and can happen in the background, without
your customers noticing.

I have noticed that a decent percent of the startups and companies I have worked with have
done at least one, migration as they grow out their first use cases. The sales materials in
all the vendors will trumpet their solutions as perfect. The reality is that business needs
change.

#### More
If you want more details there are two concepts to research, RBAC ([Role-Base Access Control](https://en.wikipedia.org/wiki/Role-based_access_control) and ABAC [Attribute-based Access Control](https://en.wikipedia.org/wiki/Attribute-based_access_control).
This can sound like a be a bit of a computer science concern, but understanding this concern will be expected to
organize your permissions can have a long-term impact.

<img src="/assets/images/wristband.png" width="150px" class="img-thumbnail me-4 mb-1" align="left"/>

A new entry into the identity space, [Wristband.dev](https://Wristband.dev) has built on the security
benefits of giving their clients the option to start with the attribute-based access control
approach. The TL;DR is that ABAC is a bit harder up-front but much more valuable for a company
over time. Wristband makes it turnkey-easy.

Long term your SOC team will value ABAC more. And it will lower your security risk and lower the
cost of your audits.

#### New Trends

__1. Improved User Management Solutions__

There are two trends in identity providers that you might want to think about. The first generation of
identity providers (Auth0, Cognito etc) offers decent SDKs but has some hidden roadmap costs. Customers often
had to do deeper integrations to get more advanced user management features.

For example, if you have failed 2FA setup for a customer, you can log into the Auth0 Admin console to
reset or remove a given set up. Long term teams add these integration points to their roadmap's, because
giving the entire customer support team access to the identity provider admin console is not a supportable
approach.

AWS Cognito is famous for its lack of user management features. The AWS console lacks the UI tools
that Auth0 provides. As the number of customers using your application grows, your customer support teams will start
to demand better ways to address user authentication issues. If you are going with Cognito, triple your integration
time estimates.

__2. Custom Permission Setup in the UI__

The new generation of providers; FrontEgg and  Wristband, provide more advanced SDK features that address
these user management features. Their APIs are more robust. And they offer more robust permission models that
can be dropped into applications. Their frontend UI SDKS have drop-in UI elements that allow B2B customers
to define their roles and groups. This feature allows these customers to customize your B2B application while
deploying their organization's cyber security requirements. This means you are not imposing a one-size-fits-all
security model on all your customers.

These new providers have learned from the customer issues and added features that dramatically enhance
Zero Trust patterns. (This is a topic for a different post.)

#### Next Steps
Reach out if you have questions. Identity is an often overlooked and delayed feature.

{% include articleFooter.html %}
