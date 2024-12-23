---
title: Databases For Rapid Solutions
layout: default
subtitle: Which database to start with is a key decision, as it impacts the technology you can select, the pattern of storage and the frameworks that work the best.
published: true
date: 2024-02-20 00:00:00
topic: general
order: 5
---

{% include subStyles.css %}

### SQL vs No-SQL
The long & short of this concept is that you either have a very declarative data store that locks down fields and relationships or not.
In the end, the all work, and they store your data. In No-SQL you can data fields, names and structures on the fly, and handle the differences in code. In SQL
you have to do more work to change the way data is stored, but your code is
clear and more concise.

Here is a short reference list:

<div class="row">
    <div class="col-6">
        <b>
            SQL
        </b>
        <ul>
            <li>MySQL</li>
            <li>Postgres</li>
            <li>SQLLite</li>
            <li>AWS RDS</li>
            <li>Oracle</li>
            <li>Many more...</li>
        </ul>
    </div>
    <div class="col-6">
       <b>
            NoSQL
        </b>
        <ul>
            <li>MongoDB</li>
            <li>DynamoDB</li>
            <li>Firebase RTD</li>
            <li>Firestore</li>
            <li>Many more...</li>
        </ul>
    </div>
</div>
---

### How we choose
It might be surprising. Most startups think less about the impact of their application's database than they should. Often this is the domain of the
first developer on site, the first tech hire or just the opinion of the most technical person around the founder. This is not startup laziness. It's because
founders do not assign much value to the database selection.

The dirty secret about developers is that we rarely think about the impact of SQL vs No-SQL storage options. Sometimes we know both solutions
and deployed production applications in each. But often we know what's new, what's worked, or the storage option we like the most. Our technology
decision-making rubrics are not mature. At least not until we get to the VP Eng or CTO level.

It should not be surprising, but developers have favorite solutions. Their preferences are fine, but not when assessing patterns that will speed up ROI or long-term support costs.

--- 
### Rule of Thumb
Without getting in a 'this' database is better than that database argument, here are a few things to keep in mind.

__a. Need Flexibility Most__
If you do not know or can not know how your data will be stored, then go with no-SQL. It will give you more flexibility when you
don't have specifics. Your front-end coder can solve issues.

__b. Need Flexibility Less__
If you do know how your data will be stored, and do not expect that __new information__
will dramatically alter your thinking, then go with SQL.

__c. Known Security Concerns__
If you know are going into a regulated space, then the category 'full managed datastore' is worth
exploring. In that case, focus on GCP and AWS fully managed options. or Snowflake.

---

#### When Needs Change
SQL comes with schemas and structure, but there are patterns that can be used to move between solutions. [Prisma.io](https://www.prisma.io/) is a perfect example. It makes schema, for either SQL/NoSQL approach a viable option. Additionally, solutions like Prisma, can help you scale load and costs in a cost-effective method long before you develop the technology team that will make better decisions.

<br>

<div class="tech-note">
    <h5>
      Tech Note
    </h5>
    <p>
        SQL or No-SQL. It has no impact on your SOC needs. Move on.
    </p>
</div>

{% include articleFooter.html %}