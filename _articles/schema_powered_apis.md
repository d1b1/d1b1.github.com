---
title: Schema Powered APIs
subtitle: Using database schemas to scaffold API endpoints provides scalable endpoints and boilerplate-free codebases.
layout: default
published: false
---
 
{% include subStyles.css %}

#### 90% of APIs are boilerplate code

This simple observation is a game changer. At [Nodeconf.eu](https://www.youtube.com/playlist?list=PL0CdgOSSGlBaULAdbribJiENfXxPW0aLQ) in Ireland in 2022, the founders of [Platformatic.dev](https://platformatic.dev/)
outlined this issue in very clear and stark terms. Boilerplate code is a problem, because it consumes time,
needs to be tested, supported and reviewed.

#### Why is boilerplate in a solution bad?
First, code has a cost of ownership. Once a dev team builds a solution, the code takes on a life of its
own. It has to be backed up, encrypted and documented. The dev teams to have processes to manage change
requests. Tests have to be written and on each code change, these tests need to be updated.

Second, the time spent writing code to account for all the CRUD endpoints; consumes sprints and slows down the roadmap.

Third, endpoints need input validation. The validation of data into each endpoint requires code, testing and
review. It can be surprising how much time and work can go into getting solid endpoint validation production
ready.

#### A solution to boilerplate code
Rethink the nature of what you build. Let the database schema define the validation. Since most endpoints that do not contain
business logic, it can be handled by library generated services. The patterns used in Platformatic.dev library move the responsibility
to the base library. The library reads the database schema table by table, and the field schema to define the endpoint
validation requirements.

When business logic is needed, there are two options. You can move the endpoint out of the control of the library,
and into plugins. This simple approach reduces the side of an API and dramatically improves the stability. As
changes are made to the database schema, the library keeps the endpoints in sync.

The platformatic modules are built on the patterns found in [fastify](https://fastify.dev/ecosystem/). This means that
platformatic has access to a range of middle plugins that add in common features; Auth0, OAuth, logging etc.

[Schema to Validation]

#### TLDR
This pattern lowers the cost of setting up and building out a database, API and the resulting development cycles.
Teaching a non-technical founder to setup tables in SQL is shorter learning curve. Shortening the
the ideation cycle enable products to move into production faster.

As a project matures, and moves in production, the developer efforts remain focused on the actual business logic
needed in select endpoints, not the bulk boilerplate code found in most applications. While developers might balk
at delegating code to the library, having less boilerplate results in smaller code repositories.

The long tail value of this pattern means that teams can onboard new developers into their code faster, as
there is simply less for a new developer to review before they can make contributions and commits.

[Graphic of SQL -> Endpoint]

#### API Spec & UI
An additional bonus, the platformatic library exposes a swagger UI and GraphQL UI. The swagger API UI
allows non-technical team members to visualize the API, entities and processes.

{% include articleFooter.html %}