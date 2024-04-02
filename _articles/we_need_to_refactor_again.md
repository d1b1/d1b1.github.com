---
title: We need to refactor again!
subtitle: This is the battle cry of many developers when faced with technology changes, hard to debug bugs, or scaling issues. 
layout: default
published: false
---
 
{% include subStyles.css %}

CEOs and Product Owners have all heard this refrain!

It causes stress. It adds time to the roadmap, and stresses out teams. This article
is a quick exploration of this character trait of developers.

We do not do this to annoy. And we are not trying to slow down a project.

To understand why this pattern is so common, it can help to unpack the mind of a
developer. While code is complex and sufisticaed, the reason why developers default to this approach
can very simple, if you understand the world from the eyes of your developer.

#### Is more fun to start fresh!
Most developers when faced with changing requirements will, at some point, mentally
throw up their handes and option for a ground up rebuild. i.e. fractor. 

#### Technology Changes
There are three major factors putting pressure on developers. New cloud solutions & approaches, new vendors and products and new code libraries.

Example. In 2012 I attended the second Backbone.js conference in Boston. Backbone JS was a 
short-lived, but wonderful library that provides views, models and controllers for the new 
patterns coming up with single page applications (aka SPAs). This library's lifespan was short-lived. Measured in months. The evolution to libraries and frameworks like Angular, Vue and React supplanted Backbone.js within a eighteen months.

Sadly, there was no Backbone.js Conf the next year.

At the time we all were using Underscore.JS, a library for array and object collections work that had grown out of the New York Times Data visualization team and their grants from the Knight Foundation. During the conference, a presenter launched a new library called LoDash (a play on the keyboard underscore character). This new library took the patterns of Underscore.js and and added browser hacks that added dramatic speed improvements. And it was lauded as a method for method drop-in replacement.

I watched as developers learned about the drop in replacement value of this new library, opened
their laptops, and hot-swapped the library. At a conference, during a presentation! It was amazing to see how much developers love the new shiny and sexy library.

For reference, hot-swapping a library at a conference is not a good pattern.

#### Code Complexity
One of the unstated reasons that developers recommend replacement is code complexity. It takes
a lot of time to learn a new codebase, inteneralize the rules and then get comfortable enough 
to start making changes. 

We are not lazy, we just always think starting fresh is easier. We do not want to own someone
elses code.

#### How to push back?
There is no simple solution. Being forewarned is the first step. Refactors come with their 
own unique set of risks. One approach to request the developer to provide a detailed assessment
of he reasons why the current solutions is not viable. Detailed, is not a verbal summary. Forcing 
a developer to take the time to outline specifics, can sometimes break the spell.

If you have a developer who catches themselves, and is self-aware enough of the trap and
owns up to the emotional desire to start fresh, then you have a keeper. Give that developer a
title bump, and hold them close.

A second approach is to have the developer do a replacement cost estimate, using off-the-shelf
options only. Forcing the developer to play devil's advocate and do the work to find existing
solutions that could replace custom-build solutions can really help surface hidden issues.

#### Developer hate other developers code
This is not surprising. What master chef wants to work from another chef's recipes? It's no
different for developers. We hate how other developers name their files, name their methods and organize
the classes. Hate is not too strong a word.

Almost all developers are smart enough to keep this fact hidden. We know it makes us look
like snowflakes and a bit crazy.

#### Build is better buying
A final piece of the developer mindset, is that we always think we can build something better. We 
all know intelquallyt that some of the core libraries we use amazing. But we still will find reasons
to write out own method, and not use the method already imported from a system package. 

I have watched developer convince themselves that they need to build their own form validation
class, and ignore the Angular Form API, because of desire to do it better. If a global survey was 
possible, I predict that most codebases had both versions in their code; loaded library method, and localized
custom version. 

Keep this in mind when you are faced with the statement: We need to refactor.

#### Wrap UP
Expect to be told that the current solution, with customers and revenue, is no good and a full bottom-up
rebuild is needed. Expect to hear about security issues, memory leaks and testing problems. These are
the tools of the developer who want to try to patterns and start fresh.

The answer is that code serves revenue. Perfect code does not generate perfect revenue. No customer
purchases a SAS product because the code was 'clean', the API integration was beautiful and the CI/CD
processes were 10x faster.

My recommendation is to simply do not respond. :) Smile and say nothing.

Coders are not children, but distractions work. Give a developer the option of a refactor, or new 
and complex stack component to integrate, and you might be able to redirect them long enough have
get past the landmine.

{% include articleFooter.html %}