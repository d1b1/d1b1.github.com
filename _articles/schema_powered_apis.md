---
title: Schema Powered APIs
subtitle: Using database schemas to scaffold API endpoints provides scalable endpoints and boilerplate-free codebases.
layout: default
published: true
date: 2024-02-20 00:00:00
order: 7
---
 
{% include subStyles.css %}

#### 90% of APIs are boilerplate code

This simple observation is a game changer. At [Nodeconf.eu](https://www.youtube.com/playlist?list=PL0CdgOSSGlBaULAdbribJiENfXxPW0aLQ) in Ireland in 2022, the founders of [Platformatic.dev](https://platformatic.dev/)
outlined this issue in very clear and stark terms. Boilerplate code is a problem, because it consumes time, needs to be tested, supported and reviewed.

#### Why is boilerplate in a solution bad?

First, code has a cost of ownership. Once a dev team builds a solution, the code takes on a life of its
own. It has to be backed up, encrypted and documented. The dev teams have processes to manage change
requests. Tests have to be written and on each code change, these tests need to be updated.

Second, the time spent writing code to account for all the CRUD endpoints; consumes sprints and slows down the roadmap.

Third, each API endpoints need input validation. Simply put, does each endpoint enforce the user to provide good? APIs are not immune
from the GIGO (Garbage-In equals Garbage-Out) problem. The validation of data into each endpoint requires code, testing and
review. It can be surprising how much time and work can go into getting solid endpoint validation production
ready.

#### A solution to boilerplate code

Rethink the nature of what you build. Let the database schema define the validation. Since most endpoints do not contain
business logic, they can be handled by library-generated endpoints. The patterns used in Platformatic.dev OS project moves
the responsibility to the base library. The library reads the database schema table by table, and the field schema to define
the endpoint validation requirements.

When custom business logic is needed for a given endpoint, there are two options. You can move the endpoint out of the control
of the library, and into a plugin that contains the logic. This simple approach reduces the side of an API and dramatically
improves the stability. As changes are made to the database schema, the library keeps the endpoints in sync. It's not magic,
but it is performant.

The Platformatic modules are built on the patterns found in [fastify](https://fastify.dev/ecosystem/). This means that
Platformatic has access to a range of middle plugins that add common features; Auth0, OAuth, logging etc. Again. Low code
via tested and scalable solutions.

<div class="row">
    <div class="col-6">
        Simple SQL
        <img src="/assets/page/api-endpoint-sql.png" class="img-fluid img-responsive img-thumbnail">
    </div>
    <div class="col-6">
        Production Ready Endpoint
       <img src="/assets/page/api-endpoint-example.png" class="img-fluid img-responsive img-thumbnail">
    </div>
</div>

#### TLDR

This pattern lowers the cost of setting up and building out a database, API and the resulting development cycles.
Teaching a non-technical founder to set up tables in SQL is trivial. Shortening the ideation cycle enables products
 to move into production faster.

As a project matures and moves into production, the developer efforts remain focused on the actual business logic
needed in select endpoints, not the bulk boilerplate code found in most applications. While developers might balk
at delegating code to the library, having less boilerplate results in smaller code repositories.

The long tail value of this pattern means that teams can onboard new developers into their code faster, as
there is simply less for a new developer to review before they can make contributions and commits.

<img src="/assets/page/api-endpoint-docs.png" class="img-fluid img-responsive img-thumbnail">
<i class="fs-6">Swagger UI for 'Create Workspace' Endpoint</i>

#### API Spec & UI

An additional bonus, the Platformatic library exposes a swagger UI and GraphQL UI. The swagger API UI
allows non-technical team members to visualize the API, entities and processes. Moving business logic out of
code and into the larger team domain space improves the quality of the solutions a team brings to market.

<div class="ceo-note">
    <b>CEO Hint</b> - You should care about this approach. It's scaling behavior. It aligns business needs
    with code and the outcomes that drive traction.
</div>

{% include articleFooter.html %}
